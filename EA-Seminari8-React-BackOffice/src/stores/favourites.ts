import { persistentAtom } from '@nanostores/persistent';
import { computed } from 'nanostores';
import type { Book } from '../models/book.model';

export const $favourites = persistentAtom<Record<string, Book>>( //El persistentAtom basicamente sirve para guaradar, en este caso, los favoritos en local storage.
  'favourites',
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

export const $favouritesList = computed(
  $favourites,
  (favourites) => Object.values(favourites),
);

export const toggleFavourite = (book: Book) => {
  const current = $favourites.get();

  if (current[book._id]) {
    const { [book._id]: _removed, ...rest } = current;
    $favourites.set(rest);
  } else {
    $favourites.set({ ...current, [book._id]: book });
  }
};