import "./App.css";
import React, { useEffect, useState } from "react";
import Panel from "./components/Panel";
import {
  saveDataToLocalStorage,
  // getDataFromLocalStorage,
} from "./useLocalStorage";

function App() {
  const [selectedOptions, setSelectedOptions] = useState(
    JSON.parse(localStorage.getItem("selectedOptions")) || {
      webPage: false,
      seo: false,
      googleAds: false,
    }
  );

  const [numPages, setNumPages] = useState(
    parseInt(localStorage.getItem("numPages")) || 0
  );

  const [numLanguages, setNumLanguages] = useState(
    parseInt(localStorage.getItem("numLanguages")) || 0
  );

  const [webPageSelected, setWebPageSelected] = useState(
    JSON.parse(localStorage.getItem("webPageSelected")) || false
  );

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
    webPageSelected === true ? totalPrice + numPages * 30 : totalPrice;

  totalPrice =
    webPageSelected === true ? totalPrice + numLanguages * 30 : totalPrice;

  useEffect(() => {
    const data = {
      selectedOptions,
      numPages,
      numLanguages,
      webPageSelected,
    };
    saveDataToLocalStorage(data);
   
  }, [selectedOptions, numPages, numLanguages, webPageSelected]);

  // useEffect(() => {
  //   const data = getDataFromLocalStorage();
  //   if (data) {
  //     setSelectedOptions(data.selectedOptions);
  //     setNumPages(data.numPages);
  //     setNumLanguages(data.numLanguages);
  //     setWebPageSelected(data.webPageSelected);
  //   }
  // }, []);

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
          numLanguages={numLanguages}
          setNumPages={setNumPages}
          setNumLanguages={setNumLanguages}
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
