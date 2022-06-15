import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "./Responsive";

const Container = styled.div`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #3454d1;
  color: white;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })};
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: gold;
  color: white;
`;


const Newsletter = () => {
    return (
        <Container>
          <Title>Newsletter</Title>
          <Desc>Primește notificări cu cele mai noi oferte.</Desc>
          <InputContainer>
            <Input placeholder="Your email" />
            <Button>
              <Send />
            </Button>
          </InputContainer>
        </Container>
      );
}

export default Newsletter