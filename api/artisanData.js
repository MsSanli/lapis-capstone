import { clientCredentials } from '../utils/client';

// ARTISAN API CALLS
// VIEW/READ ALL ARTISANS
const endpoint = clientCredentials.databaseURL;

const getArtisans = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/artisans.json?orderBy="uid"&equalTo="{uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applicaton/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
// CREATE ARTISANS
// UPDATE ARTISANS
// DELETE ARTISANS
// FIXME: DELETE AUTHOR
const deleteSingleArtisan = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/artisans/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getArtisans,
  deleteSingleArtisan,
};
// remember this is singular and when you have more promises, you'll have to put them in brackets and indent.
