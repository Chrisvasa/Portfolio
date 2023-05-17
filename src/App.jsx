import { useState } from "react";
import styled from "styled-components";
import { RxCross2, RxDash, RxSquare } from 'react-icons/rx'

function App() {

  return (
    <MainContainer>
      <HeaderContainer>
        <div className="category">
          <h2>Home <RxCross2 className="cross" /></h2>
          <h2>Projects</h2>
          <h2>Resume</h2>
        </div>
        <div className="options">
          <div><RxDash /></div>
          <div><RxSquare /></div>
          <div className="exit"><RxCross2 /></div>
        </div>
      </HeaderContainer>
      <TerminalContainer>
        <p>Backend Developer's Terminal</p>
        <p>Copyright (C) Christopher Vasankari. All rights reserved.</p>
        <p>Visit my github to get more information on any of my projects! <a href="https://github.com/Chrisvasa" target="_blank">https://github.com/Chrisvasa</a></p>
        <p className="menu-item">[ Item 1 ]</p>
        <p className="menu-item">[ Item 2 ]</p>
        <p className="menu-item">[ Item 3 ]</p>
        <p className="menu-item">[ Item 4 ]</p>
        <p>PS C:\Developer\Portfolio\Christopher{'>'} </p>
      </TerminalContainer>
      <PortfolioContainer>
        <h1>Christopher Vasankari</h1>
        <h2>Aspiring .NET Developer</h2>
        <p>
          Enthusiastic 29-year-old C# developer-in-training, passionate about software development. Pursuing a software development career,
          with experience in diverse projects demonstrating adaptability and quick learning. Committed to staying current with industry
          trends and embracing new technologies. Eager to contribute to dynamic teams and deliver high-quality software products in a
          challenging, rewarding software development role.
        </p>
      </PortfolioContainer>
      <ContactContainer>
        <h1>Christopher Vasankari</h1>
        <h2>Aspiring .NET Developer</h2>
        <p>
          Enthusiastic 29-year-old C# developer-in-training, passionate about software development. Pursuing a software development career,
          with experience in diverse projects demonstrating adaptability and quick learning. Committed to staying current with industry
          trends and embracing new technologies. Eager to contribute to dynamic teams and deliver high-quality software products in a
          challenging, rewarding software development role.
        </p>
      </ContactContainer>
      <AboutContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sapiente.</p>
      </AboutContainer>
    </MainContainer>
  );
}

const HeaderContainer = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  background-color: #262626;

  .options {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.2rem;
    > * {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 3rem;
      width: 3rem;
      &:hover {
      transform: scale(1.1);
      background-color: #3f3f3f;
    }
    }
    .exit {
      &:hover {
      background-color: #c42b1c;
    }
  }
}
  .category {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-right: 2rem;
    height: 2.5rem;
    > h2 {
      font-size: 1.2rem;
      font-style: italic;
      text-align: center;
      border-right: 1px solid #414141;
      width: 15rem;
      &:hover {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        background-color: #2e2e2e;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      } 
      &:first-child {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        background-color: #0c0c0c;
        border-right: 0px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      }
      .cross {
      position: relative;
      top: 0.4rem;
      left: 4rem;
      border-radius: 5px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      &:hover {
        background-color: #1a1a1a;
      }
    }
    }
  }
`;

const AboutContainer = styled.div`
  grid-row: 4/-1;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
`;

const PortfolioContainer = styled.div`
  grid-row: 3/4;
  grid-column: 1/2;
  display: flex;
  flex-direction: row;
  flex: 0;
  height: 100%;
`;

const ContactContainer = styled.div`
  grid-row: 3/4;
  grid-column: 2/-1;
  display: flex;
  flex-direction: row;
  flex: 0;
  height: 100%;
`;

const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 3rem 45rem 1fr 5rem;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }
`;

const TerminalContainer = styled.div`
  * {
    margin: 0.1rem;
    font-family: cascadia mono;
  }
  .menu-item {
    padding-left: 1rem;
    &:hover {
      cursor: pointer;
      width: fit-content;
      color: darkorange;
    }
  }
  a {
    text-decoration: none;
    color: #cccccc; 
    &:hover {
      text-decoration: none;
      color: darkorange;
    }
  }
  grid-row: 2/3;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #cccccc;
  background-color: #0c0c0c;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export default App;
