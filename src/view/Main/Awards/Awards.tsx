import React from "react";
import { Title, SectionBox } from "../../../styles/global";
import Slider from "./Slider";
import awards from "../../../data/awards.json";

const Awards: React.FC = () => {
  return (
    <SectionBox id="awards">
      <Title>Awards</Title>
      <Slider awards={awards}></Slider>
    </SectionBox>
  );
};
export default Awards;
