import { useState } from "react";
import styled from "styled-components";
import { RxCross2, RxDash, RxSquare } from 'react-icons/rx'
import Background from './assets/windowsBG.jpg';

function App() {

  return (
    <MainContainer>
      <HeaderContainer>
        <div className="category">
          <h2>Home <RxCross2 className="cross" /></h2>
          <h2>Projects <RxCross2 className="cross" /></h2>
          <h2>Resume <RxCross2 className="cross" /></h2>
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
        <p>PS C:\Developer\Portfolio\Christopher{'>'} <input placeholder="Search bar.."></input></p>
      </TerminalContainer>
      <ContactContainer>
      </ContactContainer>
      <AboutContainer>
        <WindowsButton>Start</WindowsButton>
        <div>Logo</div>
      </AboutContainer>
    </MainContainer>
  );
}

// Button design from Codepen - https://codepen.io/brundolf/pen/wzMWdy 
const WindowsButton = styled.button`
  width: 10rem;
  height: 100%;
  position:relative;
  display:inline-block;
  font-size:1.7rem;
  color:white;
  font-style:italic;
  padding: 5px 25px 5px 15px;
  text-shadow:1px 1px 1px #333;
  border-radius:0px 10px 15px 0px;
  border:none;
  transform:skewX(-3deg);
  left:-5px;
  box-shadow: 0px 5px 10px #79ce71 inset;
  background: radial-gradient(circle, #5eac56 0%, #3c873c 100%) center/cover no-repeat;
  &::before{
          position:relative;
          display:inline-block;
          height:15px;
          width:15px;
          top:1px;
          transform:skewX(3deg);
          -webkit-filter:drop-shadow(1px 1px 1px #333);
  }
`

const HeaderContainer = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  background-color: #262626;

  /* &:active {
    // Swap with color above once I figure out how to activate this
    background-color: #333333;
  } */

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
      opacity: 1; // fix later
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
  width: 100%;
  background:linear-gradient(to bottom, 
    #245edb 0%, #3f8cf3 9%, 
    #245edb 18%, #245edb 92%, 
  #333 100%) center/cover no-repeat;
`;

const ContactContainer = styled.div`
  grid-row: 3/4;
  grid-column: 1/-1;
  display: flex;
  flex-direction: row;
  flex: 0;
  height: 100%;
`;

const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 3rem 45rem 1fr 3rem;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  background-image: url(background);
`;

const TerminalContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, 
  rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, 
  rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
  input {
    font-size: 1rem;
    color: #cccccc;
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
      text-decoration: none;
    }
    /* &::placeholder {
      opacity: 1;
    } */
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
