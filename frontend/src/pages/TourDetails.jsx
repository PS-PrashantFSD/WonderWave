import React, { useEffect, useRef, useState, useContext } from 'react';
import './../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import NewsLetter from './../shared/NewsLetter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from './../context/AuthContext';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const [ratingError, setRatingError] = useState(false);
  const { user } = useContext(AuthContext);

  // Fetch data from the server
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // Submit review
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert('Please sign in');
      }

      if (tourRating === null) {
        setRatingError(true);
        return;
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading....</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg='8'>
                <div className='tour__content'>
                  <img src={photo} alt='' />
                  <div className='tour__info'>
                    <h2>{title}</h2>
                    <div className='d-flex align-items-center gap-5'>
                      <span className='tour__rating d-flex align-items-center gap-1'>
                        {[...Array(5)].map((_, index) => (
                          <span key={index} className='rating__star'>
                            <i className={`ri-star-fill ${index < avgRating ? 'active' : ''}`}></i>
                            {index < avgRating ? ' ' : null}
                          </span>
                        ))}
                        {totalRating === 0 ? 'Not Rated' : <span>({reviews?.length})</span>}
                      </span>

                      <span>
                        <i className='ri-map-pin-user-fill'></i> {address}
                      </span>
                    </div>
                    <div className='tour__extra-details'>
                      <span>
                        <i className='ri-map-pin-2-line'></i>
                        {city}
                      </span>
                      <span>
                        <i className='ri-money-dollar-circle-line'></i>${price} /Per person
                      </span>
                      <span>
                        <i className='ri-map-pin-time-line'></i>
                        {distance}k/m
                      </span>
                      <span>
                        <i className='ri-group-line'></i>
                        {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  {/* Review section */}
                  <div className='tour__reviews mt-4'>
                    <h4>Reviews ({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className='d-flex align-items-center gpa-3 mb-4 rating__group'>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            onClick={() => setTourRating(index + 1)}
                            className={`rating__star ${
                              tourRating !== null && index < tourRating ? 'active' : ''
                            }`}
                          >
                            <i className='ri-star-s-fill'></i>
                            {index < tourRating ? '   ' : null}
                          </span>
                        ))}
                        {tourRating !== null && (
                          <span className='rating__number'>{tourRating}</span>
                        )}
                      </div>
                      {ratingError && (
                        <div className='error__message mb-2 mt-0'>Please select a star rating</div>
                      )}

                      <div className='review__input'>
                        <input type='text' ref={reviewMsgRef} placeholder='Share your thoughts' required />
                        <button className='btn primary__btn text-white' type='submit'>
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className='user__reviews'>
                      {reviews?.map((review, index) => (
                        <div className='review__item' key={index}>
                          <img src={avatar} alt='' />

                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>{review.username}</h5>
                                <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                              </div>
                              <span className='d-flex align-items-center'>
                                {review.rating}
                                <i className='ri-star-s-fill'></i>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>

              <Col lg='4'>
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default TourDetails;
