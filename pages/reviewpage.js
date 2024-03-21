// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
// import { getReviews } from '../api/reviewData';
// import { useAuth } from '../utils/context/authContext';
// import ReviewCard from '../components/ReviewCard';

// function AllReviewsPage() {
//   // TODO: Set a state for books
//   const [reviews, setReviews] = useState([]);

//   // TODO: Get user ID using useAuth Hook
//   const { user } = useAuth();

//   // TODO: create a function that makes the API call to get all the books
//   const getAllTheReviews = () => {
//     getReviews(user.uid).then(setReviews);
//   };

//   // TODO: make the call to the API to get all the books on component render
//   useEffect(() => {
//     getAllTheReviews();
//   }, []);

//   return (
//     <div className="text-center my-4">
//       <Link href="/review/new" passHref>
//         <Button>Add A Review</Button>
//       </Link>
//       <div className="d-flex flex-wrap">
//         {/* TODO: map over books here using BookCard component */}
//         {reviews.map((review) => (
//           <ReviewCard key={review.firebaseKey} reviewObj={review} onUpdate={getAllTheReviews} />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default AllReviewsPage;
