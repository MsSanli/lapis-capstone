// ARTISAN API CALLS CRUD ARTISANS

import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;
// READ
const getArtisans = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/artisans.json`, {
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

// READ/GET SINGLE ARTISAN
const getSingleArtisan = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/artisans/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', // Fixed typo here
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE
const createArtisan = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/artisans.json`, {
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
const deleteSingleArtisan = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/artisans/${firebaseKey}.json`, {
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
const updateArtisan = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/artisans/${payload.firebaseKey}.json`, {
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

const addToWishlist = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/artisans.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const wishlistArtisan = Object.values(data).filter((item) => item.wishlist);
      resolve(wishlistArtisan);
    })
    .catch(reject);
});
// try passing artisan_id
const getArtisanReviews = (artisanId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews.json?orderBy="artisan_id"&equalTo="${artisanId}"`, {
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
  getArtisans,
  createArtisan,
  deleteSingleArtisan,
  getSingleArtisan,
  updateArtisan,
  addToWishlist,
  getArtisanReviews,
};
