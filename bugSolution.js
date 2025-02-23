import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Data loaded!</p>}
    </div>
  );
};

export default MyComponent; 
