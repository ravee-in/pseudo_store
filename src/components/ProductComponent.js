import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {


        const { id, title, image, price, category, description } = product;

        return (
            <div className="col-md-3 col-6" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card mb-3">
                        <div className="cardHeader">
                            <img src={image} className="card-img-top" alt="..." width="100%" />
                        </div>
                        <div className="card-body productInfo">
                            <span className='pCategory'>
                                {category}
                            </span>
                            <span className='pPrice'>
                                ${price}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (<>{renderList}</>);
}

export default ProductComponent