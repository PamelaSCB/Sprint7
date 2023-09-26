import StyledPanel from "./Panel.styled";
const Panel = ({ numPages, numLenguages, setNumPages, setNumLenguages }) => {
  return (
    <StyledPanel>
      <div className="adds">
        <label className="labelMenu">
          <p className="textMenu">Número de paginas</p>
          <input
            className="inputMenu"
            id="numPages"
            type="number"
            min="0"
            value={numPages}
            onChange={(e) => setNumPages(parseInt(e.target.value))}
          />
        </label>
        <label className="labelMenu">
          <p className="textMenu">Número de idiomas</p>
          <input
            className="inputMenu"
            id="numLenguages"
            type="number"
            min="0"
            value={numLenguages}
            onChange={(e) => setNumLenguages(parseInt(e.target.value))}
          />
        </label>
      </div>
    </StyledPanel>
  );
};

export default Panel;
