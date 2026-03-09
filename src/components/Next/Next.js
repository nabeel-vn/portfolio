
// A simple React component for the Home Page
function HomePage({ name, projects }) {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <h2>Hello, I'm {name}.</h2>

      <p>I have completed {projects.length} portfolio projects.</p>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Next.js specific function to fetch data at BUILD TIME (SSG)
export async function getStaticProps() {
  // 1. You could fetch data from a database, CMS, or local JSON file here.
  // This code runs only on the server, never in the browser.

  const mockData = [
    { id: 1, title: 'E-commerce Redesign' },
    { id: 2, title: 'Personal Blog Platform' },
    { id: 3, title: 'AI Recommendation Engine' },
  ];

  // 2. The 'props' object will be passed to the HomePage component.
  return {
    props: {
      name: 'Nabeel',
      projects: mockData,
    },
    // Optional: Revalidate the page every 60 seconds (ISR)
    // revalidate: 60,
  };
}

export default HomePage;
