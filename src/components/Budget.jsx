import React, { useEffect, useState } from "react";
import Panel from "./Panel";
import {
  saveDataToLocalStorage,
  // getDataFromLocalStorage,
} from "../useLocalStorage";
import { TemplateBudget } from "../templateBudget";
import { ClientBudget } from "./ClientBudget";
import { StyledBudget } from "./Budget.styled";

function Budget() {
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

  const [totalPrice, setTotalPrice] = useState(
    parseInt(localStorage.getItem("totalPrice")),
    0
  );
  const [clientName, setClientName] = useState(
    JSON.parse(localStorage.getItem("clientName")) || ""
  );
  const [budgetName, setBudgetName] = useState(
    JSON.parse(localStorage.getItem("budgetName")) || ""
  );
  const [budgetList, setBudgetList] = useState([]);

  useEffect(() => {
    const data = {
      selectedOptions,
      numPages,
      numLanguages,
      webPageSelected,
      totalPrice,
      clientName,
      budgetName,
    };
    saveDataToLocalStorage(data);
  }, [
    selectedOptions,
    numPages,
    numLanguages,
    webPageSelected,
    totalPrice,
    clientName,
    budgetName,
  ]);

  const prices = {
    webPage: 500,
    seo: 300,
    googleAds: 200,
  };

  useEffect(() => {
    let total = Object.keys(selectedOptions).reduce(
      (total, option) =>
        selectedOptions[option] ? total + prices[option] : total,
      0
    );
    total =
      webPageSelected === true ? total + numPages * numLanguages * 30 : total;
    setTotalPrice(total);
  }, [selectedOptions, numPages, numLanguages, webPageSelected]);

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setSelectedOptions({ ...selectedOptions, [name]: checked });
    if (name === "webPage") {
      setWebPageSelected(webPageSelected === false ? true : false);
    }
  }

  function restartBudget() {
    setSelectedOptions({
      webPage: false,
      seo: false,
      googleAds: false,
    });
    setNumLanguages(0);
    setNumPages(0);
    setTotalPrice(0);
    setWebPageSelected(false);
    setBudgetName("");
    setClientName("");
  }

  function getSelectedKeys() {
    return Object.keys(selectedOptions).filter((key) => selectedOptions[key]);
  }
  function saveBuget() {
    const newDate = new Date();
    const currentDate = newDate.toDateString("es-ES");
    const userBudget = new TemplateBudget(
      clientName,
      budgetName,
      numPages,
      numLanguages,
      totalPrice,
      currentDate,
      selectedKeys
    );
    const newBudgetList = [...budgetList];
    newBudgetList.push(userBudget);
    setBudgetList(newBudgetList);
    console.log("newBudgetList", newBudgetList);
    console.log("user budget", userBudget);
    restartBudget();
  }

  const selectedKeys = getSelectedKeys();

  return (
    <StyledBudget>
      <main className="body">
        <div className="budgetForm">
          <h2>¿Qué quieres hacer?</h2>
          <div>
            <label>
              <input
                type="checkbox"
                name="webPage"
                onChange={handleCheckboxChange}
                checked={selectedOptions.webPage}
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
              <input
                type="checkbox"
                name="seo"
                onChange={handleCheckboxChange}
                checked={selectedOptions.seo}
              />
              Una consultoria SEO (300€)
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="googleAds"
                onChange={handleCheckboxChange}
                checked={selectedOptions.googleAds}
              />
              Una campaña de Google Ads (200€)
            </label>
          </div>
          <div>
            <p>Total:{totalPrice}€</p>
          </div>
          <div className="namesContainer">
            Nombre de cliente:
            <input
              type="text"
              name={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <br />
            Nombre del presupuesto:
            <input
              type="text"
              name={budgetName}
              onChange={(e) => setBudgetName(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div>
            <button onClick={restartBudget}>Reiniciar presupuesto</button>
            <button onClick={saveBuget}>Guardar presupuesto</button>
          </div>
        </div>

        <div className="budgetListContainer">
          <div className="budgetList">
            {budgetList.length !== 0 &&
              budgetList.map(
                (
                  {
                    clientName,
                    budgetName,
                    numPages,
                    numLanguages,
                    totalPrice,
                    currentDate,
                    selectedKeys,
                  },
                  index
                ) => {
                  return (
                    <>
                      <ClientBudget
                        key={index}
                        clientName={clientName}
                        budgetName={budgetName}
                        numPages={numPages}
                        numLanguages={numLanguages}
                        totalPrice={totalPrice}
                        currentDate={currentDate}
                        selectedKeys={selectedKeys}
                      />
                    </>
                  );
                }
              )}
          </div>
        </div>
      </main>
    </StyledBudget>
  );
}

export default Budget;
