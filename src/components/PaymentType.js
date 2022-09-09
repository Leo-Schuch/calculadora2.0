const PaymentType = ({ paymentType, setPaymentType }) => {

  return (
    <div>
      <label> Forma de pagamento
        <select value={paymentType} onChange={(event) => setPaymentType(event.target.value)}>
          <option value='cash'>
            Dinheiro
          </option>
          <option value='credit-card'>
            Cartão de crédito
          </option>
        </select>
      </label>
    </div>
  );
};

export { PaymentType };
