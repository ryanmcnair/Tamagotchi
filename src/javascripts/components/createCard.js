import dataStuff from '../data/data';

const createCard = () => {
  dataStuff.healthArray.forEach((item) => {
    $(`#${item.id}`).html(`
    <div id="main-div">
    <div>
    <h1>${item.title}</h1>
    </div>
    <div id="">
    <h2 id="total${item.id}">${item.health}</h2>
    </div>
    <div class="button-group">
     <div>${item.pointsOne}</div>
     <button id="${item.id}buttonOne">${item.buttonOne}</button>
     <button id="${item.id}buttonTwo">${item.buttonTwo}</button>
    <div>${item.pointsTwo}</div>
    </div>
    <div>
    </div>
    </div>`);
  });
};

export default { createCard };
