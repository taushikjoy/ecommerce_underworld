import React from "react";
import styled from "styled-components";

function Announcement() {
  return <Container>Super Deal!! Free shiping on order over $50.</Container>;
}

const Container = styled.div`
  background-color: teal;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  
`;

export default Announcement;
