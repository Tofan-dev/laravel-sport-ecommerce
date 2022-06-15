import styled from "styled-components";
import { getProductsList } from "../../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Product from "./ProductItem";

const ProductContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 300px;
    flex-wrap: wrap;
    flex: 1 0 25%;
    margin: 5px;
`;

const Container = styled.div`
    background-color: white;
`;

const Title = styled.h1`
    font-size: 30px;
    padding-top: 10vh;
    display: block;
    text-align: center;
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
            <Title>Produse</Title>
            <ProductContainer>
                {productsArray.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </ProductContainer>
        </Container>
    );
};

export default Products;
