import './Hero.css';

function HeroSection({ search, setSearch, fetchUserProfile, fetchUserRepo, userProfile }) {
  // if (!userProfile) return null;

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchUserProfile();
      fetchUserRepo();
    }
  }

  return (
    <>
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="stars"></div>
        <div className="planet"></div>

        <div className="search-wrap">
          <div className="search-box">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              className="search-input"
              type="text"
              placeholder="Search GitHub username..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={onEnter} />
          </div>

          {userProfile &&
            <div className="search-dropdown">
              <div className="dropdown-item">
                <div className="dropdown-avatar">
                  <img src={userProfile.avatar_url} />
                </div>
                <div>
                  <div className="dropdown-name">{userProfile.login}</div>
                  <div className="dropdown-bio">{userProfile.bio}</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}
export default HeroSection;