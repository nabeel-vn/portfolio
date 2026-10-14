/* Post-build step: renders the React app to static HTML and injects it into build/index.html
   so crawlers and AI fetchers that do not run JavaScript can read all portfolio content. */
const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');

const root = path.join(__dirname, '..');
const buildDir = path.join(root, 'build');
const indexPath = path.join(buildDir, 'index.html');
const bundlePath = path.join(buildDir, '.ssr-bundle.cjs');

// Ignore css/images/pdf imports and replace the browser-only EmailJS library with a stub.
const stubPlugin = {
  name: 'ssr-stubs',
  setup(build) {
    build.onResolve({ filter: /\.(css|png|jpe?g|gif|svg|webp|pdf|mp4|heic)$/i }, (args) => ({
      path: args.path,
      namespace: 'ssr-stub',
    }));
    build.onResolve({ filter: /^@emailjs\/browser$/ }, (args) => ({
      path: args.path,
      namespace: 'ssr-stub-emailjs',
    }));
    build.onLoad({ filter: /.*/, namespace: 'ssr-stub' }, () => ({
      contents: 'module.exports = "";',
      loader: 'js',
    }));
    build.onLoad({ filter: /.*/, namespace: 'ssr-stub-emailjs' }, () => ({
      contents: 'module.exports = { init() {}, sendForm() { return Promise.resolve({}); } };',
      loader: 'js',
    }));
  },
};

(async () => {
  if (!fs.existsSync(indexPath)) {
    throw new Error('build/index.html not found. Run the React build first.');
  }

  await esbuild.build({
    entryPoints: [path.join(__dirname, 'ssr-entry.js')],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    outfile: bundlePath,
    loader: { '.js': 'jsx' },
    jsx: 'automatic',
    define: { 'process.env.NODE_ENV': '"production"' },
    plugins: [stubPlugin],
    logLevel: 'warning',
  });

  const { render } = require(bundlePath);
  let appHtml = render();

  // Drop graphics that crawlers cannot use (the world map alone is ~60 KB of path data).
  appHtml = appHtml
    .replace(/<svg[\s\S]*?<\/svg>/g, '')
    .replace(/<img[^>]*>/g, '');

  const template = fs.readFileSync(indexPath, 'utf8');
  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) {
    throw new Error('Could not find ' + marker + ' in build/index.html');
  }
  fs.writeFileSync(indexPath, template.replace(marker, '<div id="root">' + appHtml + '</div>'));
  fs.unlinkSync(bundlePath);

  console.log('Prerender complete: ' + appHtml.length + ' characters of static HTML injected.');
})().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
