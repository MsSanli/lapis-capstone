/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import getArtisans from '../api/artisanData';
import ArtisanCard from '../components/ArtisanCard';

function Home() {
  // set state for artisans
  const [artisans, setArtisans] = useState([]);

  // get user ID using useAuth Hook
  const { user } = useAuth();

  // create function that makes API call to get all artisans
  const getAllTheArtisans = () => {
    getArtisans(user.uid).then(setArtisans);
  };

  // make the call to the API to get all artisans on component to render
  useEffect(() => {
    getAllTheArtisans();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {/* map over artisans using ArtisanCard component */}
      {artisans.map((artisan) => (
        <ArtisanCard key={artisan.firebaseKey} artisanObj={artisan} onUpdate={getAllTheArtisans} />
      ))}
    </div>
  );
}

export default Home;

// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';

// function Home() {
//   const { user } = useAuth();

//   return (
//     <div
//       className="text-center d-flex flex-column justify-content-center align-content-center"
//       style={{
//         height: '90vh',
//         padding: '30px',
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >
//       <h1>Hello {user.displayName}! </h1>
//       <p>Click the button below to logout!</p>
//       <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
//         Sign Out
//       </Button>
//     </div>
//   );
// }

// export default Home;
