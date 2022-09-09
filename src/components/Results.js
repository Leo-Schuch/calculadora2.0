import { formatToBRCurrency, formatToUsCurrency } from '../utils/currency';

const Results = ({ currentQuote, resultIof, resultStateTax, resultTax, total }) => {
  return (
    <div className='container-result'>

      <div className='resultIof'>
        <label>Resultado IOF: {formatToUsCurrency(resultIof)} </label>
      </div>
      <div>
        <label>Resultado imposto do estado: {formatToUsCurrency(resultStateTax)}</label>
      </div>

      <div className='resultTax'>
        <label>Resultado da taxa: {formatToUsCurrency(resultTax)} </label>
      </div>
      <div className='resultIofBrl'>
        <label>Valor total IOF em reais: {formatToBRCurrency(currentQuote * resultIof)}</label>
      </div>
      <div className='resultIofUsd'>
        <label>Valor total Taxa em reais: {formatToBRCurrency(currentQuote * resultTax)}</label>
      </div>
      <div className='total'>
        <label>valor total: {formatToUsCurrency(total)}</label>
      </div>
      <div className='totalRs'>
        <label>valor total em reais: {formatToBRCurrency(total * currentQuote)}</label>
      </div>
    </div>
  );
};

export { Results };
