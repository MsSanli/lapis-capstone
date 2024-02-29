import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleArtisan } from '../../../api/artisanData';
import ArtisanForm from '../../../components/forms/ArtisanForm';

function EditArtisan() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // Grab firebaseKey
  const { firebaseKey } = router.query;

  // make a call to the API to get artisan data
  useEffect(() => {
    getSingleArtisan(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // Pass obj to form
  return (<ArtisanForm obj={editItem} />);
}

export default EditArtisan;
