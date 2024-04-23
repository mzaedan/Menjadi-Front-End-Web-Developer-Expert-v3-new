const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
});


Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(3);

  I.seeElement('#resto-title a');
  const firstRestaurant = locate('#resto-title a').first();
  const firstRestaurantTitle = (await I.grabTextFrom(firstRestaurant)).trim();
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-item');

  const likedRestaurantTitle = (await I.grabTextFrom('#resto-title')).trim();

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('#resto-item');

  I.amOnPage('/');

  I.wait(3);

  I.seeElement('#resto-title a');
  const firstRestaurant = locate('#resto-title a').first();
  const firstRestaurantTitle = (await I.grabTextFrom(firstRestaurant)).trim();
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-item');

  const likedRestaurantTitle = (await I.grabTextFrom('#resto-title')).trim();

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('#resto-item');
});
