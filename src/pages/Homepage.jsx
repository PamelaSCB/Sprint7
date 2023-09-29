import Budget from "../components/Budget";
import { StyledGlobal } from "../styles/GlobalStyles";

const Homepage = () => (
  <div>
    <StyledGlobal>
      <h1>Cálculo de Presupuestos</h1>
      <Budget />
    </StyledGlobal>
  </div>
);
export default Homepage;
