import './RepoGrid.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  license: {
    name: string;
  } | null;
};

function RepoGrid({ userRepo }: {userRepo: Repo[]}) {
  return (
    <>
      <div className="repos-grid">
        {userRepo.map((repo) =>
          <a  key={repo.id} className="repo-card" href={repo.html_url} target="_blank">
            <div className="repo-name">{repo.name}</div>
            <div className="repo-desc">{repo.description}</div>
            <div className="repo-meta">
              <span className="repo-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 01-9 9" /></svg>
                {repo.forks_count}
              </span>
              <span className="repo-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                {repo.stargazers_count}
              </span>
              <span className="repo-updated">{dayjs(repo.updated_at).fromNow()}</span>
            </div>
          </a>
        )}
      </div>

    </>
  )
}
export default RepoGrid;