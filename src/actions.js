// action types
const ADD_TOPIC = 'ADD_TOPIC';
const VOTE_TOPIC = 'VOTE_TOPIC';
const INIT_TOPICS = 'INIT_TOPICS';

module.exports = {
  ADD_TOPIC,
  VOTE_TOPIC,
  INIT_TOPICS,
  addTopic(name, description) {
    return {
      type: ADD_TOPIC,
      name,
      description
    };
  },
  voteTopic(id, rating) {
    return {
      type: VOTE_TOPIC,
      id,
      rating
    };
  },
  initTopics(topics) {
    return {
      type: INIT_TOPICS,
      topics
    };
  }
};
