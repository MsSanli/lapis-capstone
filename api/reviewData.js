import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSingleReview = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews/${firebaseKey}.json`, {
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
// dont think I need getReviews. Not using
const getReviews = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews.json?orderBy="uid"&equalTo="${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getUidReviews = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  createReview,
  deleteSingleReview,
  updateReview,
  getSingleReview,
  getReviews,
  getUidReviews,
};
