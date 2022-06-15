import React, { useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from '../redux/actions/carActions';
import CarComponent from "./CarComponent";

const CarListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("http://cdn.sixt.io/codingtask/offers.json").catch((err) => {
            console.log("Err", err)
        })
        dispatch(setProducts(response.data.offers));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products ", products)
    return (
        <div className="ui grid container">
            <CarComponent />
        </div>
    );
};

export default CarListing;