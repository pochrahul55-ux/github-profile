import './App.css';
import HeroSection from './components/Hero';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import RepoGrid from './components/RepoGrid';
import ViewAllSection from './components/ViewAll';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [userRepo, setUserRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const [userProfileResponse, userRepoResponse] = await Promise.all([
        axios.get(`https://api.github.com/users/${search}`),
        axios.get(`https://api.github.com/users/${search}/repos`)
      ]);
      setUserProfile(userProfileResponse.data);
      setUserRepo(userRepoResponse.data);
    }
    catch(error) {
      console.log('API Fetch Error:', error)
      setError('User Not Found');
      setUserProfile(null);
      setUserRepo([]);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <HeroSection
        search={search}
        setSearch={setSearch}
        fetchAll={fetchAll}
        userProfile={userProfile}
        isLoading={isLoading}
        error={error}
      />
      <div className="container">
        <ProfileHeader
          userProfile={userProfile}
        />
        <ProfileInfo
          userProfile={userProfile}
        />
        <RepoGrid
          userRepo={userRepo}
        />
        <ViewAllSection
          userProfile={userProfile}
        />
      </div>
    </>
  )
}

export default App
