import React from "react";
import styled from "styled-components";
import TextBox from "../Text";

const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0px;
  overflow: hidden;
  text-align: center;
`;

const ColorWrapper = styled.div`
  width: 300px;
  height: 350px;
  margin: 0px;
  border: 1px solid black;
  background-color: ${(props) => props.color || "white"};
`;

const ColorCard = (props) => {
  return (
    <CardWrapper>
      <ColorWrapper color={props.color} />
      <TextBox color={props.color} fontSize={"45"} fontWeight={"500"}>
        {props.color}
      </TextBox>
    </CardWrapper>
  );
};

export default ColorCard;
