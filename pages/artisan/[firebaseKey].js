// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { viewArtisanDetails } from '../../api/mergeData';
// import ReviewCard from '../../components/ReviewCard';

// export default function ArtisanDetailsPage() {
//   const [artisanDetails, setArtisanDetails] = useState({});
//   const router = useRouter();
//   const { firebaseKey } = router.query;

//   useEffect(() => {
//     viewArtisanDetails(firebaseKey).then(setArtisanDetails);
//   }, [firebaseKey]);

//   return (
//     <>
//       <div className="mt-5 d-flex flex-wrap">
//         <div className="d-flex flex-column">
//           <img src={artisanDetails.image} alt={artisanDetails.name} style={{ width: '200px' }} />
//         </div>
//         <div className="text-white ms-5 details">
//           <h5>
//             {artisanDetails.name} {artisanDetails.wishlist ? '🤍' : ''}
//           </h5>
//           Artisan Email: <a href={`mailto:${artisanDetails.email}`}>{artisanDetails.email}</a>
//           <hr />
//           <p className="flex-column">{artisanDetails.description || ''}</p>
//         </div>
//       </div>
//       <hr />
//       <div className="d-flex flex-wrap">
//         {artisanDetails.reviews?.map((review) => (
//           <ReviewCard key={review.firebaseKey} reviewObj={review} onUpdate={viewArtisanDetails} />
//         ))}
//       </div>
//     </>
//   );
// }

// export { ArtisanDetailsPage };

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewArtisanDetails } from '../../api/mergeData';
import ReviewCard from '../../components/ReviewCard';

export default function ArtisanDetailsPage() {
  const [artisanDetails, setArtisanDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewArtisanDetails(firebaseKey).then(setArtisanDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex align-items-start">
        <div className="me-5">
          <img src={artisanDetails.image} alt={artisanDetails.name} style={{ width: '200px' }} />
        </div>
        <div className="text-white details">
          <h5>
            {artisanDetails.name} {artisanDetails.wishlist ? '💎' : ''}
          </h5>
          <hr />
          <p>{artisanDetails.description || ''}</p>
          <p>Artisan Email: <a href={`mailto:${artisanDetails.email}`}>{artisanDetails.email}</a></p>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {artisanDetails.reviews?.map((review) => (
          <ReviewCard key={review.firebaseKey} reviewObj={review} onUpdate={viewArtisanDetails} />
        ))}
      </div>
    </>
  );
}

export { ArtisanDetailsPage };
