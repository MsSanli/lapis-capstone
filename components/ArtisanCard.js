// import React from 'react';
// import PropTypes from 'prop-types';
// import { Button, Card } from 'react-bootstrap';
// import Link from 'next/link';
// import { deleteSingleArtisan } from '../api/artisanData';

// function ArtisanCard({ artisanObj, onUpdate }) {
//   // For delete, we need to remove the artisan and have the view rerender, so we pass the function from the parent that gets the artisan
//   const deleteThisArtisan = () => {
//     if (window.confirm(`Delete ${artisanObj.name}?`)) {
//       deleteSingleArtisan(artisanObj.firebaseKey).then(() => onUpdate());
//     }
//   };

//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Img variant="top" src={artisanObj.image} alt={artisanObj.name} style={{ height: '400px' }} />
//       <Card.Body>
//         {/* trying something here */}
//         <Card.Title>{artisanObj.name} {artisanObj.wishlist ? '🤍' : ''}</Card.Title>
//         <p>{artisanObj.email}</p>
//         <p>{artisanObj.location}</p>
//         <Link href={`/artisan/${artisanObj.firebaseKey}`} passHref>
//           <Button variant="primary" className="m-2">VIEW</Button>
//         </Link>
//         <Link href={`/artisan/edit/${artisanObj.firebaseKey}`} passHref>
//           <Button variant="info">EDIT</Button>
//         </Link>
//         <Button variant="danger" onClick={deleteThisArtisan} className="m-2">
//           DELETE
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// ArtisanCard.propTypes = {
//   artisanObj: PropTypes.shape({
//     image: PropTypes.string,
//     name: PropTypes.string,
//     location: PropTypes.string,
//     email: PropTypes.string,
//     firebaseKey: PropTypes.string,
//     uid: PropTypes.string,
//     wishlist: PropTypes.bool,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default ArtisanCard;

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleArtisan, updateArtisan } from '../api/artisanData';

function ArtisanCard({ artisanObj, onUpdate }) {
  const deleteThisArtisan = () => {
    if (window.confirm(`Delete ${artisanObj.name}?`)) {
      deleteSingleArtisan(artisanObj.firebaseKey).then(() => onUpdate());
    }
  };

  const handleWishlistToggle = () => {
    const updatedArtisan = { ...artisanObj, wishlist: !artisanObj.wishlist };
    updateArtisan(updatedArtisan)
      .then(() => onUpdate())
      .catch((error) => console.error('Error toggling wishlist status:', error));
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={artisanObj.image} alt={artisanObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>
          {artisanObj.name} {artisanObj.wishlist ? '🤍' : ''}
          <Button variant="link" onClick={handleWishlistToggle}>
            {artisanObj.wishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </Button>
        </Card.Title>
        <p>{artisanObj.email}</p>
        <p>{artisanObj.location}</p>
        {/* <Link href={`/artisan/${artisanObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link> */}
        <Link href={`/artisandetails?firebaseKey=${artisanObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
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
    uid: PropTypes.string,
    wishlist: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ArtisanCard;
