// src/hooks/useGitHub.ts
import { useState, useEffect } from 'react';
import { Octokit } from 'octokit';

export const useGitHub = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });
        const user = await octokit.rest.users.getByUsername({ username: 'Dev-moe-kyawaung' });
        const repos = await octokit.rest.repos.listForUser({ username: 'Dev-moe-kyawaung' });

        const totalStars = repos.data.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        setStats({
          repositories: repos.data.length,
          stars: totalStars,
          followers: user.data.followers,
          contributions: user.data.public_repos * 50, // Estimate
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading };
};
