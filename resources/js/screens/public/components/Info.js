import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #3454d1;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Info = () => {
    return <Container>Transport gratuit pentru comenzile de peste 100 de lei!</Container>;
};

export default Info;
