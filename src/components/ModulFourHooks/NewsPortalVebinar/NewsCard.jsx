import styled from 'styled-components';

const Btn = styled.a`
  display: flex;
  align-items: 'center';
  justify-content: center;
  padding: 10px;
  background-color: violet;
  color: white;
  width: 100px;
  text-decoration: none;
`;

const NewsCard = ({ url, title, description }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <Btn href={url}>Link</Btn>
    </li>
  );
};

export default NewsCard;
