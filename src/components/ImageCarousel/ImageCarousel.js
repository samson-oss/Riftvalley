import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from'../../imgs/PROCESSING.png'




const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.index * -100}%);
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? 'blue' : 'gray')};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

const images = [
    <img src={image1} alt="Image 1" />,
    <img src={image1} alt="Image 1" />,
    <img src={image1} alt="Image 1" />,
    <img src={image1} alt="Image 1" />,
    <img src={image1} alt="Image 1" />,
    <img src={image1} alt="Image 1" />,
    <img src={image1} alt="Image 1" />,
    <img src={image1} alt="Image 1" />,
    <img src={image1} alt="Image 1" />,

];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <ImageContainer>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image1}
            alt={`Image ${index + 1}`}
            index={index - activeIndex}
          />
        ))}
      </ImageContainer>
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </Container>
  );
};

export default ImageCarousel;
