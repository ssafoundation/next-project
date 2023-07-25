import PlusIcon from "@/assets/icons/PlusIcon";
import { Container } from "react-bootstrap";
// import bgImage from "";
const Services = () => {
  return (
    <div
      className="service-full-area"
      style={{ backgroundImage: " url(/service/bg-image.png) " }}
    >
      <div className="service-container-outer-wrap">
        <Container>
          <div className="service-inner-container">
            <div className="service-items-wrap">
              <div className="service-single-item content-box">
                <h4>Product Design</h4>
              </div>
              <div className="service-single-item">
                <PlusIcon />
              </div>
              <div className="service-single-item content-box">
                <h4>App Design</h4>
              </div>
              <div className="service-single-item">
                <PlusIcon />
              </div>
              <div className="service-single-item content-box">
                <h4>Web Design</h4>
              </div>
              <div className="service-single-item">
                <PlusIcon />
              </div>
              <div className="service-single-item content-box">
                <h4>Strategy</h4>
              </div>
              <div className="service-single-item">
                <PlusIcon />
              </div>
              <div className="service-single-item content-box">
                <h4>Dashboard</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
