import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <svg
        height="10%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 30"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
      </svg>
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/rahul7932/website/master/src/Assets/about_me.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Rahul Kumar</strong> and I'm currently studying Computer Science, Economics, and Entrepreneurship
            at UC Berkeley with an indented graduation date of Spring 2024. I'm passionate about product management, application development, 
            machine learning, and start ups. In summer 2021, I worked as a product management intern at AskWhai where I helped identify new markets for product deployment
            and improve existing products. I'm currently looking to work as a product management intern this summer.
          </div>
          <div className="AboutBio tagline2">
            Technologies I'm comfortable with.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
