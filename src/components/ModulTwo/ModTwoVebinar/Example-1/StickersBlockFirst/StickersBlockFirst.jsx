import { StickerList } from '../StickerList/StickerList';
import stickers from '../../../../../stickers.json';

export const StickersBlockFirst = () => {
  return (
    <div>
      <h1>Example 1</h1>
      <StickerList stickers={stickers} />
    </div>
  );
};
