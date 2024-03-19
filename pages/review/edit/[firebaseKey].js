import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleReview } from '../../../api/reviewData';
import ReviewForm from '../../../components/forms/ReviewForm';

function EditReview() {
  const [editRev, setEditRev] = useState({});
  const router = useRouter();
  // grab firebasekey
  const { firebaseKey } = router.query;

  // make call to API to get review data
  useEffect(() => {
    getSingleReview(firebaseKey).then(setEditRev);
  }, [firebaseKey]);

  // pass obj to form
  return (<ReviewForm obj={editRev} />);
}

export default EditReview;
