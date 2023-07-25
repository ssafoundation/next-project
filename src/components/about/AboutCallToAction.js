import DownloadIcon from "@/assets/icons/DownloadIcon";
import PlaneIcon from "@/assets/icons/PlaneIcon";
import { Col, Container, Row } from "react-bootstrap";

const AboutCallToAction = () => {
  return (
    <div className="about-call-to-action-full-area">
      <Container>
        <div className="about-call-to-action-inner-container">
          <Row>
            <Col lg="6">
              <div className="single-cta-content">
                <p>
                  <DownloadIcon /> Download CV
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="single-cta-content">
                <a href="mailto:shikh001@gmail.com">
                  <PlaneIcon />
                  shikh001@gmail.com
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutCallToAction;
