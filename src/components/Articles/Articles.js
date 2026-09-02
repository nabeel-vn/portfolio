
import React, { useState } from 'react';
import './articles.css';
import corelocPDF from '../../assets/core-loc-article.pdf';
 
const articlesData = [
  {
    id: 'a1',
    title: 'CORE-LOC<sup>TM</sup> in Modern Coastal Protection: From Design Theory to Site Execution',
    excerpt:
      "An engineering deep-dive into CORE-LOC<sup>TM</sup> armor units - how interlocking geometry dissipates wave energy, how design translates into drawings, and what actually happens on an active breakwater slope. Drawn from a month-long marine engineering internship.",
    tags: ['Marine Engineering', 'Coastal Protection', 'Breakwater Construction', 'QA/QC'],
    readTime: '14 min read',
    pdf: corelocPDF,
    content: `
      <h4>1. Introduction</h4>
      <p>Waves don't ask permission to hit the shoreline. Every coastline absorbs the force exerted by the waves relentlessly, without a homogeneous pattern. A single storm can displace multi-tonne concrete blocks with ease. The primary purpose of the breakwater is to dissipate these undesirable forces and also mitigate the silting action, thereby protecting the shore and facilitating smooth working conditions. At the heart of this defence is a simple idea turned into an engineering solution: to dissipate the wave energy rather than resisting it.</p>
      <p>The insights presented draw on direct, on-site observation collected during a month-long internship at an active breakwater project.</p>
 
      <h5>1.1 The Role of CORE-LOC<sup>TM</sup> in Modern Coastal Protection</h5>
      <p>CORE-LOC<sup>TM</sup>, as a single-layer armor unit, is designed to shield breakwaters, revetments, and other coastal structures from wave-induced erosion. Unlike older armor units such as ordinary rock armor or concrete cubes, which relied primarily on sheer mass to remain stable, CORE-LOC<sup>TM</sup> achieves stability through its interlocking property. This shift from mass-dependent to interlock-dependent design has made CORE-LOC<sup>TM</sup> one of the most material-efficient and resilient armor systems developed, and it sets the foundation for the design and site observations this article explores.</p>
      <p>When compared to older armor units like Dolos, Accropode, and Tetrapods, CORE-LOC<sup>TM</sup> provides greater structural efficiency and minimised breakage risk.</p>
 
      <h4>2. Dissipating Force: The Engineering Principle Behind CORE-LOC<sup>TM</sup></h4>
      <p>At the core of CORE-LOC<sup>TM</sup>'s design lies a single engineering principle: energy that cannot be stopped must instead be managed. Rather than resisting wave forces through sheer mass, CORE-LOC<sup>TM</sup> works by allowing wave energy to dissipate through the structure itself &mdash; passing through gaps in the armor layer, breaking apart, and losing force in the process. This shift, from resistance to dissipation, reflects a broader evolution in coastal engineering: the recognition that structures built to simply block the sea are often more vulnerable than those designed to work with its energy.</p>
 
      <h5>2.1 Brief History of CORE-LOC<sup>TM</sup></h5>
      <p>CORE-LOC<sup>TM</sup> was developed in the early 1990s by researchers Jeffrey Melby and George Turk at the U.S. Army Engineer Waterways Experiment Station's Coastal Engineering Research Center. Introduced through research published around 1994, the unit was engineered to optimise hydraulic stability, structural strength, and layer porosity, achieving reduced design stresses compared to earlier armor shapes while maintaining superior interlocking. Notably, CORE-LOC<sup>TM</sup> was also designed to interlock well with Dolos units, allowing it to serve as a repair unit on breakwaters where Dolos armoring had failed.</p>
 
      <h5>2.2 Basic Design Principle of CORE-LOC<sup>TM</sup></h5>
      <p>CORE-LOC<sup>TM</sup>'s design principle centres on interlocking geometry rather than mass. Each unit features an irregular, angular shape that, when placed in a single layer, naturally interlocks with neighbouring units to form a continuous, porous armor layer. This interlocking action distributes wave forces across multiple units instead of concentrating stress on any single block, allowing the structure to dissipate wave energy through the porous layer while resisting displacement.</p>
 
      <h4>3. Where Theory Meets Site Conditions</h4>
      <p>CORE-LOC<sup>TM</sup> unit size is primarily determined by the site's design wave height, typically based on an extreme storm event with a 50&ndash;100 year return period. More exposed structures facing higher wave energy require larger, heavier units, while sheltered sites can use smaller ones. Stability formulas, calibrated through model testing, determine the precise unit mass required.</p>
 
      <h5>3.1 Precision in Apparent Disorder</h5>
      <p>CORE-LOC<sup>TM</sup> units are placed on a predefined staggered grid rather than truly at random &mdash; placement position is fixed, while unit orientation is varied to maximise interlocking contact between neighbouring units. CIRIA's Rock Manual (C683) specifies relative placing tolerances of 13&ndash;15% of the horizontal centre-to-centre spacing for CORE-LOC<sup>TM</sup> and Accropode units, with GPS-guided cranes typically used to maintain this accuracy.</p>
 
      <h5>3.2 Translating Design into Drawings</h5>
      <p>Design drawings for a breakwater typically specify CORE-LOC<sup>TM</sup> unit sizes across different sections of the structure, with larger units used where wave exposure is greatest and smaller units in more sheltered areas. Beyond unit sizing, these drawings also define key structural and tidal reference parameters: crest elevation, crest width, and a concrete mix design defining the strength and material composition required for casting.</p>
 
      <h4>4. Site Observations</h4>
      <p>A brief description of the site observations during the internship is set out below &mdash; covering the equipment used on site, the mould used to cast CORE-LOC<sup>TM</sup> units, the casting and curing process, QA/QC compliance during concrete placement, and the curing method adopted.</p>
 
      <h5>4.1 Construction Equipment Used on Site</h5>
      <p><strong>Crane:</strong> A Sany SCC1500A crawler-mounted lattice boom crane was used for lifting and positioning the CORE-LOC<sup>TM</sup> mould, lifting cast units from the casting yard to the stockpile, and placing units at their designated locations. Crawler-mounted cranes are preferred over mobile truck cranes because the tracked undercarriage distributes load over a wider footprint, providing better stability on uneven ground.</p>
      <p><strong>Front End Loaders (FEL):</strong> Used to transport armor units over short distances, reposition cast units after demoulding, clear debris, and feed aggregate stockpiles near the batching area &mdash; freeing up the crane to focus on the higher-precision task of placing units on the slope itself.</p>
      <p><strong>Ready-Mix Transit:</strong> Transported fresh concrete from the batching plant to the casting yard. Transit time is actively managed on site, since concrete arriving outside the specified temperature or slump range is generally rejected rather than used.</p>
      <p><strong>Concrete Pump:</strong> Used to transfer fresh concrete from the transit mixer into the CORE-LOC<sup>TM</sup> mould's irregular, interlocking geometry through a flexible hose &mdash; controlled, consistent pumping also helps reduce segregation risk.</p>
 
      <h5>4.2 QA/QC Checks Performed Prior to Concrete Placement</h5>
      <ul>
        <li><strong>Temperature Check:</strong> Ideal range 20&ndash;32&deg;C, preferably not exceeding 32&deg;C.</li>
        <li><strong>Slump Test:</strong> Fresh concrete filled into the Abrams Cone in three layers, each tamped 25 times.</li>
        <li><strong>Cube Test:</strong> 15&times;15&times;15 cm cubical mould, three layers, each tamped 35 times. Full design strength expected at 28 days.</li>
        <li><strong>Density Test:</strong> Determined using a concrete density test container of known volume.</li>
      </ul>
 
      <h5>4.3 Compaction and Curing of the Concrete for CORE-LOC<sup>TM</sup></h5>
      <p>Concrete is placed inside the mould in three levels and continuously compacted from different positions using a needle vibrator, ensuring homogeneous consistency before initial setting. Superplasticiser is used per the mix design to achieve workability without increasing the w/c ratio. For curing, the surface is covered with wet hessian and later treated with a curing compound.</p>
 
      <h4>5. The Realities of Site Execution</h4>
      <p>No design, however precise, survives contact with a live construction site unchanged. Wave conditions shift with the season and tide, ground conditions vary along the length of a structure, and even the most carefully engineered placement tolerances must be verified and defended in real time.</p>
 
      <h5>5.1 Placement Tolerance and Alignment Challenges</h5>
      <p>Even with a predefined placement grid, maintaining accurate unit position and orientation on a live slope is harder than it appears on paper. Wave action, uneven underlayer surfaces, and multi-tonne unit weights mean small errors compound quickly. These conditions also carry real risk for the workforce &mdash; steep, uneven, wet slopes increase slip risk, while working near suspended multi-tonne loads demands strict adherence to lifting plans and PPE.</p>
      <p>Breakage is one of the more visible consequences of placement or handling stress. Because a CORE-LOC<sup>TM</sup> unit derives its strength from a single, continuous concrete section, a chipped or fractured limb reduces both structural integrity and interlocking ability. Damaged units identified during placement or inspection are flagged for review, and may be repositioned, supplemented, or replaced entirely.</p>
 
      <h5>5.2 Environmental and Tidal Constraints</h5>
      <p>Oman's coastline experiences a semi-diurnal tidal regime with a typical range of around 2 metres, alongside two distinct monsoon seasons. The summer southwest monsoon (roughly June to September) brings strong, persistent winds and wave heights reaching 6&ndash;7 metres during peak conditions, while winter brings calmer northeasterly patterns. These seasonal shifts directly influence construction windows &mdash; placement is scheduled around calmer periods and favourable tidal states.</p>
 
      <h5>5.3 Verification and Quality Control Measures</h5>
      <p>For CORE-LOC<sup>TM</sup> units, the primary quality control mechanism is a formal inspection carried out by the consultant. Each cast unit is visually and dimensionally inspected and classified &mdash; typically Grade A, Grade B, Grade C, or UI (Under Inspection) &mdash; based on surface finish, dimensional accuracy, and any defects. Per CIRIA's Rock Manual (C683), any unit showing more than 10% mass loss from breakage is discarded outright, and at least 2% of production is individually weighed, with actual mass required to fall within +2/-1% of the expected value.</p>
      <p>The surrounding rock materials &mdash; underlayer, filter layer, and core &mdash; undergo their own separate testing regime: gradation, density, water absorption, Point Load Strength Index, Los Angeles Abrasion Value, Aggregate Impact Value, and Drop Test, alongside soundness testing (per EN 1367-2) to verify long-term durability against the marine environment.</p>
 
      <h4>6. A Month on the Breakwater</h4>
      <p>Watching CORE-LOC<sup>TM</sup> units move from engineering drawings to physical placement on an active breakwater offered a perspective no textbook could fully capture &mdash; the discipline required to translate precise design tolerances into real-world execution, under the constant influence of tide, weather, and the sea itself. This article reflects a small part of that experience, and hopefully offers useful insight to others encountering coastal armor unit design and construction for the first time.</p>
 
      <h5>About the Author</h5>
      <p>Nabeel Vellakutty Naushad is a civil engineering graduate (B.Tech, APJ Abdul Kalam Technological University) with hands-on experience spanning consultancy, airport infrastructure, and marine construction. He gained early exposure to civil and structural design during his time with Arabian Gulf Engineering Consultancy, followed by a civil/infrastructure engineering internship with Adani Airport Holdings Limited, and a one-month internship as a Civil Engineer Intern &mdash; Marine with Detonator Engineering Company Co LLC, contributing to marine construction works on an active breakwater project in Oman. He plans to pursue an MBA, with the long-term goal of transitioning into real estate development.</p>
 
      <h5>References</h5>
      <ul class="referencesList">
        <li>CIRIA, CUR, CETMEF (2007). <em>The Rock Manual: The Use of Rock in Hydraulic Engineering</em> (2nd edition), C683, CIRIA, London.</li>
        <li>Melby, J A and Turk, G F (1997). Core-loc concrete armor units: technical guidelines. Technical Report CHL-97-4, US Army Corps of Engineers, Washington DC.</li>
        <li>Turk, G F and Melby, J A (1997). Preliminary 3-D testing of Core-Loc<sup>TM</sup> as a repair concrete armour unit for dolos-armoured breakwater slopes. Technical Report REMR-CO-18, US Army Engineer Waterways Experiment Station, Vicksburg, MS.</li>
        <li>European Committee for Standardization (1998). EN 1367-2:1998 &mdash; Tests for thermal and weathering properties of aggregates. Part 2: Magnesium sulfate test.</li>
        <li>Chaichitehrani, N and Allahdadi, M N (2018). &ldquo;Overview of Wind Climatology for the Gulf of Oman and the Northern Arabian Sea.&rdquo; American Journal of Fluid Dynamics, 8(1), pp. 1&ndash;9.</li>
      </ul>
    `
  }
];
 
const Articles = () => {
  const [expandedId, setExpandedId] = useState(null);
 
  const toggleArticle = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };
 
  return (
    <section id="articles">
      <h2 className="articlesTitle">Articles</h2>
      <span className="articlesDesc">Technical writing drawn from real site experience and engineering practice.</span>
 
      <div className="articlesGrid">
        {articlesData.map(article => (
          <div key={article.id} className="articleCard">
            <div className="articleMeta">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="articleTag">{tag}</span>
              ))}
            </div>
 
            <h3 className="articleCardTitle" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
            <span className="articleReadTime">{article.readTime}</span>
 
            <p className="articleExcerpt" dangerouslySetInnerHTML={{ __html: article.excerpt }}></p>
 
            <div className="articleActions">
              <button
                className="readMoreBtn"
                onClick={() => toggleArticle(article.id)}
              >
                {expandedId === article.id ? 'Collapse Article' : 'Read Full Article'}
              </button>
 
              {article.pdf && (
                <a
                  href={article.pdf}
                  download
                  className="downloadBtn"
                >
                  <svg viewBox="0 0 24 24" className="downloadIcon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3v12"/>
                    <path d="M7 10l5 5 5-5"/>
                    <path d="M4 19h16"/>
                  </svg>
                  Download PDF
                </a>
              )}
            </div>
 
            {expandedId === article.id && (
              <div
                className="articleFullContent"
                dangerouslySetInnerHTML={{ __html: article.content }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
 
export default Articles;