import DesignerIcon from "@/assets/icons/DesignerIcon";
import EyeEmojiIcon from "@/assets/icons/EyeEmojiIcon";
import FourAngleRedIcon from "@/assets/icons/FourAngleRedIcon";
import ResearchIcon from "@/assets/icons/ResearchIcon";
import BehanceIcon from "@/assets/icons/social/BehanceIcon";
import InstagramIcon from "@/assets/icons/social/InstagramIcon";
import LinkEdinIcon from "@/assets/icons/social/LinkEdinIcon";
import MediumIcon from "@/assets/icons/social/MediumIcon";
import BgShadow from "@/assets/image/bg-shadow/BgShadow";
import BgShadowRight from "@/assets/image/bg-shadow/BgShadowRight";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import rightImage from "../../assets/image/heroRightImage.png";
const Hero = () => {
  return (
    <div className="hero-main-area">
      <div className="hero-bg-shadow-left">
        <BgShadow />
      </div>
      <Container>
        <div className="hero-inner-container">
          <Row>
            <Col lg="6" className="my-auto">
              <div className="hero-left-content">
                <p>
                  Hi, I’m <span className="text-secondary-color">Sheikh</span>,
                  a..
                </p>
                <h1 className="curious-title">
                  <FourAngleRedIcon iconPosition={"icon-left"} />
                  Curious
                  <EyeEmojiIcon iconPosition={"icon-right"} />
                </h1>
                <h1>
                  rese
                  <span className="hero-research-emoji">
                    <ResearchIcon /> a
                  </span>
                  rcher,
                </h1>
                <h1>
                  designer
                  <DesignerIcon iconPosition={"icon-bottom-right"} />
                </h1>
                <p className="hero-left-bottom-color-info">
                  from <span className="text-color-bangladesh">Bangladesh</span>
                  , working <span>globally</span>.
                </p>
              </div>
            </Col>
            <Col lg="6" className="my-auto">
              <div className="hero-right-content">
                <Image src={rightImage} alt="" />
                <div className="hero-social-media">
                  <div className="social-media-links">
                    <p>follow Me On:</p>
                    <ul>
                      <li>
                        <a href="">
                          <LinkEdinIcon />
                        </a>
                      </li>{" "}
                      <li>
                        <a href="">
                          <MediumIcon />
                        </a>
                      </li>{" "}
                      <li>
                        <a href="">
                          <BehanceIcon />
                        </a>
                      </li>{" "}
                      <li>
                        <a href="">
                          <InstagramIcon />
                        </a>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
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

export default Hero;
