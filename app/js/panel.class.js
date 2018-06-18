'use strict';
export default class Panel {
  constructor() {
  }

  creatPanel(type, controller){
    let markup = controller.panel.createMarkup(type, controller);
    document.querySelector('#npo-results .npo-content').innerHTML = markup;
    document.getElementById('npo-results').className = 'active';
  }
  createMarkup(type, controller){
    console.log(type);
    console.log(controller);
    let tempHTML = '';
    // if(type == 'all'){
    //   tempHTML = `
    //   <article class="info-section">
    //     <p><strong>NAME:</strong> ${values[7].data.features[0].attributes.NPO_Office}</p>
    //     <p><strong>PHONE:</strong> ${values[7].data.features[0].attributes.Phone}</p>
    //     <p><strong>Email:</strong> ${values[7].data.features[0].attributes.Email}</p>
    //   </article>
    //   `;
    // }else{
    //   tempHTML = `
    //   <article class="info-section">
    //     <p><strong>NAME:</strong> ${values[7].data.features[0].attributes.NPO_Office}</p>
    //     <p><strong>PHONE:</strong> ${values[7].data.features[0].attributes.Phone}</p>
    //     <p><strong>Email:</strong> ${values[7].data.features[0].attributes.Email}</p>
    //   </article>
    //   `;
    // }
    return tempHTML;
  }
}
