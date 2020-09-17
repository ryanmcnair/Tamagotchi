import dataJunk from '../data/data';

const buttonFunctions = () => {
  dataJunk.healthArray.forEach((item) => {
    const findId = dataJunk.healthArray.indexOf(item);
    const arrayContent = dataJunk.healthArray[findId];

    $(`#${item.id}buttonOne`).on('click', () => {
      if (arrayContent.health + arrayContent.pointsOne > 100) {
        arrayContent.health += (100 - arrayContent.health);
      } else {
        arrayContent.health += arrayContent.pointsOne;
      }
      $(`#total${item.id}`).html(`${item.health}`);
    });

    $(`#${item.id}buttonTwo`).on('click', () => {
      if (arrayContent.health + arrayContent.pointsTwo > 100) {
        arrayContent.health += (100 - arrayContent.health);
      } else {
        arrayContent.health += arrayContent.pointsTwo;
      }
      $(`#total${item.id}`).html(`${item.health}`);
    });
  });
};

export default { buttonFunctions };
