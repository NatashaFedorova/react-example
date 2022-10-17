import './ModulTwo/ModuLTwoRepeta/Dropdown/Dropdown.css';
import Counter from './ModulTwo/ModuLTwoRepeta/Counter';
import { Dropdown } from './ModulTwo/ModuLTwoRepeta/Dropdown';
import { ColorPicker } from './ModulTwo/ModuLTwoRepeta/ColorPicker';
import { TodoListBlock } from './ModulTwo/ModuLTwoRepeta/TodoListBlock';
import { LoginForm } from './ModuLTwoRepeta/LoginFirm/LoginForm';
import { ProductReviewForm } from './ModulTwo/ModuLTwoRepeta/ProductReviewForm/ProductReviewForm';
import Options from '../colorPickerOptions.json';

import { StickersBlockFirst } from './ModulTwo/ModTwoVebinar/Example-1/StickersBlockFirst/StickersBlockFirst';
import { StickersBlockSecond } from './ModulTwo/ModTwoVebinar/Example-2/StickersBlockSecond/StickersBlockSecond';
import { StickersBlockThird } from './ModulTwo/ModTwoVebinar/Example-3/StickersBlockThird/StickersBlockThird';

export const App = () => {
  return (
    <div>
      <p>Modul 2</p>
      {/* ==================Модуль 2 запис======================== */}
      <Counter initualValue={1} />
      <Dropdown />
      <ColorPicker options={Options} />
      <TodoListBlock />
      <LoginForm />
      <ProductReviewForm />

      {/* ================Модуль 2 вебінар=========================*/}
      <StickersBlockFirst />
      <StickersBlockSecond />
      <StickersBlockThird />
    </div>
  );
};
