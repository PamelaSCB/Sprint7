import StyledPanel from "./Panel.styled";

const Panel = ({ numPages, setNumPages, numLanguages, setNumLanguages }) => {
  const increasePage = () => {
    setNumPages((count) => count + 1);
  };
  const decreasePage = () => {
    setNumPages((count) => (count > 0 ? count - 1 : count));
  };
  const increaseLanguage = () => {
    setNumLanguages((count) => count + 1);
  };
  const decreaseLanguage = () => {
    setNumLanguages((count) => (count > 0 ? count - 1 : count));
  };

  return (
    <StyledPanel>
      <div className="adds">
        <label className="labelMenu">
          <p className="textMenu"> Número de paginas </p>
          <button className="button" onClick={increasePage}>
            +
          </button>
          <input
            className="inputMenu"
            id="numPages"
            type="text"
            min="0"
            value={numPages}
            onChange={(e) => setNumPages(parseInt(+e.target.value))}
          />
          <button className="button" onClick={decreasePage}>
            -
          </button>

          <div></div>
        </label>
        <label className="labelMenu">
          <p className="textMenu">Número de idiomas</p>
          <button className="button" onClick={increaseLanguage}>
            +
          </button>
          <input
            className="inputMenu"
            id="numLanguages"
            type="text"
            min="0"
            value={numLanguages}
            onChange={(e) => setNumLanguages(parseInt(+e.target.value))}
          />
          <button className="button" onClick={decreaseLanguage}>
            -
          </button>
        </label>
      </div>
    </StyledPanel>
  );
};

export default Panel;
