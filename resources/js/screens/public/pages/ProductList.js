import styled from "styled-components";
import Products from "../components/Products";
import CategoriesShowcase from "../components/CategoriesShowcase";
import { getPalete } from "../../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Product from "../components/ProductItem";

const Container = styled.div``;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

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

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
    const dispatch = useDispatch();

    const paleteList = useSelector((state) => state.paleteList);
    const { palete, loading, error } = paleteList;

    useEffect(() => {
        dispatch(getPalete());
    }, [dispatch]);

    const paleteArray = Object.values(palete);

    return (
        <Container>
            <CategoriesShowcase/>
            <FilterContainer>
                <Filter>
                    <FilterText>Sortează:</FilterText>
                    <Select>
                        <Option value="">Noi</Option>
                        <Option>Preț (asc)</Option>
                        <Option>Preț (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <ProductContainer>
                {paleteArray.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </ProductContainer>
        </Container>
    );
};

export default ProductList;
