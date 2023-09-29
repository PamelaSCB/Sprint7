import styled from "styled-components";

const StyledDescription = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2.5rem;
  height: 100%;
  position: relative;

  > p {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.5;
  }

  > p:nth-of-type(1) {
    margin-top: 1rem;
  }

  > p:nth-of-type(2) {
    margin-top: 1.2rem;
    font-size: 1.3rem;
  }

  > ul {
    font-size: 1.2rem;
  }

  > ul:nth-of-type(1),
  > ul:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    gap: 0.5rem;
    padding-left: 2rem;
  }

  > ul:nth-of-type(3) {
    align-self: center;
    list-style: none;

    position: absolute;
    bottom: 0;

    span {
      font-weight: bolder;
    }

    .link {
      font-weight: bolder;
      color: #116a7b;
      /* color: #116A7B; */
      text-decoration: none;
    }
    .link:active {
      color: #618264;
      transform: translateY(0.3rem);
    }
  }
`;

export default StyledDescription;
