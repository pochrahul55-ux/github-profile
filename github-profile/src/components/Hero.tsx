import { useState } from 'react';
import './Hero.css';
import { Search } from 'lucide-react';

function HeroSection({ search, setSearch, fetchAll, userProfile, isLoading, error }) {
  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchAll();
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
            <Search size={14} />
            <input
              className="search-input"
              type="text"
              placeholder="Search GitHub username..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={onEnter} />
          </div>
          
          {isLoading
            ? <p>Loading...</p>
            : error
            ? <p>{error}</p>
            : userProfile &&
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