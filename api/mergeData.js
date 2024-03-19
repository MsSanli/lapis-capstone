import { deleteSingleArtisan, getSingleArtisan, getArtisanReviews } from './artisanData';
import { deleteSingleReview } from './reviewData';

const viewArtisanDetails = (artisanfirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleArtisan(artisanfirebaseKey), getArtisanReviews(artisanfirebaseKey)])
    .then(([artisanObject, artisanReviewsArray]) => {
      resolve({ ...artisanObject, reviews: artisanReviewsArray });
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

export { deleteArtisanReviews, viewArtisanDetails };
