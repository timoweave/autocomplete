async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getTextList(searchText, delay = 30) {
  // mocked api
  await sleep(delay);

  // mocked data
  const textList = [
    "value 10",
    "value 11",
    "value 12",
    "value 13",
    "value 14",
    "value 15",
    "value 20",
    "value 21",
    "value 22",
    "value 23",
    "value 24",
    "value 25",
    "alpha 10",
    "alpha 11",
    "alpha 12",
    "alpha 13",
    "alpha 14",
    "alpha 15",
    "beta 20",
    "beta 21",
    "beta 22",
    "beta 23",
    "beta 24",
    "beta 25",
    "hello 30",
    "hello 31",
    "hello 32",
    "hello 33",
    "hello 34",
    "hello 35",
  ];

  if (searchText == null || searchText === "") {
    return [];
  }
  const output = textList.filter((text) => text.match(searchText)).sort();
  return output;
}

function removeChildElements(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function addChildElements(parentElement, childElements) {
  childElements.forEach((element) => parentElement.appendChild(element));
}

function makeLiElement(text) {
  const element = document.createElement("li");
  element.innerHTML = text;
  return element;
}

export function setupAutocomplete(searchTextID, matchedTextID) {
  const input = document.querySelector(searchTextID);
  const output = document.querySelector(matchedTextID);

  const search = (event) => {
    getTextList(event.target.value).then((textList) => {
      const macthedElementList = textList.map((t) => makeLiElement(t));
      removeChildElements(output);
      addChildElements(output, macthedElementList);
    });
  };

  input.addEventListener("keyup", search);
}
