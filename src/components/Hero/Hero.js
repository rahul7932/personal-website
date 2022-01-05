import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Rahul Kumar</h1>
            <h5>Engineer, Designer, Entrepreneur </h5>
            <p>
              Berkeley, CA
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://raw.githubusercontent.com/rahul7932/website/master/src/Assets/pfp.png"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
      <svg
        height="10%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 50"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
      </svg>
    </main>
  );
}

export default Hero;
