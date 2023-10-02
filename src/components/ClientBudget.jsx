export const ClientBudget = ({
  clientName,
  budgetName,
  numPages,
  numLanguages,
  totalPrice,
  currentDate,
  selectedKeys,
}) => (
  <div>
    <div>
      <h2>Numero de Presupuesto:{budgetName}</h2>
      <p>
        Cliente: {clientName}
        <br />
        Dia : {currentDate}
        <br />
        Servicios contratados:{selectedKeys.toString()}
        <br />
        Páginas: {numPages}
        <br />
        Idiomas: {numLanguages}
        <br />
        Precio final:{totalPrice}€
      </p>
    </div>
  </div>
);
