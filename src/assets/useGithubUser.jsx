import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${username}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [username]);

  return { userData, loading, error };
};

export default useGithubUser;
