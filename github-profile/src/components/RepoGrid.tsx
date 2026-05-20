import './RepoGrid.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { GitFork, Star } from 'lucide-react';

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
                <GitFork size={14}/>
                {repo.forks_count}
              </span>
              <span className="repo-meta-item">
                <Star size={14} />
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