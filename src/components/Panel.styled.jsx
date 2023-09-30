import styled from "styled-components";

const StyledPanel = styled.div`
  .labelMenu {
    display: block;
    align-items: center;
  }
  .textMenu {
    display: inline-block;
    margin-right: 10px;
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
    font-size: 24px;
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
  /* width: 60%;
  margin: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: #c8e4b2;
  border: 0.2rem solid #4444;

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
    color: #eeeee4;
    font-size: 26px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .button:active {
    transform: translateY(0.2rem);
  } */
`;

export default StyledPanel;
