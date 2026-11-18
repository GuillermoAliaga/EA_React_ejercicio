import { useStore } from '@nanostores/react';
import { $favouritesList } from '../stores/favourites';
import { FavouriteButton } from './FavouriteButton';

export function FavouritesList() {
  const favouriteBooks = useStore($favouritesList);

  return (
    <section>
      <h1>Mis favoritos</h1>

      {favouriteBooks.length === 0 ? (
        <p className="muted">
          Todavía no tienes libros favoritos.
        </p>
      ) : (
        <div className="cards">
          {favouriteBooks.map((book) => (
            <article key={book._id} className="card">
              <img
                className="card-cover"
                src={`https://picsum.photos/seed/${book._id}/400/240`}
                alt={`Portada de ${book.title}`}
              />

              <div className="card-body">
                <h3>{book.title}</h3>

                <FavouriteButton book={book} />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}