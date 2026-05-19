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
  const [userRepo, setUserRepo] = useState(null);

  const fetchUserProfile = async () => {
    const response = await axios.get(`https://api.github.com/users/${search}`);
    setUserProfile(response.data);
  }

  const fetchUserRepo = async () => {
    const response = await axios.get(`https://api.github.com/users/${search}/repos`);
    setUserRepo(response.data);
  }

  return (
    <>
      <HeroSection 
        search={search}
        setSearch={setSearch}
        fetchUserProfile={fetchUserProfile}
        fetchUserRepo={fetchUserRepo}
        userProfile={userProfile}
      />
      <div className="container">
        <ProfileHeader 
          userProfile={userProfile}
        />
        <ProfileInfo
          userProfile={userProfile}
        />
        <RepoGrid />
        <ViewAllSection />
      </div>
    </>
  )
}

export default App
