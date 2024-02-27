import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleArtisan } from '../api/artisanData';

function ArtisanCard({ artisanObj, onUpdate }) {
  // For delete, we need to remove the artisan and have the view rerender, so we pass the function from the parent that gets the artisan
  const deleteThisArtisan = () => {
    if (window.confirm(`Delete ${artisanObj.name}?`)) {
      deleteSingleArtisan(artisanObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={artisanObj.image} alt={artisanObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{artisanObj.name} </Card.Title>
        <Button variant="primary" className="m-2">VIEW</Button>
        <Link href={`/artisan/edit/${artisanObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisArtisan} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ArtisanCard.propTypes = {
  artisanObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
    // uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ArtisanCard;
