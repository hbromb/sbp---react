import { Link } from 'react-router-dom';
const projects = [
  {
    title: 'Guildford, Amplify Distribution Park',
    type: 'Industrial development',
    description:
      'Goya Hillwood have started on site to speculatively develop 3 units totalling 72,000 sq ft on this highly prominent site at the front of Guildford Business Park, which can be seen from the A3.',
    image: '/images/goya-guildford.jpg',
    alt: 'Amplify Distribution Park proposal in Guildford',
  },
  {
    title: 'Reading, Hurricane Urban Hub',
    type: 'Industrial development',
    description:
      'Goya Hillwood have just completed 184,000 sq ft speculative industrial warehouse development, with units ranging between 10,000 sq ft and 48,000 sq ft.',
    image: '/images/goya-reading.jpg',
    alt: 'Hurricane Urban Hub modern warehouse in Reading',
  },
  {
    title: 'Swanley, Swanley Distribution Park',
    type: 'Warehouse development',
    description:
      'A 4 unit warehouse development of 162,192 sq ft, with units ranging from 26,581 sq ft to 55,212 sq ft. The site abuts the M25. We have already pre let one of the 4 units.',
    image: '/images/goya-swanley.jpeg',
    alt: 'Swanley Distribution Park warehouse CGI',
  },
  {
    title: 'Tottenham, Valhalla Distribution Park',
    type: 'Urban logistics development',
    description:
      'Goya Hillwood have detailed planning permission to redevelop this existing super prime industrial site for a new 143,000 sq ft urban hub, with units ranging between 6,000 sq ft and 76,000 sq ft. We have started on site, with completion due Autumn 2026.',
    image: '/images/goya-tottenham-valhalla.jpg',
    alt: 'Valhalla Distribution Park CGI in Tottenham',
  },
  {
    title: 'Tottenham, Urban Edge',
    type: 'Industrial development',
    description:
      'Goya Hillwood now have a detailed planning consent to redevelop this existing industrial site for a new 68,000 sq ft speculative HQ warehouse facility. We have started on site, with completion expected by April 27.',
    image: '/images/goya-tottenham-urban-edge.jpg',
    alt: 'Proposed Urban Edge warehouse elevation in Tottenham',
  },
  {
    title: 'Slough, 136 Edinburgh Avenue',
    type: 'Sustainable industrial development',
    description:
      'A best-in-class industrial development forming part of the regeneration of Slough Trading Estate. The scheme delivers nine state-of-the-art units totalling over 110,000 sq ft, with high-performance infrastructure and smart systems designed for low-carbon, future-ready operations.',
    image: '/images/segro-136-edinburgh-avenue.jpg',
    alt: '136 Edinburgh Avenue sustainable industrial development in Slough',
  },
];

function Portfolio() {
  return (
    <section className="page-section portfolio-page">
      <p className="eyebrow">Project experience</p>
      <h1>Current developments.</h1>
      <p className="page-lead">
        A selection of current industrial and warehouse developments across the South East,
        from planning through to delivery.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              decoding="async"
            />
            <div className="project-card-content">
              <span>{project.type}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="portfolio-footer">
        <p>Practical development expertise for commercially viable industrial and warehouse schemes.</p>
        <Link className="text-link" to="/contact">Discuss your project <span>→</span></Link>
      </div>
    </section>
  );
}

export default Portfolio;
