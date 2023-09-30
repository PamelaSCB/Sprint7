import styled from "styled-components";

const StyledGlobal = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  height: 960px;
  max-width: 960px;
  margin: 160px auto;
  padding: 48px 32px;
  background-color: #c4d7b2;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 32px;
  border-radius: 32px;

  > h1 {
    width: 90%;
    text-align: center;
    font-size: 36px;
  }

  > div {
    width: 90%;
    padding: 16px;
    display: flex;
    justify-content: start;
    position: relative;
  }
`;

export default StyledGlobal;
