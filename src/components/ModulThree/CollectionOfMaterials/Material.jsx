import { Component } from 'react';

const EditMaterialModal = ({ closeModal, onEdit }) => {
  return (
    <div style={{ border: '1px solid red', padding: 8, margin: 10, width: 200 }}>
      <p>Приклад зміни даних за допомогою модалки</p>
      <button
        type="button"
        onClick={() => {
          onEdit();
          closeModal();
        }}
      >
        Змінюємо данні
      </button>
      <button type="button" onClick={closeModal}>
        Х
      </button>
    </div>
  );
};
class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });
  render() {
    const {
      onDelete,
      onUpdate,
      item: { title, link, id },
    } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <p>
          <b>Title:</b> {title}
        </p>
        <p>
          <b>Link:</b> {link}
        </p>
        {/* <button type="button" onClick={() => onUpdate({ id, title: Date.now() })}>
        Оновити данні
      </button> */}
        <button type="button" onClick={this.openModal}>
          Відкрити модалку для оновлення даних
        </button>
        <button type="button" onClick={() => onDelete(id)}>
          Видалити
        </button>
        {isModalOpen && (
          <EditMaterialModal
            closeModal={this.closeModal}
            onEdit={() => onUpdate({ id, title: Date.now() })}
          />
        )}
        <hr />
      </div>
    );
  }
}

export default Material;

//  модалку треба рендерити через потрал, прикладв цьому файлі вже є
