import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { getCategoriesList } from "../../../actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { mobile } from "../responsive";

const Container = styled.div`
    background-color: white;
`;

const CategoriesContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    margin: 0px 300px;
`;

const Title = styled.h1`
    font-size: 30px;
    padding-top: 10vh;
    display: block;
    text-align: center;
`;

const Categories = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector((state) => state.categoryList);
    const { categories, loading, error } = categoryList;

    useEffect(() => {
        dispatch(getCategoriesList());
    }, [dispatch]);

    const categoriesArray = Object.values(categories);

    return (
        <Container>
            <Title>Categorii</Title>
            <CategoriesContainer>
                {categoriesArray.map((item) => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </CategoriesContainer>
        </Container>
    );
};

export default Categories;
