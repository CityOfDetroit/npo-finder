'use strict';
import Geocoder from './geocoder.class';
import Panel from './panel.class';
import DataManager from './data-manager.class';
export default class Controller {
  constructor() {
    this.tempNPO = null;
    this.allNPOs = null;
    this.panel = new Panel();
    this.dataManager = new DataManager();
    this.geocoder = new Geocoder('geocoder', this);
    this.initialLoad(this);
  }
  initialLoad(controller){
    controller.dataManager.getAllData(controller);
  }
  loadDefault(controller){
    controller.panel.creatPanel('all', controller);
  }
  closeAlert(ev){
    (ev.target.parentNode.parentNode.id === 'alert-overlay') ? document.getElementById('alert-overlay').className = '': document.getElementById('drill-down-overlay').className = '';
  }
}
