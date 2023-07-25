import CustomArrow from "@/utils/CustomArrow";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import slideImage from "../../assets/image/g-1.png";
const ExploreShiekhSlider = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 10,
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
            {[...Array(6)].map((slide, idx) => (
              <div className="about-slider-single-item">
                <Image src={slideImage} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ExploreShiekhSlider;
