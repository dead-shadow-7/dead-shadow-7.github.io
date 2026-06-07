import { certifications } from "../../data/resume";
import CertificateIcon from "../icons/CertificateIcon";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="certifications-section reveal">
      <div className="section-header">
        <span className="section-index">04</span>
        <h2 className="section-title">Certifications</h2>
      </div>
      <div className="cert-list">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-item">
            <span className="cert-icon">
              <CertificateIcon />
            </span>
            <div className="cert-body">
              <div className="cert-head">
                <h3 className="cert-name">{cert.name}</h3>
                <span className="entry-meta">{cert.year}</span>
              </div>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
