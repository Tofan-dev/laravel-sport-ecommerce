import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductEditInfo } from "../../../actions/productActions";
import CategoriesShowcase from "../components/CategoriesShowcase";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    max-height: 60vh;
    object-fit: scale-down;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priceWithDiscount, setPriceWithDiscount] = useState("");
    const [image, setImage] = useState();

    const productShow = useSelector((state) => state.productShow);
    const {
        product,
        loading: loadingProducts,
        error: errorProducts,
    } = productShow;

    useEffect(() => {
        if (Object.keys(product).length === 0) {
            dispatch(getProductEditInfo(id));
        } else {
            setName(product.name);
            setDescription(product.description);
            setPriceWithDiscount(product.priceWithDiscount);
            setImage(product.image);
        }
    }, [dispatch, product]);

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src={`http://127.0.0.1:8000/storage/${image}`} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{name}</Title>
                    <Desc>{description}</Desc>
                    <Price>{priceWithDiscount} LEI</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <CategoriesShowcase />
        </Container>
    );
};

export default Product;
