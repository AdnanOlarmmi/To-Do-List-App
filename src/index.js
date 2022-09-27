import _ from 'lodash';
import './styles.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hi', 'Microverse'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());