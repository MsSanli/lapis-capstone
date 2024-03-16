import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;
// READ
const getSingleReview = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`{endpoint}/reviews/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE
const createReview = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// DELETE
const deleteSingleReview = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// UPDATE
const updateReview = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  createReview,
  deleteSingleReview,
  updateReview,
  getSingleReview,
};
