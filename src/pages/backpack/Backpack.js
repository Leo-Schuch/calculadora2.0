import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import './Backpack.css'
import '../../dao/firebase-config'
import { formatToBRCurrency, formatToUsCurrency } from '../../utils/currency'



const BASE_URL = 'https://marketdata.tradermade.com/api/v1/convert?api_key=0SIBO8_fjWJkSyJ0Z_6E&from=USD&to=BRL&amount=1'

const db = getFirestore()
const backpackCollectionRf = collection(db, "backpack")

function Backpack() {
  const [backPack, setBackPack] = useState([])
  const [total, setTotal] = useState(0)
  const [currentQuote, setCurrentQuote] = useState('')
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => setCurrentQuote(data.quote))


  useEffect(() => {
    const getBackpack = async () => {
      let sum = 0


      const data = await getDocs(backpackCollectionRf)
      const array = data.docs.map((doc) => {
        sum += doc.data().total
        setTotal(sum)

        return ({ ...doc.data(), id: doc.id })
      })
      setBackPack(array);
    };
    getBackpack()

  }, [])

  return (
    <>
      <div
        className='new'
      >
        <h1
          className='Backpack text-white text-center'
        >
          Valor total {formatToUsCurrency(total)}
        </h1>
        <h1
          className='Backpack text-white text-center'
        >
          Valor convertido  {formatToBRCurrency((total * currentQuote).toFixed(2))}</h1>
      </div>
      <p
        id="counter"
      >

      </p>

      {
        backPack.map(backPack => {
          return (
            <div
              className='flex-container2'
            >
              <p
                className='item1'
              >
                Nome do item: {backPack.name}</p>
              <p
                className='item2'
              >
                Site do produto: {backPack.site}</p>
              <p
                className='item1'
              >
                Tipo de pagamento: {backPack.paymentType}</p>
              <p
                className='item1'
              >
                Valor do produto: {formatToUsCurrency(backPack.amount)}</p>
              <p
                className='item1'
              >
                Valor Total do produto : {formatToUsCurrency(backPack.total)}</p>
              <p
                className='item1'
              >
                Tipo de taxa: {backPack.taxType}</p>
              <p
                className='item1'
              >
                Estado selecionado: {backPack.stateTax}</p>
              <p
                className='item1'
              >
                Valor em reais: {formatToBRCurrency(((backPack.total) * currentQuote).toFixed(2))}</p>

            </div>
          )
        })
      }

    </>
  )

}

export default Backpack