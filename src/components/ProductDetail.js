import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {

    const product = useSelector((state) => state.product);
    const { title, image, description, price, category } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => {
                console.log("Error:", err)
            });
        console.log(response.data);
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail();
            return () => {
                dispatch(removeSelectedProduct());
            };
        }
    }, [productId])

    return (
        <div className="ProductDetails">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title} | {category}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">$ {price}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail