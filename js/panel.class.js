'use strict';
export default class Panel {
  constructor() {
  }

  creatPanel(type, controller){
    let markup = null;
    if(type == 'all'){
      markup = controller.panel.createMarkup(controller.allNPOs, controller);
      document.querySelector('#npo-results h2').innerText = "All NPOs";
    }else{
      markup = controller.panel.createMarkup(controller.tempNPO, controller);
      document.querySelector('#npo-results h2').innerText = "Your NPO";
    }
    document.querySelector('#npo-results .npo-content').innerHTML = markup;
    document.getElementById('npo-results').className = 'active';
  }
  createMarkup(data, controller){
    let tempHTML = `
    ${data.map(npo =>
      `<article class="info-section">
        <p><strong>Name:</strong> ${npo.attributes.NPO_Office}</p>
        <p><strong>Phone:</strong> ${npo.attributes.Phone}</p>
        <p><strong>Email:</strong> ${npo.attributes.Email}</p>
      </article>`
    ).join('')}
    `;
    return tempHTML;
  }
}
