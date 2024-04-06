// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
// // import { useAuth } from '../utils/context/authContext';
// import { getArtisans } from '../api/artisanData';
// import ArtisanCard from '../components/ArtisanCard';
// import SearchBar from '../components/searchBar';

// function Home() {
//   // set state for artisans
//   const [artisans, setArtisans] = useState([]);
//   const [artisanSearch, setArtisanSearch] = useState([]);

//   // get user ID using useAuth Hook
//   // const { user } = useAuth();

//   // create function that makes API call to get all artisans
//   const getAllTheArtisans = () => {
//     getArtisans().then(setArtisans);
//   };
//   // search useeffect
//   useEffect(() => {
//     setArtisanSearch(artisans);
//   }, [artisans]);
//   // make the call to the API to get all artisans on component to render
//   useEffect(() => {
//     getAllTheArtisans();
//   }, []);

//   return (
//     <div className="text-center my-4">
//       <SearchBar setArtisanSearch={setArtisanSearch} artisanSearch={artisanSearch} artisans={artisans} />
//       <Link href="/artisan/new" passHref>
//         <Button variant="outline-light" className="glow">Add Artisan</Button>
//       </Link>
//       <div className="d-flex flex-wrap">
//         {/* map over artisans using ArtisanCard component */}
//         {artisans.map((artisan) => (
//           <ArtisanCard key={artisan.firebaseKey} artisanObj={artisan} onUpdate={getAllTheArtisans} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

// index.js

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getArtisans } from '../api/artisanData';
import ArtisanCard from '../components/ArtisanCard';
import SearchBar from '../components/searchBar';

function Home() {
  const [artisans, setArtisans] = useState([]);
  const [filteredArtisans, setFilteredArtisans] = useState([]);

  const getAllTheArtisans = () => {
    getArtisans().then(setArtisans);
  };

  useEffect(() => {
    getAllTheArtisans();
  }, []);

  useEffect(() => {
    setFilteredArtisans(artisans);
  }, [artisans]);

  return (
    <div className="text-center my-4">
      <SearchBar setArtisans={setFilteredArtisans} artisans={artisans} />
      <p />
      <Link href="/artisan/new" passHref>
        <Button variant="outline-light" className="glow">Add Artisan</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {filteredArtisans.map((artisan) => (
          <ArtisanCard key={artisan.firebaseKey} artisanObj={artisan} onUpdate={getAllTheArtisans} />
        ))}
      </div>
    </div>
  );
}

export default Home;
