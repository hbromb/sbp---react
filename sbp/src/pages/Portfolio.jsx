import { Link } from 'react-router-dom';
import { siteImages } from '../data/siteImages';

const projects = [
  {
    title: 'Cambridge Avenue',
    type: 'Residential development',
    image: siteImages.projects.cambridge,
    alt: 'Contemporary residential buildings at Cambridge Avenue',
  },
  {
    title: 'Cambridge Research Park',
    type: 'Commercial and research',
    image: siteImages.projects.researchPark,
    alt: 'Cambridge Research Park project',
  },
  {
    title: 'Energy management',
    type: 'Sustainable building services',
    image: siteImages.projects.energy,
    alt: 'Energy management building services project',
  },
];

function Portfolio() {
  return (
    <section className="page-section portfolio-page">
      <p className="eyebrow">Project experience</p>
      <h1>Ideas made real.</h1>
      <p className="page-lead">
        A selection of the sectors and projects our team has supported with practical,
        high-quality building services engineering.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img
              src={project.image.src}
              alt={project.alt}
              width={project.image.width}
              height={project.image.height}
              loading="lazy"
              decoding="async"
            />
            <div className="project-card-content">
              <span>{project.type}</span>
              <h2>{project.title}</h2>
            </div>
          </article>
        ))}
      </div>
      <div className="portfolio-footer">
        <p>From homes and commercial spaces to research, industrial, and specialist environments.</p>
        <Link className="text-link" to="/contact">Discuss your project <span>→</span></Link>
      </div>
    </section>
  );
}

export default Portfolio;
