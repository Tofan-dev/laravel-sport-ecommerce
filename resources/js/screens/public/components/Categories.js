import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { getCategoriesList } from "../../../actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
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
            {categoriesArray.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Categories;
