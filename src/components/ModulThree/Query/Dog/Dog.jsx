const Dog = ({ dog }) => {
  console.log(dog);
  return (
    <div>
      <img src={dog.url} alt="dog" width="480" />
    </div>
  );
};

export default Dog;
