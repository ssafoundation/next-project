import CurrentlyIcon from "@/assets/icons/aboutHero/CurrentlyIcon";
import EducationIcon from "@/assets/icons/aboutHero/EducationIcon";
import { Container } from "react-bootstrap";

const AboutDetails = () => {
  return (
    <div className="about-details-full-area">
      <Container>
        <div className="about-details-inner-container">
          <div className="about-details-top-content">
            <p>
              I’m <span className="text-secondary-color">Sheikh</span> a Curious
              Researcher, designer and creativity enthusiast. currently working
              Physically from Dhaka, Bangladesh. I like making the web a more
              connected and less boring place
            </p>
            <p>
              I currently work at{" "}
              <span className="text-secondary-color">Google</span> as UX/UI
              Designer — where I create UX/UI, Work with designers, maintain our
              design system, sit on the team Brainstorming, and oversee our
              design strategy.
            </p>
          </div>
          <div className="about-work-info">
            <h4>
              Currently
              <CurrentlyIcon />
            </h4>
            <p>
              UX/UI Designer At -{" "}
              <span className="text-secondary-color">
                <b>Google</b>
              </span>
            </p>
            <p>
              Joined: November 14 - 2022 to{" "}
              <span style={{ color: "#0FC500" }}>Now!</span>
            </p>
          </div>{" "}
          <div className="about-work-info">
            <h4>
              Education
              <EducationIcon />
            </h4>
            <p>
              Bsc. Computer Science & Engineering -
              <span className="text-secondary-color">
                <b> DU</b>
              </span>
            </p>
            <p>2017 - 2021</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutDetails;
