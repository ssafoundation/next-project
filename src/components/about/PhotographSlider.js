import PhotographyIcon from "@/assets/icons/aboutHero/PhotographyIcon";
import CustomArrow from "@/utils/CustomArrow";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import slideImage from "../../assets/image/g-1.png";
const PhotographSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="about-slider-wrap">
      <Container>
        <div className="about-slider-header">
          <h3>
            Photograph
            <PhotographyIcon />
          </h3>
        </div>
        <div className="about-slider-inner-container">
          <Slider
            {...settings}
            prevArrow={<CustomArrow direction="left" />}
            nextArrow={<CustomArrow direction="right" />}
            className="custom-slider"
          >
            <div className={`about-slider-single-item slide-1`}>
              <Image src={slideImage} alt="" />
            </div>{" "}
            <div className={`about-slider-single-item`}>
              <Image src={slideImage} alt="" />
            </div>{" "}
            <div className={`about-slider-single-item`}>
              <Image src={slideImage} alt="" />
            </div>{" "}
            <div className={`about-slider-single-item`}>
              <Image src={slideImage} alt="" />
            </div>{" "}
            <div className={`about-slider-single-item`}>
              <Image src={slideImage} alt="" />
            </div>{" "}
            <div className={`about-slider-single-item slide-6`}>
              <Image src={slideImage} alt="" />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default PhotographSlider;
