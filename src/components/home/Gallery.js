import { galleryImage } from "@/assets/dummyData/gallery";
import FourAngleRedIcon from "@/assets/icons/FourAngleRedIcon";
import ShareUpIcon from "@/assets/icons/ShareUpIcon";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Gallery = () => {
  return (
    <div className="gallery-full-area">
      <Container>
        <div className="gallery-inner-container">
          <div className="gallery-header">
            <div className="gallery-header-top">
              <a href="#">
                See Website
                <ShareUpIcon />
              </a>
            </div>
            <div className="gallery-header-bottom">
              <h3>
                <FourAngleRedIcon iconPosition={"gallery-title"} />
                Gallery
              </h3>
              <p>
                A selection of UX/UI projects for Many Type clients, I create{" "}
                <br />
                better experience for users{" "}
                <span className="gallery-color-text-sub-title">People</span>
              </p>
            </div>
          </div>
          <div className="gallery-card-content-wrap">
            <Row>
              {galleryImage.length &&
                galleryImage.map(
                  ({ image, title, subTitle, link, bgColor }, idx) => (
                    <Col lg="6" key={idx}>
                      <div
                        className="single-gallery-card"
                        style={{ background: `${bgColor}` }}
                      >
                        <Image src={image} alt="" />
                        <div className="g-card-bottom-area">
                          <h4>{title}</h4>
                          <p>{subTitle}</p>
                          <a href="#">
                            See Details <ShareUpIcon />
                          </a>
                        </div>
                      </div>
                    </Col>
                  )
                )}
            </Row>
            <div className="gallery-bottom-see-more-btn">
              <a href="#">
                See All Work Here <ShareUpIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
