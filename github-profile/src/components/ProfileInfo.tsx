import './ProfileInfo.css';

function ProfileInfo({ userProfile }) {
  if (!userProfile) return null;
  return (
    <>
      <div className="profile-info">
        <h1 className="profile-name">{userProfile.login}</h1>
        <p className="profile-bio">{userProfile.bio}</p>
      </div>
        <div className="section-gap"></div>
    </>
  )
}
export default ProfileInfo;