import { Container } from "react-bootstrap";
import Slider from "react-slick";

const ExploreShiekhSlider = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const CustomArrow = ({ onClick, direction, currentSlide, slideCount }) => {
    console.log(direction, currentSlide, slideCount);
    if (currentSlide === 0) {
      return <button onClick={onClick}>Prev </button>;
    } else if (currentSlide === slideCount - 1) {
      return <button onClick={onClick}>Next </button>;
    }
  };
  return (
    <div className="about-slider-wrap">
      <Container>
        <div className="about-slider-inner-container">
          <Slider
            {...settings}
            prevArrow={<CustomArrow direction="left" />}
            nextArrow={<CustomArrow direction="right" />}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ExploreShiekhSlider;
