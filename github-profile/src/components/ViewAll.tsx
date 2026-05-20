import './ViewAll.css';
import { ArrowRight } from 'lucide-react';
import type { UserProfile } from './types';

function ViewAllSection({ userProfile }: {userProfile: UserProfile | null}) {
  if (!userProfile) return null;
  return (
    <>
      <div className="view-all-wrap">
        <button className="view-all-btn">
          <a href={userProfile.html_url}>
              View all repositories
          </a>
          <ArrowRight size={14} />
        </button>
      </div>
    </>
  )
}
export default ViewAllSection;