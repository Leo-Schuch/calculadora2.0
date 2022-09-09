import { useEffect, useState } from "react";
import { getAllDocumentsAt } from "../dao/dao-service";

const Product = ({ handleSelectChange }) => {
    const [products, setProducts] = useState([0]);
    
    const getProducts = async () => {
        const products = await getAllDocumentsAt('produtos');
        setProducts(products);
    };

    const onSelectChange = (event) => handleSelectChange(Number(event.target.value));

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <label className="products">Produtos</label>
            
            <select id="products" onChange={onSelectChange} >
                {products.map((product) => {
                    return (
                        <option key={product.id} id={product.id} value={product.value}>{product.name}</option>
                    )
                })}
            </select>
        </>

    );
};

export { Product };
