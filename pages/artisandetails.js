import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { getSingleArtisan } from '../api/artisanData';

function ArtisanDetailsPage() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  const [artisan, setArtisan] = useState([]);

  useEffect(() => {
    if (firebaseKey) {
      getSingleArtisan(firebaseKey)
        .then((data) => setArtisan(data));
    }
  }, [firebaseKey]);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={artisan.image} />
        <Card.Body>
          <Card.Title>{artisan.name}</Card.Title>
          <Card.Text>
            <p>Location: {artisan.location}</p>
            <p>Email: {artisan.email}</p>
            <p>Description: {artisan.description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <div>{/* Add description here */}</div>
    </div>
  );
}

export default ArtisanDetailsPage;
