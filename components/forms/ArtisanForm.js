// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';
import { createArtisan, updateArtisan } from '../../api/artisanData';

const initialState = {
  name: '',
  image: '',
  location: '',
  email: '',
  wishlist: false,
  // need form element
};

// pass in object below as a prop
// function ArtisanForm({ obj }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const router = useRouter();
//   // const { user } = useAuth;

function ArtisanForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateArtisan(formInput).then(() => router.push('/'));
    } else {
      const payload = { ...formInput };
      createArtisan(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateArtisan(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ width: '50%', margin: 'auto' }}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Artisan </h2>

      {/* Name INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Artisan" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* LOCATION INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Select Borough" className="mb-3">
        <Form.Control
          as="select"
          name="location"
          value={formInput.location}
          onChange={handleChange}
          required
        >
          <option value="">Select Location</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Bronx">Bronx</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Staten Island">Staten Island</option>
          <option value="Queens">Queens</option>
          {/* Add more options as needed */}
        </Form.Control>
      </FloatingLabel>

      {/* EMAIL INPUT  */}
      <FloatingLabel controlId="floatingInput4" label="Enter email!" className="mb-3">
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput5" label="Description" className="mb-3">
        <Form.Control
          type="description"
          placeholder="Description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Artisan </Button>
    </Form>
  );
}

ArtisanForm.propTypes = {
  obj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,

  }),
};

ArtisanForm.defaultProps = {
  obj: initialState,
};

export default ArtisanForm;
