import FourAngleRedIcon from "@/assets/icons/FourAngleRedIcon";
import ShareUpIcon from "@/assets/icons/ShareUpIcon";
import { Container } from "react-bootstrap";

const Writing = () => {
  return (
    <div className="writing-full-area">
      <Container>
        <div className="writing-inner-container">
          <div className="writing-header-area ">
            <h2>
              Writing <FourAngleRedIcon />
            </h2>
            <p>Sometimes write about design & development</p>
          </div>
          <div className="writing-card-area-wrap">
            <div className="writing-single-card w-card-1">
              <h4>UX/UI Design Process</h4>
              <a href="#">
                See Website
                <ShareUpIcon />
              </a>
            </div>
            <div className="writing-single-card w-card-2">
              <h4>What is Design Thinking Process?</h4>
              <a href="#">
                See Website
                <ShareUpIcon />
              </a>
            </div>
            <div className="writing-single-card w-card-3">
              <h4>Color Psychology: a brilliant helping</h4>
              <a href="#">
                See Website
                <ShareUpIcon />
              </a>
            </div>
            <div className="writing-single-card w-card-4">
              <h4>What’s a Design Sprint</h4>
              <a href="#">
                See Website
                <ShareUpIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Writing;
