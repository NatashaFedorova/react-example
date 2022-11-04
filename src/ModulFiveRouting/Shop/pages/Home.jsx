import styled from 'styled-components';

const Gradient = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(to right, #000000, #eb5757);
`;

const Title = styled.h1`
  text-align: center;
`;

const Home = () => {
  return (
    <main>
      <Gradient></Gradient>
      <Title>Welcome to the test shop</Title>
    </main>
  );
};

export default Home;
