import './ViewAll.css';
import { ArrowRight } from 'lucide-react';

function ViewAllSection({ userProfile }) {
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