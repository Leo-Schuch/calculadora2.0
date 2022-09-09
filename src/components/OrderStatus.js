const OrderStatus = ({ stateTax, setStateTax }) => {

  return (
    <div>
      <label> Estado da compra
        <select value={stateTax} onChange={(event) => setStateTax(event.target.value)}>

          <option value='georgiaTax'>
            GA
          </option>
          <option value='floridaTax'>
            FL
          </option>
          <option value='californiaTax'>
            CA
          </option>
          <option value='texasTax'>
            TX
          </option>

        </select>
      </label>

    </div>
  );
};

export { OrderStatus };
