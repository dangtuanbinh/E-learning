import React from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import BG1 from '../../Assets/img/BG1.jpeg';
import BG2 from '../../Assets/img/BG2.jpg';
import BG3 from '../../Assets/img/BG3.jpg';
import classes from "./style.module.css"
import { Box, withStyles } from "@material-ui/core";


const items = [
  {
    background: `${BG1}`,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    background: `${BG2}`,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    background: `${BG3}`,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.background}
        className={classes.slider}
      >
        <img src={item.background} alt={item.altText} className={classes.image}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Slider;
