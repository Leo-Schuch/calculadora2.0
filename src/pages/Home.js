import React, { useState } from 'react';
import '../../src/App.css';
import { OrderStatus } from '../components/OrderStatus';
import { PaymentType } from '../components/PaymentType';
import { Results } from '../components/Results';
import { Tax } from '../components/Tax';
import { setData } from '../dao/dao-service';
import './Products';




const BASE_URL = 'https://marketdata.tradermade.com/api/v1/convert?api_key=0SIBO8_fjWJkSyJ0Z_6E&from=USD&to=BRL&amount=1'



function Home() {
  //O useState nos permite criar estados em um componente criado a partir de uma função, assim como o state presente em componentes criados a partir de classes
  const [amount, setAmount] = useState(0)
  const [paymentType, setPaymentType] = useState('cash')
  const [taxType, setTaxType] = useState('declare')
  const [currentQuote, setCurrentQuote] = useState('')
  const [resultTax, setResultTax] = useState(0)
  const [canShowResult, setCanShowResult] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [stateTax, setStateTax] = useState('georgiaTax')
  const [resultStateTax, setResultStateTax] = useState(0)
  const [resultIof, setResultIof] = useState(0)
  const [total, setTotal] = useState(0)
  const [name, setName] = useState('')
  const [site, setSite] = useState('')



  const buttonClickHandler = async (event) => {
    event.preventDefault()
    await setData("backpack", {
      stateTax,
      total,
      amount,
      paymentType,
      taxType,
      resultTax,
      resultStateTax,
      resultIof,
      name,
      site
    }
    )
    alert("Item cadastrado com sucesso")
  };






  //useEffect para importar os valores da api

  function handleSubmit(event) {
    event.preventDefault();

    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setCurrentQuote(data.quote))

    setTotal(resultTax + resultIof + amount + resultStateTax)

    if (amount <= 500) {
      setCanShowResult(false)
      setErrorMessage('Valor abaixo de 500USD não é tributado')
      return
    }
    setCanShowResult(true)// if utilizado para prosseguir com os calculos se o valor for acima de 500 usd

    // taxa importação

    const taxTypes = {
      "declare": (amount) => (amount - 500) * (50 / 100),
      "tax-without-declare": (amount) => amount - 500,
      "no-tax-without-declare": () => 0
    };

    const paymentTypes = {
      "credit-card": (amount) => amount * 6.38 / 100,
      "cash": (amount) => amount * 1.1 / 100
    };

    // taxa estadual
    const taxStates = {
      "georgiaTax": (amount) => amount * (8 / 100),
      "texasTax": (amount) => amount * (8.25 / 100),
      "californiaTax": (amount) => amount * (10.5 / 100),
      "floridaTax": (amount) => amount * (7.5 / 100)
    };

    setResultTax(taxTypes[taxType]?.(amount));
    setResultIof(paymentTypes[paymentType]?.(amount));
    setStateTax(stateTax); // usa o stateTax para acessar o campo 
    setResultStateTax(taxStates[stateTax]?.(amount))

  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='flex-container'>
        <h1 className='text-white'>Travel Tools</h1>
        <div>


          <label>Nome do Produto:<input inputMode='numeric' className='input' value={name} onChange={(event) => {

            setName(event.target.value)
          }} /></label>
          <label>Site do produto:<input inputMode='numeric' className='input' value={site} onChange={(event) => {

            setSite(event.target.value)
          }} /></label>

          <label>Valor gasto em dolar:<input inputMode='numeric' className='input' value={amount} onChange={(event) => {

            setAmount(Number(event.target.value))
          }} /></label>
        </div>

        <OrderStatus
          stateTax={stateTax}
          setStateTax={setStateTax}
        ></OrderStatus>

        <PaymentType
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        ></PaymentType>

        <Tax
          taxType={taxType}
          setTaxType={setTaxType}
        ></Tax>

        <div >
          <button onClick={buttonClickHandler}>
            Cadastrar
          </button>
          <button type='submit'>
            Calcular
          </button>
        </div>
      </form>
      {!canShowResult && (<p>{errorMessage}</p>)}
      {canShowResult && (
        <Results
          currentQuote={currentQuote}
          resultStateTax={resultStateTax}
          resultTax={resultTax}
          total={total}
          resultIof={resultIof}
        ></Results>
      )}
    </div>
  );

}
export default Home;
