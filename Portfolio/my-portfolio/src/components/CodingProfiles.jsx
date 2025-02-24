import { codingProfiles } from '../data/data';

const CodingProfiles = () => {
  return (
    <section id="coding" className="section">
      <h2 className="section-title">Coding & GitHub Profiles</h2>
      <div className="profiles-grid">
        {codingProfiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <img 
              src={profile.icon} 
              alt={profile.name} 
              className="profile-icon"
              style={{ width: '30px', height: '30px' }}
            />
            {profile.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;