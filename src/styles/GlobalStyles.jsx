import styled from "styled-components";

export const StyledGlobal = styled.div`
  height: 60rem;
  max-width: 60rem;
  margin: 10rem auto;
  padding: 3rem 2rem;
  background-color: #c4d7b2;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  border-radius: 2rem;

  > h1 {
    width: 90%;
    text-align: center;
    font-size: 2.5rem;
  }

  > h2 {
    width: 90%;
    text-align: center;
    font-size: 2.5rem;
  }

  > div {
    width: 90%;
    padding: 1rem;
    display: flex;
    justify-content: start;
    position: relative;
  }
`;
