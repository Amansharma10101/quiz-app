import { useEffect, useState } from 'react';
import { fetchQuizData } from '../utils/api';

export const useQuizData = () => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { quizData, loading, error };
};