'use babel';

export default class AtomOpenPdView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('atom-open-pd');

    // Create message element
    const message = document.createElement('div');
    const inputPwd = document.createElement('input');
    message.classList.add('message');
    inputPwd.classList.add('inpPwd');
    inputPwd.setAttribute('id','aa');
    message.textContent = "Contact your admin!"
    inputPwd.setAttribute('type','password');
    inputPwd.focus();

    this.element.appendChild(message);
    this.element.appendChild(inputPwd);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
