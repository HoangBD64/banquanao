import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const synActiveIndex = ({ item }) => setActiveIndex(item);

  const items = [1, 1, 1, 1, 1].map((item) => (
    <HomeSectionCard></HomeSectionCard>
  ));
  return (
    <div className="relative px-4 lg:px-28">
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChange={synActiveIndex}
          activeIndex={activeIndex}
        />
        { <Button
          variant="contained"
          className="z-50 bg-white hover:"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          arial-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          ></KeyboardArrowLeftIcon>
        </Button>}

        {activeIndex !== items.length - 5 && <Button
          variant="contained"
          className="z-50 bg-white hover:"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          arial-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          ></KeyboardArrowLeftIcon>
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
