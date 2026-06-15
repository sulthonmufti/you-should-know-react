import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";
import { curriculum } from "../constants/curriculum";

export function useProgress() {
  const { completedTopics, toggleTopic } = useContext(ProgressContext);

  const isCompleted = (topicId) => completedTopics.includes(topicId);

  const getModuleProgress = (moduleId) => {
    const module = curriculum.find((m) => m.moduleId === moduleId);
    if (!module) return { total: 0, completed: 0, percentage: 0 };

    const total = module.topics.length;
    const completed = module.topics.filter((t) => isCompleted(t.id)).length;
    const percentage = Math.round((completed / total) * 100);

    return { total, completed, percentage };
  };

  return { completedTopics, toggleTopic, isCompleted, getModuleProgress };
}
