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
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://avatars.githubusercontent.com/u/52119279?s=400&u=b389068acac8099906b9e6d39733e79ba1f59995&v=4"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Rahul Kumar</strong> I'm a currently studying Computer Science, Economics, and Entrepreneurship
            at UC Berkeley and I intend to graduate in Spring 2024. I'm passionate about product management, application development, 
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
