const CustomArrow = ({ onClick, direction, currentSlide, slideCount }) => {
  if (direction === "left") {
    if (currentSlide === 0) {
      return null;
    } else {
      return (
        <button
          onClick={onClick}
          style={{ border: "none", background: "none", padding: "0" }}
          className="about-slider-prev-btn"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_1659)">
              <path
                d="M30 59.0625C13.9492 59.0625 0.9375 46.0508 0.9375 30C0.9375 13.9492 13.9492 0.9375 30 0.9375C46.0508 0.9375 59.0625 13.9492 59.0625 30C59.0625 46.0508 46.0508 59.0625 30 59.0625Z"
                fill="#F64749"
              />
              <path
                d="M43.2093 25.6672H41.6274V34.3328H43.2093V25.6672ZM46.3501 25.6672H44.7682V34.3328H46.3501V25.6672ZM13.6499 30L29.3959 18.5309V25.6672H40.0684V34.3328H29.3959V41.4692L13.6499 30Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1659">
                <rect
                  width="60"
                  height="60"
                  fill="white"
                  transform="matrix(-1 0 0 1 60 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      );
    }
  }
  const slideValue = slideCount - 2;
  if (direction === "right") {
    if (slideValue - 1 === currentSlide) {
      return null;
    } else {
      return (
        <button
          onClick={onClick}
          style={{ border: "none", background: "none", padding: "0" }}
          className="about-slider-next-btn"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_1736)">
              <path
                d="M30 59.0625C46.0508 59.0625 59.0625 46.0508 59.0625 30C59.0625 13.9492 46.0508 0.9375 30 0.9375C13.9492 0.9375 0.9375 13.9492 0.9375 30C0.9375 46.0508 13.9492 59.0625 30 59.0625Z"
                fill="#F64749"
              />
              <path
                d="M16.7908 25.6672H18.3727V34.3328H16.7908V25.6672ZM13.6499 25.6672H15.2318V34.3328H13.6499V25.6672ZM46.3501 30L30.6041 18.5309V25.6672H19.9316V34.3328H30.6041V41.4691L46.3501 30Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1736">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      );
    }
  }
};

export default CustomArrow;
