import { createContext, useState, useEffect } from 'react';

export const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [completedTopics, setCompletedTopics] = useState(() => {
    const savedProgress = localStorage.getItem('userProgress');
    return savedProgress ? JSON.parse(savedProgress) : [];
  });

  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(completedTopics));
  }, [completedTopics]);
  const toggleTopic = (topicId) => {
    setCompletedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  return (
    <ProgressContext.Provider value={{ completedTopics, toggleTopic }}>
      {children}
    </ProgressContext.Provider>
  );
}