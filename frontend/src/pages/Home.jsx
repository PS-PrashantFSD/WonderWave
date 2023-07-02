import React from 'react'
import '../styles/home.css';

import { Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImgGallery from '../components/image-gallery/MasonryImgGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/NewsLetter';

const Home = () => {
  return <>

  {/* ========hero section starts======= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt=''/>
              </div>
              <h1>Travelling opens the door to cerating{" "}
                <span className='highlight'>memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolores similique? Recusandae 
                vitae beatae fuga commodi tempora dignissimos earum molestias a, debitis, saepe fugit alias 
                laboriosam necessitatibus esse magni. Voluptate.
              </p>
            </div>
          </Col>

          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt=''/>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box hero__video-box mt-4">
              <video src={heroVideo} alt=''controls/>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt=''/>
            </div>
          </Col>

          <SearchBar/>
        </Row>
      </Container>
    </section>
  {/* ========hero section ends======= */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">Where we Serve</h5>
          <h2 className="services__title">We Offer our Best Services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>

  {/*================================ */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className='featured__tour-title'>Our featured Tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>
  {/*================feature section================ */}
  {/*================experience start================ */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experience'}/>
            <h2>With All Our Experience<br/> We will Serve You</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus explicabo voluptas earum debitis, 
              id tempore veritatis necessitatibus at odit. Reprehenderit officia eaque quam ipsum, illum dolore 
              harum molestiae voluptatem necessitatibus.</p>
          </div>

          <div className="counter__warpper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful trip</h6>
            </div>
            <div className="counter__box">
              <span>2k</span>
              <h6>Regular Clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years Experience</h6>
            </div>
          </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt=''/>
            </div>
          </Col>
      </Row>
    </Container>
  </section>
  {/*================experience end================ */}
  {/*================Gallery Sec Start=============== */}
  <section>
    <Container>
      <Row>
        <Col lg="12">
          <Subtitle subtitle={'Gallery'}/>
          <h2 className="gallery__title">Visit our customer tour gallery</h2>
        </Col>
        <Col lg='12'>
          <MasonryImgGallery/>
        </Col>
      </Row>
    </Container>
  </section>
  {/*================Gallery Sec End================ */}
  {/*================testom Sec start================ */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial__title">What our fans say bout us</h2>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
      </Row>
    </Container>
  </section>
  {/*================testo Sec End================ */}
  <NewsLetter/>

  </>
}

export default Home