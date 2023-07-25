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
const AboutMobileHero = () => {
  return (
    <div className="hero-main-area ">
      <div className="hero-bg-shadow-left">
        <BgShadow />
      </div>
      <Container>
        <div className="hero-inner-container responsive-about-hero">
          <Row className="g-0">
            <Col lg="12">
              <div className="about-hero-left-items">
                <ul>
                  <li>
                    <UserResearch />
                    User research
                  </li>
                  <li>
                    Visual design
                    <VisualDesign />
                  </li>
                  <li>
                    Consulting
                    <Consulting />
                  </li>
                  <li>
                    <ProductDesign />
                    Product Design
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

            <Col lg="12">
              <div className="about-hero-middle-items">
                <Image src={aboutImage} alt="" />
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

export default AboutMobileHero;
