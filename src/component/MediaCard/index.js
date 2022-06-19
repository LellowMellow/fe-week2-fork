import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 350px;
  height: 393px;
  border-radius: 20px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.3);
  display: block;
  margin: 50px;
  padding-bottom: 12.5px;
`;

const ImageBox = styled.img`
  width: 328px;
  height: 197px;
  border-radius: 23px;
  margin-top: 9px;
  margin-bottom: 0px;
  overflow: hidden;
`;

const TitleBox = styled.p`
  width: 325px;
  height: 42px;
  border-radius: 20px;
  margin: 10px;
  margin-bottom: 0px;
  padding-left: 10px;
  text-align: left;
  color: #2e2e2e;
  font-size: 27px;
  font-weight: bold;
`;

const TextBox = styled.p`
  width: 325px;
  height: 48px;
  border-radius: 20px;
  margin: 10px;
  margin-top: 0px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  font-weight: 200;
  color: #2e2e2e;
  font-size: 20px;
`;

const ButtonWrap = styled.div`
  width: 328px;
  height: 52px;
  background-color: ${(props) => props.color || "#4872E4"};
  border-radius: 20px;
  margin: 12.5px;
  margin-top: 30px;
  line-height: 50px;
  color: white;
  display: flex;
  overflow: hidden;
`;

const Button = styled.button`
  width: 328px;
  height: 52px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.3)
  );
  border: none;
  line-height: 50px;
  color: white;
  font-size: 19px;
`;

const MediaCard = (props) => {
  return (
    <CardWrapper>
      <ImageBox src={props.url || "./mediacard_default_img.png"}></ImageBox>
      <TitleBox>{props.heading || "Heading"}</TitleBox>
      <TextBox>
        {props.text || "This is a short description about the card."}
      </TextBox>
      <ButtonWrap color={props.color}>
        <Button>Action</Button>
      </ButtonWrap>
    </CardWrapper>
  );
};

export default MediaCard;
