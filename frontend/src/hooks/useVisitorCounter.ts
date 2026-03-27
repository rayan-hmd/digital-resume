import { useEffect, useState } from 'react';

const API_URL =
  import.meta.env.VITE_API_URL ||
  'https://73nhe22wt4.execute-api.ap-southeast-4.amazonaws.com/default/incrementVisitorCount';

export function useVisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisitorCount() {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setCount(typeof data.visitor_count === 'number' ? data.visitor_count : null);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load visitor count');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    void fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return { count, loading, error };
}
