import StyledPanel from "./Panel.styled";

const Panel = ({ numPages, setNumPages, numLenguages, setNumLenguages }) => {
  const increasePage = () => {
    if(numPages === 0) setNumPages("")
    setNumPages((count) => count + 1);
  };
  const decreasePage = () => {
    setNumPages((count) => (count > 1 ? count - 1 : count));
  };
  const increaseLanguage = () => {
    setNumLenguages((count) => count + 1);
  };
  const decreaseLanguage = () => {
    setNumLenguages((count) => (count > 1 ? count - 1 : count));
  };

  return (
    <StyledPanel>
      <div className="adds">
        <label className="labelMenu">
          <p className="textMenu"> Número de paginas </p>
          <button className="button" min="1" onClick={increasePage}>
            +
          </button>
          <input
            className="inputMenu"
            id="numPages"
            type="text"
            min="1"
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
            id="numLenguages"
            type="text"
            min="1"
            value={numLenguages}
            onChange={(e) => setNumLenguages(parseInt(+e.target.value))}
          />
          <button className="button" min="1" onClick={decreaseLanguage}>
            -
          </button>
        </label>
      </div>
    </StyledPanel>
  );
};

export default Panel;
