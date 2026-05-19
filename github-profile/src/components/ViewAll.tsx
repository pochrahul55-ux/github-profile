import './ViewAll.css';

function ViewAllSection() {
  return (
    <>
      <div className="view-all-wrap">
        <button className="view-all-btn">
          View all repositories
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </>
  )
}
export default ViewAllSection;