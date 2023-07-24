import DownloadIcon from "@/assets/icons/DownloadIcon";
import PlaneIcon from "@/assets/icons/PlaneIcon";
import BehanceIcon from "@/assets/icons/social/BehanceIcon";
import InstagramIcon from "@/assets/icons/social/InstagramIcon";
import LinkEdinIcon from "@/assets/icons/social/LinkEdinIcon";
import MediumIcon from "@/assets/icons/social/MediumIcon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/image/logo.png";
const MainHeader = () => {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  // menu active function
  const isLinkActive = (href) => {
    return router.pathname === href;
  };
  const [menu, setMenu] = useState(false);
  const handleMenuToggle = () => {
    setMenu(!menu);
  };
  console.log(scroll);
  return (
    <div className={scroll ? "main-header active-header" : "main-header"}>
      <Container>
        <div className="header-inner-container">
          {/* header logo */}
          <div className="header-left-logo">
            <Image src={logo} alt="" />
          </div>
          {/* header navbar */}
          <div className="header-right-navbar">
            <div className="header-email">
              <a href="mailto:shikh001@gmail.com">
                shikh001@gmail.com
                <PlaneIcon />
              </a>
            </div>
            {/* menu button  */}
            <div className="header-menu-area-wrap">
              <button
                onClick={handleMenuToggle}
                className={`${menu ? "close-show-btn" : ""}`}
              >
                <div className={`menu-toggle-bar ${menu ? "hide-menu" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>
      {/* menu show area  */}
      <div className={`menu-show-area ${menu ? "show-menu" : ""}`}>
        <Container>
          <div className="header-navbar-show-area">
            <Row>
              <Col lg="4">
                <div className="header-menu-left">
                  <h4>Nasir Ahmed</h4>
                  <p>Product Designer</p>
                </div>
              </Col>
              <Col lg="4">
                <div className="header-menu-middle">
                  <ul>
                    <li>
                      <a className="active menu-title">Menu</a>
                    </li>
                    <li>
                      <Link
                        className={isLinkActive("/") ? "active" : ""}
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={isLinkActive("/about") ? "active" : ""}
                        href="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={isLinkActive("/work") ? "active" : ""}
                        href="/work"
                      >
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          isLinkActive("/get-in-touch") ? "active" : ""
                        }
                        href="/get-in-touch"
                      >
                        Get In Touch
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={isLinkActive("/writing") ? "active" : ""}
                        href="/writing"
                      >
                        Writing
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="4">
                <div className="header-menu-right">
                  <ul>
                    <li>
                      <a href="mailto:shikh001@gmail.com">
                        shikh001@gmail.com
                        <PlaneIcon />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Download CV
                        <DownloadIcon />
                      </a>
                    </li>
                  </ul>
                  <div className="social-media-links">
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
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainHeader;
