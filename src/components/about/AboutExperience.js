import { digitalCapabilities } from "@/assets/dummyData/digitalCapabilitiesData";
import { funFact } from "@/assets/dummyData/funFact";
import CertificateIcon from "@/assets/icons/aboutHero/CertificateIcon";
import DCIcon from "@/assets/icons/aboutHero/DCIcon";
import FunFact from "@/assets/icons/aboutHero/FunFact";
import Image from "next/image";
import { Container } from "react-bootstrap";
import imageUx from "../../assets/image/about/Certificate/ux.png";
const AboutExperience = () => {
  return (
    <div className="about-experience-full-area">
      <Container>
        <div className="about-experience-inner-container">
          {/*Digital CAPABILITIES  */}
          <div className="digital-capabilities-wrap">
            <div className="digital-capabilities-header">
              <h3>
                Digital capabilities
                <DCIcon />
              </h3>
            </div>
            <div className="digital-capabilities">
              {digitalCapabilities?.length &&
                digitalCapabilities?.map(({ image, title, bgColor }, idx) => (
                  <div
                    className="digital-capabilities-single-item-wrap"
                    key={idx}
                  >
                    <div
                      className="digital-capabilities-single-item"
                      style={{ backgroundColor: `${bgColor}` }}
                    >
                      <Image src={image} alt="" />
                    </div>
                    <h6>{title}</h6>
                  </div>
                ))}
            </div>
          </div>
          {/* Certificate */}
          <div className="digital-capabilities-wrap">
            <div className="digital-capabilities-header">
              <h3>
                Certificate
                <CertificateIcon />{" "}
              </h3>
            </div>
            <div className="digital-capabilities">
              <div className="digital-capabilities-single-item-wrap">
                <div
                  className="digital-capabilities-single-item"
                  style={{ backgroundColor: `#FFE3E6` }}
                >
                  <Image src={imageUx} alt="" />
                </div>
                <h6>Google UX</h6>
              </div>
            </div>
          </div>
          {/* Fun Fact */}
          <div className="digital-capabilities-wrap">
            <div className="digital-capabilities-header">
              <h3>
                Fun Fact
                <FunFact />
              </h3>
            </div>
            <div className="digital-capabilities">
              {funFact?.length &&
                funFact?.map(({ image, title, bgColor, content }, idx) => (
                  <div
                    className="digital-capabilities-single-item-wrap"
                    key={idx}
                  >
                    <div
                      className="digital-capabilities-single-item"
                      style={{ backgroundColor: `${bgColor}` }}
                    >
                      <Image src={image} alt="" />
                    </div>
                    <h6>{title}</h6>
                    <p>{content}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutExperience;
