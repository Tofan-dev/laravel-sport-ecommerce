import styled from "styled-components";
import { getProductsList } from "../../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Product from "./ProductItem";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;

    useEffect(() => {
        dispatch(getProductsList());
    }, [dispatch]);

    const productsArray = Object.values(products);

    return (
        <Container>
            <Container>
                {productsArray.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
        </Container>
    );
};

export default Products;
