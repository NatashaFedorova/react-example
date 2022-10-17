import { StickerList } from '../StickerList/StickerList';
import stickers from '../../../../../stickers.json';

export const StickersBlockSecond = () => {
  return (
    <div>
      <h1>Example 2</h1>
      <StickerList stickers={stickers} />
    </div>
  );
};
