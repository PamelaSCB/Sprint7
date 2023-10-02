import styled from "styled-components";

const StyledPanel = styled.div`
  .labelMenu {
    display: block;
    align-items: center;
  }
  .textMenu {
    display: inline-block;
    margin-right: 10px;
    font-size: 15px;
    margin-top: auto;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    margin-left: 10px;
    background-color: #618264;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
  }
  .button:active {
    transform: translateY(2px);
  }

  .infoButton {
    border-radius: 20px;
    background-color: #eeeeee;
  }
  @media (max-width: 1150px) {
    .labelMenu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .button {
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .infoButton {
      margin-right: 0;
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

export default StyledPanel;
