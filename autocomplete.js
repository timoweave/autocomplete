export function createAutocompleteComponent(props) {
  const [searchID, resultID, ID] = getAutocompleteIDs(props);
  setTimeout(() => setupAutocomplete(props), 100);

  const html = `
    <div id="${ID}">
      <input type="text" id="${searchID}"/>
      <ol id="${resultID}"></ol>
    </div>
  `;
  return html;
}

function getAutocompleteIDs(props) {
  const { ID, searchID, resultID } = props;
  const [search_id, result_id, id] = [
    `autocomplete_${ID}_${searchID}`,
    `autocomplete_${ID}_${resultID}`,
    `autocomplete_${ID}`,
  ];
  return [search_id, result_id, id];
}

function removeChildElements(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function addChildElements(props) {
  const { parent, childs } = props;
  childs.forEach((child) => parent.appendChild(child));
}

function makeChildElement(text) {
  const element = document.createElement("li");
  element.innerHTML = text;
  return element;
}

function setupAutocomplete(props) {
  const [searchID, resultID] = getAutocompleteIDs(props);
  const input = document.getElementById(searchID);
  const result = document.getElementById(resultID);

  const search = (event) => {
    props.fetch(event.target.value).then((textList) => {
      const elements = textList.map((t) => makeChildElement(t));
      removeChildElements(result);
      addChildElements({ parent: result, childs: elements });
    });
  };

  console.log({ input, result, searchID, resultID });
  input.addEventListener("keyup", search);
}
