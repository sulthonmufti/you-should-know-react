import { curriculum } from "../constants/curriculum";

export function getTopicById(moduleId, topicId) {
  // Cari modul
  const module = curriculum.find((m) => m.moduleId === moduleId);
  if (!module) return null;

  // Cari topik
  return module.topics.find((t) => t.id === topicId) || null;
}
