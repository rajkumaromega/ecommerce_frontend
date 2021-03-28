import React from 'react'
import {useState, useEffect} from "react"
import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios';
function HomeScreen(props) {

    const [products, setProduct] =  useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const { data } = await axios.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return () => {
            //
        }
    }, [])
    return (
        <div>
            HomeScreen
            <ul className="products">
                    {
                        products.map(product => 
                    <li>
                        <div className="product">
                            <Link to ={'/products/'+ product._id}>
                            <img className="product-image" src={product.image} alt="product" />
                            </Link>
                            
                            <div className="product-brand" >{product.name}</div>
                            <div className="product-brand">
                                <Link to={'/products/'+ product._id}>{product.name}</Link>
                            </div>
                            <div className="product-brand" >{product.price}</div>
                            <div className="product-rating">{product.rating} rating</div>
                        </div>
                    </li>) 
                    }    
                </ul>
        </div>
    )
}

export default HomeScreen

