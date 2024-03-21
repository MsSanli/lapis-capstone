/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewArtisanDetails } from '../../api/mergeData';
import ReviewCard from '../../components/ReviewCard';

export default function ArtisanDetailsPage() {
  const [artisanDetails, setArtisanDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  // make call to API layer to get the data
  useEffect(() => {
    viewArtisanDetails(firebaseKey).then(setArtisanDetails);
  }, [firebaseKey]);

  // const getTheArtisanDetails = () => {
  //   viewArtisanDetails.apply(firebaseKey).then(setArtisanDetails);
  // };

  // useEffect(() => {
  //   viewArtisanDetails(firebaseKey).then(setArtisanDetails);
  // }, [firebaseKey]);

  //  takes me to ReviewForm
  // const handleAddReview = () => {
  //   router.push('/review/new');
  // };

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={artisanDetails.image} alt={artisanDetails.name} style={{ width: '200px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {artisanDetails.name}
          </h5>
          Artisan Email: <a href={`mailto:${artisanDetails.email}`}>{artisanDetails.email}</a>
          <hr />
        </div>
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {artisanDetails.reviews?.map((review) => (
          <ReviewCard key={review.firebaseKey} reviewObj={review} onUpdate={viewArtisanDetails} />
        ))}
      </div>
    </>
  );
}

export { ArtisanDetailsPage };
