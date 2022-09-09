import { onSnapshot } from "firebase/firestore"
import { useEffect, useState } from 'react'
import { getQuery } from '../dao/dao-service'
import Product from "./Product"


function ProductManager() {


    const [products, setProducts] = useState([])

    /* function to get all tasks from firestore in realtime */
    useEffect(() => {
        const taskColRef = getQuery('produtos')
        console.log(taskColRef)
        onSnapshot(taskColRef, (snapshot) => {
            
            console.log(snapshot)
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
            
        })
    }, [])

    return (
        <div>
            <header>Task Manager</header>
            <div>
                {products.map((product) => (
                    <Product 
                        key={product.id}
                        id={product.id}
                        name={product.data.name}  //obs!!!
                        value={product.data.value} //obs!!!
                    />
                ))}

            </div>
        </div>
    )
}

export default ProductManager

