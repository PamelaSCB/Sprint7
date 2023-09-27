import styled from "styled-components";

const StyledPanel = styled.div`
  width: 60%;
  margin: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: #b0d9b1;
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
  }
`;

export default StyledPanel;
