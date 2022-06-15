import styled from "styled-components";
import { mobile } from "./Responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 40vh;
    position: relative;
    flex-wrap: wrap;
    flex: 1 0 25%;
    margin: 5px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh" })};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={`http://127.0.0.1:8000/storage/${item.image}`} />
            <Info>
                <Title>{item.title}</Title>
                <Button>VEZI TOATE PRODUSELE</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
