import thisTaco from './components/createCard';
import button from './components/buttonActions';

import '../styles/main.scss';

const init = () => {
  thisTaco.createCard();
  button.buttonFunctions();
};

init();
