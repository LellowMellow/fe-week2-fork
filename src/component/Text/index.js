import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "24"}px;
  font-weight: ${(props) => props.fontWeight || "400"};
`;

const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
    >
      {props.children}
    </StyledText>
  );
};

export default TextBox;
