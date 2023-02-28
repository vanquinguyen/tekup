import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";

const CardItem = styled.div`
  position: relative;
  width: 407px;
  height: 407px;
  box-shadow: 1px 1px 10px 1px #ccc;
  transition: all 0.2s ease-in;
  border-radius: 8px;
  &:hover {
    transform: translateY(-3px);
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  background-color: #fff;
  width: calc(100% - 32px);
  border-radius: 8px;
  bottom: 0;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-size: 18px;
  box-shadow: 1px 1px 10px 1px #ccc;
  cursor: pointer;
`;

function Item({ props }) {
  return (
    <CardItem>
      <CardImage src={props.image} alt="Not Here" />
      <CardContent>
        <strong>{props.content}</strong>
        <FaAngleRight></FaAngleRight>
      </CardContent>
    </CardItem>
  );
}

export default Item;
