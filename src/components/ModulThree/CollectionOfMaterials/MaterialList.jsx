import { nanoid } from 'nanoid';
import Material from './Material';

const MaterialList = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={nanoid()}>
          <Material item={item} {...otherProps} />
        </li>
      ))}
    </ul>
  );
};

export default MaterialList;

// ================================================
// приклад з тавтологією
// const MaterialList = ({ items, onDelete, onUpdate }) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={nanoid()}>
//           <Material item={item} onDelete={onDelete} onUpdate={onUpdate} />
//         </li>
//       ))}
//     </ul>
//   );
// };
// щоб це вирішити (приклад нижче)--------------------------------------
// const MaterialList = ({ items, ...otherProps }) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={nanoid()}>
//           <Material item={item} {...otherProps} />
//         </li>
//       ))}
//     </ul>
//   );
// };
// ========================================================
