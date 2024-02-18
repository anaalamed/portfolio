import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Award {
  name: string;
  imgLink: string;
}

type Awards = Award[];

const AwardSlider: React.FC<{ awards: Awards }> = ({ awards }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {awards.map((award: Award) => (
        <img
          key={award.name}
          src={award.imgLink}
          alt={award.name}
          onClick={() => window.open(award.imgLink, "_blank")}
        ></img>
      ))}
    </Slider>
  );
};
export default AwardSlider;
