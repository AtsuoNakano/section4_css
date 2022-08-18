import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <Container>
        <Title>styled components</Title>
        <Button>fight!!</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid blue;
`;

const Title = styled.p`
  margin-right: 20px;
`;

const Button = styled.button`
  padding: 7px;
  font-size: 16px;
  background-color: khaki;
  border: none;
  &:hover {
    background-color: green;
  }
`;
