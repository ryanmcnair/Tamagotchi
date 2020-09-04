import dataStuff from '../data/data';
import button from './buttonActions';

const createCard = () => {
  dataStuff.healthArray.forEach((item) => {
    $(`#${item.id}`).html(`
    <div id="main-div">
      <div>
       <h1>${item.title}</h1>
      </div>
      <div>
       <h2 id="score">${item.health}</h2>
      </div>
    <div class="button-group">
     <div>${item.pointsOne}</div>
     <button id="buttonOne">${item.buttonOne}</button>
     <button id="buttonTwo">${item.buttonTwo}</button>
     <div>${item.pointsTwo}</div>
    </div>
    <div>
    </div>
  </div>`);
  });
  button.buttonClick();
};

export default { createCard };
