import styled from "styled-components";
import CategoryItemShowcase from "./CategoryItemShowcase";
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
    flex-wrap: wrap;
    flex: 1 0 5%;
    margin: 5px;
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
            <CategoriesContainer>
                {categoriesArray.map((item) => (
                    <CategoryItemShowcase item={item} key={item.id} />
                ))}
            </CategoriesContainer>
        </Container>
    );
};

export default Categories;
