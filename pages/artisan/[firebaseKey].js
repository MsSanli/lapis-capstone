import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, Button } from 'react-bootstrap';
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

  //  takes me to ReviewForm
  const handleAddReview = () => {
    router.push('/review/new');
  };

  return (
    <div>
      {/* Button to navigate to ReviewForm component */}
      <Button onClick={handleAddReview} variant="primary" className="mb-3">
        Add Review
      </Button>

      <Card style={{ width: '18rem' }}>
        {console.warn(artisanDetails)};
        <Card.Img variant="top" src={artisanDetails.image} />
        <Card.Body>
          <Card.Title>{artisanDetails.name}</Card.Title>
          <Card.Text>
            <p>Location: {artisanDetails.location}</p>
            <p>Email: {artisanDetails.email}</p>
            <p>Description: {artisanDetails.description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <div>{/* Add description here */}</div>

      {/* Render review cards */}
      {artisanDetails.reviews?.map((review) => (
        <ReviewCard key={review.firebaseKey} reviewObj={review} onUpdate={viewArtisanDetails} />
      ))}

    </div>
  );
}

export { ArtisanDetailsPage };
