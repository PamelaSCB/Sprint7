import "./App.css";
import React, { useState } from "react";
import Panel from "./components/Panel";

function App() {
  const [selectedOptions, setSelectedOptions] = useState({
    webPage: false,
    seo: false,
    googleAds: false,
  });

  const [numPages, setNumPages] = useState(0);
  const [numLenguages, setNumLenguages] = useState(0);

  const prices = {
    webPage: 500,
    seo: 300,
    googleAds: 200,
  };

  const totalPrice =
    Object.keys(selectedOptions).reduce(
      (total, option) =>
        selectedOptions[option] ? total + prices[option] : total,
      0
    ) +
    numPages * numLenguages * 30;

  const [webPageSelected, setWebPageSelected] = useState(false);

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setSelectedOptions({ ...selectedOptions, [name]: checked });
    if (name === "webPage") {
      setWebPageSelected(webPageSelected === false ? true : false);
    }
  }

  return (
    <div className="body">
      <h2>¿Qué quieres hacer ?</h2>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            name="webPage"
            onChange={handleCheckboxChange}
          />
          Una página web (500€)
        </label>
      </div>
      {webPageSelected && (
        <Panel
          numPages={numPages}
          numLenguages={numLenguages}
          setNumLenguages={setNumLenguages}
          setNumPages={setNumPages}
        />
      )}
      <div>
        <label>
          <input type="checkbox" name="seo" onChange={handleCheckboxChange} />
          Una consultoria SEO (300€)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="googleAds"
            onChange={handleCheckboxChange}
          />
          Una campaña de Google Ads (200€)
        </label>
      </div>
      <div>
        <p>Total:&nbsp;{totalPrice}€</p>
      </div>
    </div>
  );
}
export default App;
