import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createReview, updateReview } from '../../api/reviewData';

const initialState = {
  reviewername: '',
  reviewimage: '',
  reviewtext: '',
};

function ReviewForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) { setFormInput(obj); }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.artisan_id) {
      updateReview(formInput).then(() => router.push(`/artisan/${obj.artisan_id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createReview(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        // routing issue (?)
        updateReview(patchPayload).then(() => {
          router.push(`/artisan/${obj.artisan_id}`);
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Review </h2>

      {/* reviewername INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="reviewername" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="reviewername"
          value={formInput.reviewername}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Artisan Work" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="reviewimage"
          value={formInput.reviewimage}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* reviewtext INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Thoughts?" className="mb-3">
        <Form.Control
          type="reviewtext"
          placeholder="Say something nice.."
          name="reviewtext"
          value={formInput.reviewtext}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Review </Button>
    </Form>
  );
}

ReviewForm.propTypes = {
  obj: PropTypes.shape({
    reviewimage: PropTypes.string,
    reviewername: PropTypes.string,
    reviewtext: PropTypes.string,
    firebaseKey: PropTypes.string,
    artisan_id: PropTypes.string,

  }),
};

ReviewForm.defaultProps = {
  obj: initialState,
};

export default ReviewForm;
