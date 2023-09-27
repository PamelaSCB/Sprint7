import "./App.css";
import React, { useState } from "react";
import Panel from "./components/Panel";

function App() {
  const [selectedOptions, setSelectedOptions] = useState({
    webPage: false,
    seo: false,
    googleAds: false,
  });

  const [numPages, setNumPages] = useState(1);
  const [numLenguages, setNumLenguages] = useState(1);
  const [webPageSelected, setWebPageSelected] = useState(false);

  const prices = {
    webPage: 500,
    seo: 300,
    googleAds: 200,
  };

  let totalPrice = Object.keys(selectedOptions).reduce(
    (total, option) =>
      selectedOptions[option] ? total + prices[option] : total,
    0
  );

  totalPrice =
    webPageSelected === true
      ? totalPrice + numPages * numLenguages * 30
      : totalPrice;

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setSelectedOptions({ ...selectedOptions, [name]: checked });
    if (name === "webPage") {
      setWebPageSelected(webPageSelected === false ? true : false);
    }
  }

  return (
    <div className="body">
      <h2>¿Qué quieres hacer?</h2>
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
          setNumPages={setNumPages}
          setNumLenguages={setNumLenguages}
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
