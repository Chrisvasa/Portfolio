import React, { useState } from "react";
import styled from "styled-components";

const ImageSlider = ({ images, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  };

  const getPrevIndex = (currentIndex) => (currentIndex + images.length - 1) % images.length;
  const getNextIndex = (currentIndex) => (currentIndex + 1) % images.length;

  return (
    <SliderContainer>
      <Arrow onClick={goToPreviousSlide}>&lt;</Arrow>
      <ImageContainer>
        <Img src={images[getPrevIndex(currentIndex)]} alt="portfolio-image" />
        <FocusedImageContainer>
          <Img src={images[currentIndex]} alt="portfolio-image" />
          <ImageDescription>{descriptions[currentIndex]}</ImageDescription>
        </FocusedImageContainer>
        <Img src={images[getNextIndex(currentIndex)]} alt="portfolio-image" />
      </ImageContainer>
      <Arrow onClick={goToNextSlide}>&gt;</Arrow>
    </SliderContainer>
  );
};

const Img = styled.img`
  &:hover {
    /* filter: drop-shadow(0 0 2em #61dafbaa); */
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  max-width: 25vw;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const FocusedImageContainer = styled.div`
  position: relative;
  margin: 0 1rem;
`;

const ImageDescription = styled.p`
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const Arrow = styled.span`
  cursor: pointer;
  user-select: none;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 1rem;
`;

export default ImageSlider;
