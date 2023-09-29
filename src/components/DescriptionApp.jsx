import { Link } from "react-router-dom";
import StyledDescription from "./DescriptionApp.styled";

const DescriptionApp = () => (
  <div>
    <StyledDescription>
      <p>
        Hemos creado una página de cálculo y registro de presupuesto, donde
        podemos escoger entre las siguientes opciones:
      </p>
      <ul>
        <li>Páginas web</li>
        <li>Consultoria SEO</li>
        <li>Campañas de amb Google Ads</li>
      </ul>
      <p>
        En el apartado Paginas web podemos escoger opciones ajustadas a tus
        necesidades como las siguientes:
      </p>
      <ul>
        <li>Número de páginas</li>
        <li>Número de idiomas</li>
      </ul>

      <ul>
        <li>
          <span>Crea tu propio presupuesto&nbsp;</span>
          <Link className="link" to="Budget">
            “Haz clic aquí”
          </Link>
        </li>
      </ul>
    </StyledDescription>
  </div>
);

export default DescriptionApp;
