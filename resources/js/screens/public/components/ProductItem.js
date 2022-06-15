import {
    ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components";

const Info = styled.div`
    margin-top: auto;
`;

const Container = styled.div`
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    flex-wrap: wrap;
    flex: 1 0 10%;
    margin: 5px;
    border: 1px solid black;
    padding-bottom: 30px;
`;

const Image = styled.img`
    max-width: 80%;
    max-height: 70%;
`;


const ProductItem = ({ item }) => {
    return (
        <Container>
            <Image src={`http://127.0.0.1:8000/storage/${item.image}`} />
            <Info>
                <h2> {item.name}</h2>
                <h5> {item.priceWithDiscount} LEI</h5>
                <br/>
                <Button variant="contained" endIcon={<ShoppingCartOutlined />}>
                    Adaugă în coș
                </Button>
            </Info>
        </Container>
    );
};

export default ProductItem;
