function constructArry(elements) {
  let constructedArry = [];
  if (Object.prototype.toString.call(elements) == '[object Array]') {
    for (let el of elements) {
      if(typeof el === 'object') {
        constructedArry.push(el);
      } else {
        let simpleEl = {
          value: el,
          label: el,
        }
        constructedArry.push(simpleEl);
      }
    }
  } else {
    for (let [key, value] of Object.entries(elements)) {
      let objEl = {
        value: key,
        label: value,
      }
      constructedArry.push(objEl);
    }
    
  }
  return constructedArry;
};

function createSelect(values, selected) {
  let form = document.createElement("form");
  let formElement = document.createElement("select");
  for (let element of constructArry(values)) {
    let optionElement = document.createElement("option");
    optionElement.value = element['value'];
    optionElement.text = element['label'];
    formElement.appendChild(optionElement);
    if(element['value'] === selected) {
      optionElement.selected = true;
    }
  }
  form.appendChild(formElement);
  document.body.appendChild(form);
}
