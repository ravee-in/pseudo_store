import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions'

const ProductList = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();    

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
                console.log("Error", err)
            });
            dispatch(setProducts(response.data));

    }

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log("Products:", products)


    return (
        <div className="storeWrap container my-5">
            <div className="row">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductList