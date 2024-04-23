import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant';
import { itsActsAsFavoriteRestaurantModel } from './contracts/FavoriteRestaurantContract';

describe('FavoriteRestaurant Idb contract test implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itsActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
