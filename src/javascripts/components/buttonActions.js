import dataJunk from '../data/data';

const buttonOneMax = () => {
  if (dataJunk.healthArray.health < 100) {
    dataJunk.healthArray.health += dataJunk.healthArray.pointsOne;
  }
  return dataJunk.healthArray.health;
};

const buttonClick = () => {
  $('#buttonOne').on('click', () => {
    $('#score').html('');
    $('#score').html(`<h2>buttonone${buttonOneMax()}</h2>`);
  });
  $('#buttonTwo').on('click', () => {
    $('#score').html('');
    $('#score').html(`<h2>buttontwo${buttonOneMax()}</h2>`);
  });
};

console.log(buttonClick);

export default { buttonClick };
