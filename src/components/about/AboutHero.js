import Consulting from "@/assets/icons/aboutHero/Consulting";
import ProductDesign from "@/assets/icons/aboutHero/ProductDesign";
import Prototyping from "@/assets/icons/aboutHero/Prototyping";
import UsabilityTesting from "@/assets/icons/aboutHero/UsabilityTesting";
import UserResearch from "@/assets/icons/aboutHero/UserResearch";
import VisualDesign from "@/assets/icons/aboutHero/VisualDesign";
import BgShadow from "@/assets/image/bg-shadow/BgShadow";
import BgShadowRight from "@/assets/image/bg-shadow/BgShadowRight";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import aboutImage from "../../assets/image/heroRightImage.png";
const AboutHero = () => {
  return (
    <div className="hero-main-area">
      <div className="hero-bg-shadow-left">
        <BgShadow />
      </div>
      <Container>
        <div className="hero-inner-container">
          <Row className="g-0">
            <Col lg="3">
              <div className="about-hero-left-items">
                <ul>
                  <li>
                    <UserResearch />
                    User research
                  </li>
                  <li>
                    Consulting
                    <Consulting />
                  </li>
                  <li>
                    <ProductDesign />
                    Product Design
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="about-hero-middle-items">
                <Image src={aboutImage} alt="" />
                <div className="about-animate-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_0_887)">
                      <path
                        d="M12 4.5C12.1989 4.5 12.3897 4.57902 12.5303 4.71967C12.671 4.86032 12.75 5.05109 12.75 5.25V8.25C12.75 8.44891 12.671 8.63968 12.5303 8.78033C12.3897 8.92098 12.1989 9 12 9C11.8011 9 11.6103 8.92098 11.4697 8.78033C11.329 8.63968 11.25 8.44891 11.25 8.25V5.25C11.25 5.05109 11.329 4.86032 11.4697 4.71967C11.6103 4.57902 11.8011 4.5 12 4.5ZM18 16.5C18 18.0913 17.3679 19.6174 16.2426 20.7426C15.1174 21.8679 13.5913 22.5 12 22.5C10.4087 22.5 8.88258 21.8679 7.75736 20.7426C6.63214 19.6174 6 18.0913 6 16.5V7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5V16.5ZM12 0C10.0109 0 8.10322 0.790176 6.6967 2.1967C5.29018 3.60322 4.5 5.51088 4.5 7.5V16.5C4.5 18.4891 5.29018 20.3968 6.6967 21.8033C8.10322 23.2098 10.0109 24 12 24C13.9891 24 15.8968 23.2098 17.3033 21.8033C18.7098 20.3968 19.5 18.4891 19.5 16.5V7.5C19.5 5.51088 18.7098 3.60322 17.3033 2.1967C15.8968 0.790176 13.9891 0 12 0Z"
                        fill="#141414"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_887">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className="about-hero-right-items">
                <ul>
                  <li>
                    Visual design
                    <VisualDesign />
                  </li>
                  <li>
                    <Prototyping />
                    Prototyping
                  </li>
                  <li>
                    Usability testing
                    <UsabilityTesting />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="hero-bg-shadow-right">
        <BgShadowRight />
      </div>
    </div>
  );
};

export default AboutHero;
