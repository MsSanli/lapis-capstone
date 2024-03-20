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
    <Card style={{ width: '16rem', margin: '10px' }}>
      {reviewObj.reviewimage && (
      <Card.Img
        variant="top"
        src={reviewObj.reviewimage}
        alt={reviewObj.reviewername}
        style={{ height: '100px' }}
      />
      )}
      <Card.Body>
        <Card.Title>{reviewObj.reviewername}</Card.Title>
        {reviewObj.reviewtext && <Card.Text>{reviewObj.reviewtext}</Card.Text>}
        <Link href={`/review/edit/${reviewObj.firebaseKey}`} passHref>
          <Button variant="outline-info">EDIT</Button>
        </Link>
        <Button variant="outline-danger" onClick={deleteThisReview} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    reviewimage: PropTypes.string,
    reviewername: PropTypes.string.isRequired,
    reviewtext: PropTypes.string,
    firebaseKey: PropTypes.string.isRequired,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ReviewCard;
