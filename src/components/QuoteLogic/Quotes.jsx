import { useState, useEffect } from 'react';
import styles from '@/styles/Quotes.module.css';

const baseURL = 'https://api.api-ninjas.com/v1/quotes?category=movies';
const apiKey = 'xs1lhvlYhQQTDXI2TUdCeQ==JJgaQ0kspETdrSRz';

export default function RederQuote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const myHeaders = {
          'X-Api-Key': apiKey,
        };
        const res = await fetch(baseURL, {
          headers: myHeaders,
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) {
    return (
      <div>
        <p>Quote error: We don&apos;t have quotes right now!</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <p>Quote is Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <p className={styles.subtitle}>
        Quote:
      </p>
      <p className={styles.quote}>
        {data[0]?.quote}
      </p>
      <p className={styles.subtitle}>
        Author:
      </p>
      <p className={styles.quote}>
        {data[0]?.author}
      </p>
    </div>
  );
}
