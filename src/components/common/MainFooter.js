import BehanceIcon from "@/assets/icons/social/BehanceIcon";
import InstagramIcon from "@/assets/icons/social/InstagramIcon";
import LinkEdinIcon from "@/assets/icons/social/LinkEdinIcon";
import MediumIcon from "@/assets/icons/social/MediumIcon";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import shadowImage from "../../assets/image/footer/angleArrows.svg";
import mailImage from "../../assets/image/footer/mail-image.svg";
const MainFooter = () => {
  return (
    <div className="footer-full-area-wrap">
      <Container>
        <div className="footer-inner-container">
          <Row>
            <Col lg="6" className="my-auto">
              <div className="footer-left-content">
                <p>
                  Still curious about how to bring those imaginative thoughts to
                  life?
                </p>
                <h3>Let me make your own story for you</h3>
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
            </Col>
            <Col lg="6" className="my-auto">
              <div className="footer-right-image">
                <Image src={shadowImage} alt="" />
                <Image src={mailImage} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MainFooter;
