import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ setArtisans, artisans }) => {
  const handleChange = (e) => {
    const term = e.target.value.toLowerCase();
    const filteredArtisans = artisans.filter((artisan) => artisan.name.toLowerCase().includes(term));
    setArtisans(filteredArtisans);
  };

  return (
    <div>
      <input
        placeholder="Search Artisan"
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  artisans: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      location: PropTypes.string,
      email: PropTypes.string,
      firebaseKey: PropTypes.string,
      wishlist: PropTypes.bool,
    }),
  ).isRequired,
  setArtisans: PropTypes.func.isRequired,
};

export default SearchBar;
