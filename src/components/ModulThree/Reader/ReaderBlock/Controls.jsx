export const Controls = ({ currentIdx, totalItems, onChange }) => {
  return (
    <section>
      <button type="button" onClick={() => onChange(-1)} disabled={currentIdx === 1}>
        Назад
      </button>
      <button type="button" onClick={() => onChange(1)} disabled={currentIdx === totalItems}>
        Вперед
      </button>
    </section>
  );
};
