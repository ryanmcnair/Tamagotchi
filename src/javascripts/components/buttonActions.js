import dataJunk from '../data/data';

const buttonFunctions = () => {
  dataJunk.healthArray.forEach((item) => {
    const findId = dataJunk.healthArray.indexOf(item);
    const arrayContent = dataJunk.healthArray[findId];

    $(`#${item.id}buttonOne`).on('click', () => {
      if (arrayContent.health < 100) {
        arrayContent.health += arrayContent.pointsOne;
      } else if (arrayContent.health >= 100) {
        arrayContent.health = 100;
      }
      $(`#total${item.id}`).html(`${item.health}`);
    });

    $(`#${item.id}buttonTwo`).on('click', () => {
      if (arrayContent.health < 100) {
        arrayContent.health -= arrayContent.pointsTwo;
      } else if (arrayContent.health <= 0) {
        arrayContent.health = 0;
      }
      $(`#total${item.id}`).html(`${item.health}`);
    });
  });
};

export default { buttonFunctions };
