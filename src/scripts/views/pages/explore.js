import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
      <resto-list></resto-list>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const restos = await RestaurantSource.getResto();
    const restaurantsContainer = document.querySelector('#resto-list');
    restos.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Explore;
