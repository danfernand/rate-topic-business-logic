import { ADD_TOPIC, VOTE_TOPIC, INIT_TOPICS } from './actions';
const _ = require('lodash');

function addTopic(state, action) {
  const maxId = _.max(state.map((topic) => {
    return topic.id;
  }));
  state.push({
    id: maxId + 1,
    name: action.name,
    description: action.description,
    voteCount: 0,
    rating: 0,
  });
  return state;
}

function voteTopic(state, action) {
  const topicIndex = _.findIndex(state, { id: action.id });
  let topic = state[topicIndex];
  const rawVote = topic.voteCount * topic.rating;
  const voteCount = topic.voteCount + 1;
  if (topic) {
    topic = Object.assign({}, topic, {
      voteCount,
      rating: (rawVote + action.rating) / voteCount
    });
    return [
      ...state.slice(0, topicIndex),
      topic,
      ...state.slice(topicIndex + 1)
    ];
  }
  return state;
}

function initTopics(state, action) {
  return action.topics;
}

function topics(state = [], action) {
  switch (action.type) {
    case ADD_TOPIC:
      return addTopic(state, action);
    case VOTE_TOPIC:
      return voteTopic(state, action);
    case INIT_TOPICS:
      return initTopics(state, action);
    default:
      return state;
  }
}

export const topicsReducer = topics;
