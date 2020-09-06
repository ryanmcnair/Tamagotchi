import dataJunk from '../data/data';

const buttonOne = () => {
  dataJunk.healthArray.forEach((item) => {
    const buttonOneHealth = item;
    if (buttonOneHealth.health <= 100) {
      buttonOneHealth.health += buttonOneHealth.pointsOne;
    } else if (buttonOneHealth.health >= 100) {
      buttonOneHealth.health = 100;
    }
    return buttonOneHealth.health;
  });
};

const buttonTwo = () => {
  dataJunk.healthArray.forEach((item) => {
    const buttonTwoHealth = item;
    if (buttonTwoHealth.health <= 100) {
      buttonTwoHealth.health -= buttonTwoHealth.pointsTwo;
    } else if (buttonTwoHealth.health >= 0) {
      buttonTwoHealth.health = 0;
    }
    return buttonTwoHealth.health;
  });
};

const buttonClick = () => {
  dataJunk.healthArray.forEach((item) => {
    $(`#${item.id}buttonOne`).on('click', () => {
      $(`#total${item.id}`).html('');
      $(`#total${item.id}`).html(`<h2>${item.health}</h2>`);
    });
    $(`#${item.id}buttonTwo`).on('click', () => {
      $(`#total${item.id}`).html('');
      $(`#total${item.id}`).html(`<h2>${item.health}</h2>`);
    });
    buttonOne();
    buttonTwo();
  });
};

export default { buttonClick };
