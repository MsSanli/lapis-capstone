/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewReviewDetails } from '../../api/mergeData';

export default function ViewAllReviews() {
  const [reviewDetails, setReviewDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewReviewDetails(firebaseKey).then(setReviewDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={reviewDetails.reviewimage} alt={reviewDetails.reviewername} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {reviewDetails.reviewername} by {reviewDetails.artisanObject?.name}
          {reviewDetails.artisanObject?.wishlsit ? ' 💎' : ''}
        </h5>
        Artisan Email: <a href={`mailto:${reviewDetails.artisanObject?.email}`}>{reviewDetails.artisanObject?.email}</a>
        <p>{reviewDetails.reviewtext || ''}</p>
        <hr />
      </div>
    </div>
  );
}
