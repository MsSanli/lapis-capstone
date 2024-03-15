import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { createReview, updateReview } from '../../api/reviewData';

const initialState = {
  reviewername: '',
  reviewimage: '',
  reviewtext: '',
};

function ReviewForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) { setFormInput(obj); }
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
      updateReview(formInput).then(() => router.push('/artisandetails'));
    } else {
      const payload = { ...formInput };
      createReview(payload).then(({ reviewername }) => {
        const patchPayload = { firebaseKey: reviewername };
        updateReview(patchPayload).then(() => {
          router.push('/artisandetails');
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
          type="reviewercomment"
          placeholder="Say something nice.."
          name="reviewercomment"
          value={formInput.reviewercomment}
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

  }),
};

ReviewForm.defaultProps = {
  obj: initialState,
};

export default ReviewForm;
