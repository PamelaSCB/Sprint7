import styled from "styled-components";

const StyledDescription = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 40px;
  height: 100%;
  position: relative;

  > p {
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    line-height: 1.5;
  }

  > p:nth-of-type(1) {
    margin-top: 16px;
  }

  > p:nth-of-type(2) {
    margin-top: 19px;
    font-size: 19px;
  }

  > ul {
    font-size: 17px;
  }

  > ul:nth-of-type(1),
  > ul:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    gap: 8px;
    padding-left: 32px;
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
      color: #618264;

      text-decoration: none;
    }
    .link:active {
      color: #618264;
      transform: translateY(5px);
    }
  }
`;

export default StyledDescription;
