import './App.css';
import HeroSection from './components/Hero';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import RepoGrid from './components/RepoGrid';
import ViewAllSection from './components/ViewAll';

function App() {
  return (
    <>
      <HeroSection />
      <div className="container">
        <ProfileHeader />
        <ProfileInfo />
        <RepoGrid />
        <ViewAllSection />
      </div>
    </>
  )
}

export default App
