// ARTISAN API CALLS
// VIEW/READ ALL ARTISANS
const endpoint = (uid) => new Promise ((resolve, reject) => {
  fetch(`${endpoint}/artisans.json?orderBy="uid"&equalTo="{uid}"`, {
    method: 'GET', 
    headers: {
      'Content-Type': 'applicaton/json', 
    },
  })
  .then((response) => response.json())
  .then((data) => resolve(Object.values(data)))
});
// CREATE ARTISANS
// UPDATE ARTISANS
// DELETE ARTISANS 
