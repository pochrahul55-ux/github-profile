import './ProfileHeader.css';
import type { UserProfile } from './types';

function ProfileHeader({ userProfile }: {userProfile: UserProfile | null}) {
  if (!userProfile) return null;
  return (
    <>
      <div className="profile-header">
        <div className="profile-avatar-wrap">
          <img src={userProfile.avatar_url} alt={userProfile.login} />
        </div>

        <div className="stats-row">
          <div className="stat-pill">
            <span className="stat-label">Followers</span>
            <span className="stat-value">{userProfile.followers}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Following</span>
            <span className="stat-value">{userProfile.following}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Location</span>
            <span className="stat-value">{userProfile.location}</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProfileHeader;