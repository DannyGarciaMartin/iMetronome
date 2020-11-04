import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // lodash now imported by this script - line 1
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
