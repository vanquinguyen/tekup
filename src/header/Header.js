import React from "react";
import styled from "styled-components";

const TagHeader = styled.div`
  padding: 20px 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 30px;
`;

const TagLink = styled.a`
  text-decoration: none;
  padding: 8px 16px;
  font-size: 18px;
  color: black;
  border-radius: 8px;
  line-height: 1.8;
`;

function Header() {
  return (
    <TagHeader>
      <TagLink
        href="#"
        style={{
          backgroundColor: " #f8d000",
          boxShadow: "0 1px 5px 0 rgb(0 0 0 / 15%) !important",
        }}
      >
        <strong>All</strong>
      </TagLink>
      <TagLink href="#">
        <strong>Manpower Supply</strong>
      </TagLink>
      <TagLink href="#">
        <strong>Mobile App / Websites</strong>
      </TagLink>
      <TagLink href="#">
        <strong>UI/UX Design</strong>
      </TagLink>
    </TagHeader>
  );
}

export default Header;
