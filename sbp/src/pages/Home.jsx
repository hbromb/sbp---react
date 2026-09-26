import { Link } from 'react-router-dom';
import { siteImages } from '../data/siteImages';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Independent MEP building services consultants</p>
          <h1>Engineering better <em>buildings.</em></h1>
          <p className="hero-copy">
            Practical, sustainable design solutions from project conception through to
            completion, delivered with commercial awareness.
          </p>
          <Link className="button button-primary" to="/contact">
            Talk to our team <span>→</span>
          </Link>
        </div>
        <div className="hero-art">
          <img
            src={siteImages.ledCeiling.src}
            alt={siteImages.ledCeiling.alt}
            width="1250"
            height="439"
            fetchPriority="high"
          />
        </div>
      </section>
      <section className="intro section">
        <div>
          <figure className="intro-image">
            <img
              src={siteImages.controlRoom.src}
              alt={siteImages.controlRoom.alt}
              width="1400"
              height="1050"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <h2>Experience that works in the real world.</h2>
          <p className="large-copy">
            We are an independent consultancy with expertise in Mechanical, Electrical and
            Public Health building services engineering across all market sectors.
          </p>
          <Link className="text-link" to="/services">
            Explore our services <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
