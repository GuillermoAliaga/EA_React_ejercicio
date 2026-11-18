import { useStore } from '@nanostores/react';
import type { Book } from '../models/book.model';
import {
  $favourites,
  toggleFavourite,
} from '../stores/favourites';

interface FavouriteButtonProps {
  book: Book;
}

export function FavouriteButton({ book }: FavouriteButtonProps) {
  const favourites = useStore($favourites);
  const isFavourite = Boolean(favourites[book._id]);

  return (
    <button
      type="button"
      className={isFavourite ? 'favourite active' : 'favourite'}
      onClick={() => toggleFavourite(book)}
      aria-label={
        isFavourite
          ? 'Quitar de favoritos'
          : 'Añadir a favoritos'
      }
    >
      {isFavourite ? '❤️' : '🤍'}
    </button>
  );
}