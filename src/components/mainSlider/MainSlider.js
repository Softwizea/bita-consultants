import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Create this CSS file for styling if needed
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from '../../assets/covers.jpeg'
import img2 from '../../assets/img2.jpeg'

const slides = [
    img1,
    img2,
    img1,
];
const CustomPrevArrow = (props) => (
    <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
      <ArrowBackIcon />
    </div>
  );
  
  const CustomNextArrow = (props) => (
    <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
      <ArrowForwardIcon />
    </div>
  );
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const Slide = ({ src }) => (
  <div className="slide">
    <img src={src} alt="Slide" style={{ maxHeight: '100vh' }}/>
  </div>
);

const SliderComponent = () => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slideSrc, index) => (
          <Slide key={index} src={slideSrc} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
