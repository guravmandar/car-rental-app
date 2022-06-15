import React from 'react';
import { useSelector } from "react-redux";
import fallbackImage from '../images/fallbackImage.png'

const CarComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, carGroupInfo, prices } = product
        return (<div className="four wide column" key={id}>
            <div className={"ui link cards"}>
                <div className="card">
                    <div className="image">
                        <img src={carGroupInfo.modelExample.imageUrl} alt={fallbackImage} />
                    </div>
                    <div className="content">
                        <div className="header">{carGroupInfo.modelExample.name}</div>

                        <div className="header">{prices.totalPrice.amount.currency} {prices.totalPrice.amount.value}</div>
                    </div>
                </div>
            </div>
        </div>
        );
    })

    return (
        <>{renderList}</>
    );
};

export default CarComponent;