import { useEffect, useState } from 'react';
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
    <div className="d-flex flex-wrap">
      {artisans.map((artisan) => <ArtisanCard key={artisan.firebaseKey} artisanObj={artisan} onUpdate={getArtisans} />)}
    </div>
  );
}
