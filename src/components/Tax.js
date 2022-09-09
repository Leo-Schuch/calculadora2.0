const Tax = ({ taxType, setTaxType }) => {

  return (
    <div>
      <label> Impostos
        <select value={taxType} onChange={(event) => setTaxType(event.target.value)}>
          <option value='declare'>
            Declarar
          </option>
          <option value='tax-without-declare'>
            Não declarar e ser multado
          </option>
          <option value='no-tax-without-declare'>
            Não declarar e não ser taxado
          </option>
        </select>
      </label>
    </div>
  );
};

export { Tax };
