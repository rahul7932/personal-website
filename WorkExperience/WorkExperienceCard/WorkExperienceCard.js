import React from "react";
import { WorkList } from "../../../data/WorkExperienceData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./WorkExperienceCardElements";
function WorkExperienceCard() {
  return (
    <>
      {WorkList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            {/* <BtnGroup>
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github/Demo ➜
              </a>
            </BtnGroup> */}
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default WorkExperienceCard;
