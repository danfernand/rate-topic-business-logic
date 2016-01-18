// action types
export const ADD_TOPIC = 'ADD_TOPIC';
export const VOTE_TOPIC = 'VOTE_TOPIC';
export const INIT_TOPICS = 'INIT_TOPICS';

export function addTopic(name, description) {
  return {
    type: ADD_TOPIC,
    name,
    description
  };
}
export function voteTopic(id, rating) {
  return {
    type: VOTE_TOPIC,
    id,
    rating
  };
}
export function initTopics(topics) {
  return {
    type: INIT_TOPICS,
    topics
  };
}
