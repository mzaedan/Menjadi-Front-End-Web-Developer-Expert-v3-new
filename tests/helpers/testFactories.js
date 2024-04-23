import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-btn-intiator';
import FavoriteRestaurantDB from '../../src/scripts/data/favorite-restaurant';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantDB,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonPresenterWithRestaurant };
