'use strict';
import Map from './map.class.js';
import Panel from './panel.class.js';
import DataManager from './data-manager.class.js';
export default class Controller {
  constructor(map) {
    this.tempNPO = null;
    this.allNPOs = null;
    this.panel = new Panel();
    this.dataManager = new DataManager();
    this.map = new Map(map, this);
    this.initialLoad(this);
  }
  initialLoad(controller){
    controller.dataManager.getAllData(controller);
  }
  loadDefault(controller){
    controller.panel.creatPanel('all', controller);
  }
  geocoderResults(e, controller){
    let tempAddr = e.result.place_name.split(",");
    tempAddr = tempAddr[0];
    tempAddr = tempAddr.split(" ");
    let newTempAddr = '';
    let size = tempAddr.length;
    tempAddr.forEach(function(item, index) {
      newTempAddr += item;
      ((index < size) && (index + 1) !== size) ? newTempAddr += '+': 0;
    });
    // console.log(newTempAddr);
    let url = "https://gis.detroitmi.gov/arcgis/rest/services/DoIT/CompositeGeocoder/GeocodeServer/findAddressCandidates?Street=&City=&ZIP=&SingleLine=" + newTempAddr + "&category=&outFields=User_fld&maxLocations=&outSR=4326&searchExtent=&location=&distance=&magicKey=&f=json";
    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      // console.log(data);
      if(data.candidates.length){
        if(data.candidates[0].attributes.User_fld != ""){
          // console.log('parcel found');
          controller.dataManager.buildData(data.candidates[0], controller);
          // controller.panel.creatPanel("parcel", data.candidates[0].attributes.User_fld, controller);
        }else{
          // console.log("no parcel found");
        }
      }else{
        // console.log("no parcel found");
      }
    });
  }
  closeAlert(ev){
    (ev.target.parentNode.parentNode.id === 'alert-overlay') ? document.getElementById('alert-overlay').className = '': document.getElementById('drill-down-overlay').className = '';
  }
}
