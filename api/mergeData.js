import { deleteSingleArtisan, getSingleArtisan, getArtisanReviews } from './artisanData';
import { deleteSingleReview, getSingleReview } from './reviewData';

const viewArtisanDetails = (artisanfirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleArtisan(artisanfirebaseKey), getArtisanReviews(artisanfirebaseKey)])
    .then(([artisanObject, artisanReviewsArray]) => {
      resolve({ ...artisanObject, reviews: artisanReviewsArray });
    }).catch((error) => reject(error));
});

const viewReviewDetails = (reviewFirebaseKey) => new Promise((resolve, reject) => {
  getSingleReview(reviewFirebaseKey)
    .then((reviewObject) => {
      getSingleArtisan(reviewObject.artisan_id)
        .then((artisanObject) => {
          resolve({ artisanObject, ...reviewObject });
        });
    }).catch((error) => reject(error));
});

const deleteArtisanReviews = (artisanId) => new Promise((resolve, reject) => {
  getArtisanReviews().then((reviewsArray) => {
    console.warn(reviewsArray, 'Artisan Reviews');
    const deleteReviewPromises = reviewsArray.map((review) => deleteSingleReview(review.firebaseKey));

    Promise.all(deleteReviewPromises).then(() => {
      deleteSingleArtisan(artisanId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { deleteArtisanReviews, viewArtisanDetails, viewReviewDetails };
