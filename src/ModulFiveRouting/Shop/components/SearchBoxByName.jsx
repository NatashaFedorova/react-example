const SearchBoxByName = ({ value, onChange }) => {
  return (
    <input
      type="text"
      label="Search by name"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default SearchBoxByName;
