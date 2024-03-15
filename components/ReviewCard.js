import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleReview } from '../api/reviewData';

function ReviewCard({ reviewObj, onUpdate }) {
  const deleteThisReview = () => {
    if (window.confirm(`Delete ${reviewObj.reviewername}?`)) {
      deleteSingleReview(reviewObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={reviewObj.reviewimage} alt={reviewObj.reviewername} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>
          {reviewObj.reviewername}
        </Card.Title>
        {/* <p>{artisanObj.email}</p>
        <p>{artisanObj.location}</p> */}
        {/* <Link href={`/artisan/${artisanObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link> */}
        <Link href={`/review/edit/${reviewObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisReview} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}
ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    reviewimage: PropTypes.string,
    reviewername: PropTypes.string,
    reviewtext: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ReviewCard;
