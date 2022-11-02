import { useId } from 'react';
// import { nanoid } from 'nanoid';

const Select = ({ options, label, id, value = '', ...restParams }) => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId} style={{ marginRight: '10px' }}>
        {label}
      </label>
      <select {...restParams} id={inputId} value={value}>
        <option value="">empty</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;

// =====================================================
// useId - не можна використовувати в якості key  для елементів колекції
