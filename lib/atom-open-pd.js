'use babel';

import AtomOpenPdView from './atom-open-pd-view';
import { CompositeDisposable } from 'atom';

export default {

  atomOpenPdView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomOpenPdView = new AtomOpenPdView(state.atomOpenPdViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomOpenPdView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-open-pd:toggle': () => this.toggle()
    }));

    let that = this;
    setTimeout(function(){
        // that.toggle();
        console.log(localStorage.getItem('d'));
    },2000);
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomOpenPdView.destroy();
  },

  serialize() {
    return {
      atomOpenPdViewState: this.atomOpenPdView.serialize()
    };
  },

  toggle() {
    localStorage.setItem('c','act');
    let that = this;
    pwd = this.modalPanel.element.children[0].children[1];
    pwd.onkeyup = function(event){
      if(event.keyCode == "13"){

           if(pwd.value === 'act'){
             that.modalPanel.hide();
           }
       }else{
         return;
       }
    };
    console.log('togged');
    return (
      // this.modalPanel.isVisible() ?
      // this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
