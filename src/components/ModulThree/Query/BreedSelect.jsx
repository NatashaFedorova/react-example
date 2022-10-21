import Select from 'react-select';

const BreedSelect = ({ breeds, isLoading, onSelect }) => {
  const options = breeds.map(breed => ({ value: breed.id, label: breed.name }));
  return (
    <Select options={options} isLoading={isLoading} onChange={options => onSelect(options.value)} />
  );
};

export default BreedSelect;
