'use strict';
export default class DataManager {
  constructor() {
  }
  getAllData(controller){
    let npo = new Promise((resolve, reject) => {
      let url = `https://opengis.detroitmi.gov/opengis/rest/services/PublicSafety/NeighborhoodPoliceOfficers/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=`;
      return fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        resolve(data);
      });
    });

    Promise.all([npo]).then(values => {
      let cleanList = [];
      let names = [];
      values[0].features.forEach((npo, index) => {
        if(npo.attributes.police_officer != ' ' && npo.attributes.police_officer != null){
          if(index == 0){
            cleanList.push(npo);
            names.push(npo.attributes.police_officer);
          }else{
            if(!names.includes(npo.attributes.police_officer)){
              cleanList.push(npo);
              names.push(npo.attributes.police_officer);
            }
          }
        }
      });
      controller.allNPOs = cleanList;
      controller.panel.creatPanel('all', controller);
    }).catch(reason => {
      console.log(reason);
    });
  }
  buildData(location, controller){
    let dataObj = {title: location.address};
    let simplePolygon = null;
    // -------------------------------------------------------------------------
    // NOTE: Fetching all the data sets.
    // -------------------------------------------------------------------------

    let npo = new Promise((resolve, reject) => {
      let url =  `https://opengis.detroitmi.gov/opengis/rest/services/PublicSafety/NeighborhoodPoliceOfficers/FeatureServer/0/query?where=&objectIds=&time=&geometry=${location.location.x}%2C${location.location.y}&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=json`;
      return fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        resolve(data);
      });
    });

    Promise.all([npo]).then(values => {
      controller.tempNPO = values[0].features;
      controller.panel.creatPanel('single', controller);
    }).catch(reason => {
      console.log(reason);
    });
  }
}
