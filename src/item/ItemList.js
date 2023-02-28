import React from "react";
import styled from "styled-components";

const CardList = styled.div`
  width: calc(100% - 240px);
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  gap: 28px;
`;

function ItemList(props) {
  return <CardList>{props.children}</CardList>;
}

export default ItemList;
