import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { mobile } from "./Responsive";
import styled from "styled-components";
import logoDashboard from "../../../../images/logoDashboard.png";

const Container = styled.div`
    height: 70px;
    box-shadow: inset 0 0 3px #000000;
    ${mobile({ height: "60px" })};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "100%" })};
 `;

const Input = styled.input`
    border: none;
    width: 100%;
    font-size: 20px;
    padding-left: 20px;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Logo = styled.img`
    width: 250px;
    ${mobile({ width: "140px" })};
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search
                            style={{
                                border: "none",
                                color: "white",
                                height: "100%",
                                backgroundColor: "#3454d1",
                                width: "18%",
                                cursor: "pointer",
                            }}
                        />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <Logo src={logoDashboard}/>
                    </Link>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge
                            badgeContent={4}
                            color="primary"
                            overlap="rectangular"
                        >
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
