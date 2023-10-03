import StyledPanel from "./Panel.styled";
import Swal from "sweetalert2";

const Panel = ({ numPages, setNumPages, numLanguages, setNumLanguages }) => {
  const increasePage = () => {
    setNumPages((count) => count + 1);
  };
  const decreasePage = () => {
    setNumPages((count) => (count > 0 ? count - 1 : 0));
  };
  const increaseLanguage = () => {
    setNumLanguages((count) => count + 1);
  };
  const decreaseLanguage = () => {
    setNumLanguages((count) => (count > 0 ? count - 1 : 0));
  };
  const PopUpInfoPages = () => {
    Swal.fire({
      icon: "info",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      title: "Número de Paginas",
      text: "El número de paginas que tendra su sitio web es : " + numPages,
      showConfirmButton: false,
      footer: "Para salir pulsa fuera de la ventana",
      customClass: {
        popup: "popup",
      },
    });
  };

  const PopUpInfoLanguages = () => {
    Swal.fire({
      icon: "info",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      title: "Número de Idiomas",
      text: "El número de idiomas que tendra su sitio web es : " + numLanguages,
      showConfirmButton: false,
      footer: "Para salir pulsa fuera de la ventana",
      customClass: {
        popup: "popup",
      },
    });
  };

  return (
    <StyledPanel>
      <div className="menuPrincipal">
        <label className="labelMenu">
          <p className="textMenu"> Número de paginas </p>
          <button className="button" onClick={increasePage}>
            +
          </button>
          <input
            className="inputMenu"
            type="text"
            value={numPages}
            onChange={(e) => setNumPages(parseInt(+e.target.value))}
          />
          <button className="button" onClick={decreasePage}>
            -
          </button>
          <button className="infoButton" onClick={PopUpInfoPages}>
            i
          </button>
        </label>
        <label className="labelMenu">
          <p className="textMenu">Número de idiomas</p>
          <button className="button" onClick={increaseLanguage}>
            +
          </button>
          <input
            className="inputMenu"
            type="text"
            value={numLanguages}
            onChange={(e) => setNumLanguages(parseInt(+e.target.value))}
          />
          <button className="button" onClick={decreaseLanguage}>
            -
          </button>
          <button className="infoButton" onClick={PopUpInfoLanguages}>
            i
          </button>
        </label>
      </div>
    </StyledPanel>
  );
};

export default Panel;
