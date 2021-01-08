import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import OrderLocation from "./OrderLocation";
import ProductsList from "./ProductsList";
import StepsHeaders from "./StepsHeaders";
import "./styles.css";
import { OrderLOcationData, Product } from "./types";

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLOcationData>(); 

    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data)).catch(error => console.log(error));
    }, []);

    return (
        <div className="orders-container">
            <StepsHeaders />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    );
}

export default Orders;