import styled from "styled-components";
import Products from "../components/Products";
import CategoriesShowcase from "../components/CategoriesShowcase";

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
    return (
        <> 
            <CategoriesShowcase />
            <Container>
                <Title>Produse</Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filtrează produse:</FilterText>
                        <Select>
                            <Option value="" disabled>
                                Culoare
                            </Option>
                            <Option>Alb</Option>
                            <Option>Negru</Option>
                            <Option>Roșu</Option>
                            <Option>Albastru</Option>
                            <Option>Galben</Option>
                            <Option>Verde</Option>
                        </Select>
                        <Select>
                            <Option value="" disabled>
                                Mărime
                            </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sortează:</FilterText>
                        <Select>
                            <Option value="">Noi</Option>
                            <Option>Preț (asc)</Option>
                            <Option>Preț (desc)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <Products />
            </Container>
        </>
    );
};

export default ProductList;
