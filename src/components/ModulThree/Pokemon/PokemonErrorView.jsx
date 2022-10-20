import errorImg from './errorImg.jpg';

export default function PokermonErrorView({ message }) {
  return (
    <div>
      <p>{message}</p>
      <img src={errorImg} width="240" alt="cat" />
    </div>
  );
}
