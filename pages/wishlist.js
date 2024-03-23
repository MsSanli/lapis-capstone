import { useEffect, useState } from 'react';
import Link from 'next/link';
import { addToWishlist } from '../api/artisanData';
import ArtisanCard from '../components/ArtisanCard';

export default function WishlistPage() {
  const [artisans, setArtisans] = useState([]);

  const getArtisans = () => {
    addToWishlist().then(setArtisans);
  };

  useEffect(() => {
    getArtisans();
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap">
        {artisans.map((artisan) => <ArtisanCard key={artisan.firebaseKey} artisanObj={artisan} onUpdate={getArtisans} />)}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Link href="/" passHref>
          <button type="button">Return to Home Page</button>
        </Link>
      </div>
    </div>
  );
}
