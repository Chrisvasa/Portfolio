import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

function App() {
  const portfolioImages = [
    "https://loremflickr.com/cache/resized/65535_52209145403_473db9b7de_z_640_360_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_52733694762_6f2cc72a8d_z_640_360_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_52056562618_f79fc239e8_z_640_360_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_52313363183_86f5d0eb84_h_640_360_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_52688291677_2d1961dfaa_b_640_360_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_52379175588_562053f053_z_640_360_nofilter.jpg",
    // Add more image URLs here if needed
  ];

  const imageDescriptions = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
    // Add more descriptions here if needed
  ];
  return (
    <MainContainer>
      <HeaderContainer>
        <h1>Christopher Vasankari</h1>
        <h2>Aspiring .NET Developer</h2>
        <p>
          Enthusiastic 29-year-old C# developer-in-training, passionate about software development. Pursuing a software development career,
          with experience in diverse projects demonstrating adaptability and quick learning. Committed to staying current with industry
          trends and embracing new technologies. Eager to contribute to dynamic teams and deliver high-quality software products in a
          challenging, rewarding software development role.
        </p>
      </HeaderContainer>
      <PortfolioContainer>
        <ImageSlider images={portfolioImages} descriptions={imageDescriptions} />
      </PortfolioContainer>
      <AboutContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sapiente.</p>
      </AboutContainer>
    </MainContainer>
  );
}

const AboutContainer = styled.div`
  grid-row: 3/3;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
`;

const PortfolioContainer = styled.div`
  grid-row: 2/3;
  grid-column: 2/2;
  display: flex;
  flex-direction: row;
  flex: 0;
`;

const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  * {
    margin: 0.1rem;
  }
  grid-row: 1/2;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 33vh;
`;

export default App;
