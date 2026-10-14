import React, { useState } from 'react';
import './Journeys.css';
import worldMapPath from './worldMapPath.js';

const journeysData = [
  {
    id: 'j1',
    country: 'India',
    countryCode: 'IN',
    lat: 28.61,
    lon: 77.21,
    tripTitle: '[Trip / Experience Title]',
    coords: '28.61 N, 77.21 E',
    stat1: { label: '[Stat Label]', value: '[Value]' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: '[One or two sentence summary of the trip.]',
    reflection: `[Longer reflection on the experience.]`,
    values: ['[Value 1]', '[Value 2]', '[Value 3]']
  },
  {
    id: 'j2',
    country: 'Oman',
    countryCode: 'OM',
    lat: 23.61,
    lon: 58.59,
    tripTitle: '[Trip / Experience Title]',
    coords: '23.61 N, 58.59 E',
    stat1: { label: '[Stat Label]', value: '[Value]' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: '[One or two sentence summary of the trip.]',
    reflection: `[Longer reflection on the experience.]`,
    values: ['[Value 1]', '[Value 2]', '[Value 3]']
  },
  {
    id: 'j3',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    lat: 24.47,
    lon: 54.37,
    tripTitle: '[Trip / Experience Title]',
    coords: '24.47 N, 54.37 E',
    stat1: { label: '[Stat Label]', value: '[Value]' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: '[One or two sentence summary of the trip.]',
    reflection: `[Longer reflection on the experience.]`,
    values: ['[Value 1]', '[Value 2]', '[Value 3]']
  },
  {
    id: 'j4',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    lat: 24.71,
    lon: 46.68,
    tripTitle: '[Trip / Experience Title]',
    coords: '24.71 N, 46.68 E',
    stat1: { label: '[Stat Label]', value: '[Value]' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: '[One or two sentence summary of the trip.]',
    reflection: `[Longer reflection on the experience.]`,
    values: ['[Value 1]', '[Value 2]', '[Value 3]']
  },
  {
    id: 'j5',
    country: 'Nepal',
    countryCode: 'NP',
    lat: 28.53,
    lon: 83.88,
    tripTitle: 'Annapurna Base Camp Trek',
    coords: '28.53 N, 83.88 E',
    stat1: { label: 'Elevation', value: '4,130 m' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: 'A high-altitude trek through the Annapurna range that tested endurance, patience, and perspective in equal measure.',
    reflection: `Walking toward Annapurna Base Camp is less about the summit and more about everything the trail demands before you get there — thinner air, longer days, and a pace that no longer belongs to you but to the mountain. Every village along the route, from Chhomrong to Machapuchare Base Camp, felt like a checkpoint not just in distance but in mindset.`,
    values: ['Endurance', 'Patience', 'Self-reliance', 'Perspective']
  },
  {
    id: 'j6',
    country: 'Georgia',
    countryCode: 'GE',
    lat: 41.72,
    lon: 44.79,
    tripTitle: '[Trip / Experience Title]',
    coords: '41.72 N, 44.79 E',
    stat1: { label: '[Stat Label]', value: '[Value]' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: '[One or two sentence summary of the trip.]',
    reflection: `[Longer reflection on the experience.]`,
    values: ['[Value 1]', '[Value 2]', '[Value 3]']
  },
  {
    id: 'j7',
    country: 'Turkey',
    countryCode: 'TR',
    lat: 41.01,
    lon: 28.98,
    tripTitle: '[Trip / Experience Title]',
    coords: '41.01 N, 28.98 E',
    stat1: { label: '[Stat Label]', value: '[Value]' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: '[One or two sentence summary of the trip.]',
    reflection: `[Longer reflection on the experience.]`,
    values: ['[Value 1]', '[Value 2]', '[Value 3]']
  },
  {
    id: 'j8',
    country: 'France',
    countryCode: 'FR',
    lat: 48.86,
    lon: 2.35,
    tripTitle: '[Trip / Experience Title]',
    coords: '48.86 N, 2.35 E',
    stat1: { label: '[Stat Label]', value: '[Value]' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: '[One or two sentence summary of the trip.]',
    reflection: `[Longer reflection on the experience.]`,
    values: ['[Value 1]', '[Value 2]', '[Value 3]']
  },
  {
    id: 'j9',
    country: 'Italy',
    countryCode: 'IT',
    lat: 41.90,
    lon: 12.50,
    tripTitle: '[Trip / Experience Title]',
    coords: '41.90 N, 12.50 E',
    stat1: { label: '[Stat Label]', value: '[Value]' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: '[One or two sentence summary of the trip.]',
    reflection: `[Longer reflection on the experience.]`,
    values: ['[Value 1]', '[Value 2]', '[Value 3]']
  },
  {
    id: 'j10',
    country: 'Spain',
    countryCode: 'ES',
    lat: 40.42,
    lon: -3.70,
    tripTitle: '[Trip / Experience Title]',
    coords: '40.42 N, 3.70 W',
    stat1: { label: '[Stat Label]', value: '[Value]' },
    stat2: { label: 'Duration', value: '[X] Days' },
    summary: '[One or two sentence summary of the trip.]',
    reflection: `[Longer reflection on the experience.]`,
    values: ['[Value 1]', '[Value 2]', '[Value 3]']
  }
];

// Equirectangular projection: converts lat/lon to percentage position
const project = (lat, lon) => ({
  xPct: ((lon + 180) / 360) * 100,
  yPct: ((90 - lat) / 180) * 100
});

const buildPath = (points) => {
  if (points.length < 2) return '';
  let d = `M ${points[0].xPct} ${points[0].yPct / 2}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.xPct + curr.xPct) / 2;
    const midY = (prev.yPct / 2 + curr.yPct / 2) / 2 - 4;
    d += ` Q ${midX} ${midY} ${curr.xPct} ${curr.yPct / 2}`;
  }
  return d;
};

const Journeys = () => {
  const [activeId, setActiveId] = useState(journeysData[0].id);
  const [showReflection, setShowReflection] = useState(false);

  const active = journeysData.find(j => j.id === activeId);
  const points = journeysData.map(j => project(j.lat, j.lon));
  const pathD = buildPath(points);

  const selectJourney = (id) => {
    setActiveId(id);
    setShowReflection(false);
  };

  return (
    <section id="journeys">
      <h2 className="journeysTitle">Journeys</h2>
      <span className="journeysDesc">Places that shaped how I think, work, and see the world.</span>

      <div className="mapPanel">
        <svg className="mapGrid" viewBox="0 0 100 50" preserveAspectRatio="none">
          <defs>
            <pattern id="dotGrid" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="0.4" cy="0.4" r="0.35" fill="rgba(242,248,255,0.10)" />
            </pattern>
          </defs>
          <rect width="100" height="50" fill="url(#dotGrid)" />
          <path d={worldMapPath} className="continentPath" />
          <line x1="0" y1="25" x2="100" y2="25" className="equatorLine" />
          <line x1="50" y1="0" x2="50" y2="50" className="meridianLine" />
          {pathD && <path d={pathD} className="routePath" />}
        </svg>

        {journeysData.map(journey => {
          const pos = project(journey.lat, journey.lon);
          const isActive = journey.id === activeId;
          return (
            <button
              key={journey.id}
              className={`mapMarker ${isActive ? 'mapMarkerActive' : ''}`}
              style={{ left: `${pos.xPct}%`, top: `${pos.yPct}%` }}
              onClick={() => selectJourney(journey.id)}
              aria-label={journey.country}
            >
              <span className="markerPulse"></span>
              <span className="markerDot"></span>
              <span className="markerLabel">{journey.countryCode}</span>
            </button>
          );
        })}
      </div>

      <div className="journeyChips">
        {journeysData.map(journey => (
          <button
            key={journey.id}
            className={`journeyChip ${journey.id === activeId ? 'journeyChipActive' : ''}`}
            onClick={() => selectJourney(journey.id)}
          >
            {journey.country}
          </button>
        ))}
      </div>

      {active && (
        <div className="detailPanel" key={active.id}>
          <div className="detailHeader">
            <span className="countryBadge">{active.countryCode}</span>
            <div>
              <h3 className="detailCountry">{active.country}</h3>
              <p className="detailTripTitle">{active.tripTitle}</p>
            </div>
          </div>

          <div className="detailStats">
            <div className="detailStat">
              <span className="statLabel">Coordinates</span>
              <span className="statValue">{active.coords}</span>
            </div>
            <div className="detailStat">
              <span className="statLabel">{active.stat1.label}</span>
              <span className="statValue">{active.stat1.value}</span>
            </div>
            <div className="detailStat">
              <span className="statLabel">{active.stat2.label}</span>
              <span className="statValue">{active.stat2.value}</span>
            </div>
          </div>

          <p className="detailSummary">{active.summary}</p>

          <div className="valuesRow">
            {active.values.map((v, idx) => (
              <span key={idx} className="valueTag">{v}</span>
            ))}
          </div>

          <button
            className="expandBtn"
            onClick={() => setShowReflection(prev => !prev)}
          >
            {showReflection ? 'Show less' : 'Read reflection'}
          </button>

          {showReflection && (
            <p className="detailReflection">{active.reflection}</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Journeys;