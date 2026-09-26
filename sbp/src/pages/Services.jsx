import { Link } from 'react-router-dom';
import { siteImages } from '../data/siteImages';

const services = [
  'Design Concepts',
  'Feasibility Studies',
  'Planning Services',
  'Performance Duties',
  'Complete Building Services Design',
  'Compliance Monitoring',
  'Specialist Surveys',
];

const disciplines = [
  {
    title: 'Mechanical',
    description: 'Comfortable, efficient systems designed around how buildings are used.',
  },
  {
    title: 'Electrical',
    description: 'Clear, coordinated electrical design that supports safe and dependable buildings.',
  },
  {
    title: 'Public Health',
    description: 'Practical water, drainage, and public health engineering integrated from the start.',
  },
];

function Services() {
  return (
    <section className="page-section services-page">
      <p className="eyebrow">Services we provide</p>
      <h1>Building services, thoughtfully delivered.</h1>
      <div className="services-overview">
        <div className="services-art">
          <img
            src={siteImages.services}
            alt="Building services design drawing with a transparent building model"
            width="400"
            height="351"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="services-list">
          <p>
            From project conception through to completion, our team delivers practical,
            innovative, and sustainable design solutions.
          </p>
          <ul>
            {services.map((service) => (
              <li key={service}>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="experts-section">
        <div className="experts-heading">
          <p className="eyebrow">Experts in...</p>
          <h2>MEP engineering across all market sectors.</h2>
        </div>
        <div className="discipline-grid">
          {disciplines.map((discipline) => (
            <article className="discipline-card" key={discipline.title}>
              <h3>{discipline.title}</h3>
              <p>{discipline.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="callout">
        <span className="callout-icon">+</span>
        <div>
          <h2>Have a project in mind?</h2>
          <p>Let&apos;s discuss how our team can help.</p>
        </div>
        <Link className="button button-dark" to="/contact">
          Get in touch <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default Services;
