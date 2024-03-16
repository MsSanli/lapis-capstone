// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { getSingleArtisan, getArtisanReviews } from '../api/artisanData';
// import ReviewCard from '../components/ReviewCard';

// function ArtisanDetailsPage() {
//   const router = useRouter();
//   const { firebaseKey } = router.query;
//   const [artisan, setArtisan] = useState([]);
//   // review card usestate
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     if (firebaseKey) {
//       getSingleArtisan(firebaseKey)
//         .then((data) => setArtisan(data));

//       getArtisanReviews(firebaseKey)
//         .then((reviewsdata) => setReviews(reviewsdata));
//     }
//   }, [firebaseKey]);

//   // need to call api function to fetch artisan reviews and useeffect to update review state  fetch reviews for artisan?
//   // click event to navigate to ReviewForm component
//   const handleAddReview = () => {
//     router.push('/review/new');
//   };

//   return (
//     <div>
//       {/* Button to navigate to ReviewForm component */}
//       <Button onClick={handleAddReview} variant="primary" className="mb-3">
//         Add Review
//       </Button>

//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={artisan.image} />
//         <Card.Body>
//           <Card.Title>{artisan.name}</Card.Title>
//           <Card.Text>
//             <p>Location: {artisan.location}</p>
//             <p>Email: {artisan.email}</p>
//             <p>Description: {artisan.description}</p>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <div>{/* Add description here */}</div>

//       {/* Render review cards */}
//       {reviews.map((review) => (
//         <ReviewCard key={firebaseKey} review={review} />
//       ))}

//     </div>
//   );
// }

// export default ArtisanDetailsPage;
