import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';
import { getArtisans } from '../api/artisanData';
import ArtisanCard from '../components/ArtisanCard';

function Home() {
  // set state for artisans
  const [artisans, setArtisans] = useState([]);

  // get user ID using useAuth Hook
  // const { user } = useAuth();

  // create function that makes API call to get all artisans
  const getAllTheArtisans = () => {
    getArtisans().then(setArtisans);
  };

  // make the call to the API to get all artisans on component to render
  useEffect(() => {
    getAllTheArtisans();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/artisan/new" passHref>
        <Button>Add Artisan</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* map over artisans using ArtisanCard component */}
        {artisans.map((artisan) => (
          <ArtisanCard key={artisan.firebaseKey} artisanObj={artisan} onUpdate={getAllTheArtisans} />
        ))}
      </div>
    </div>
  );
}

export default Home;
