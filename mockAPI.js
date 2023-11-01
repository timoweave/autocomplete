export async function fetchTextList(searchText) {
  const delay = 10;
  await sleep(delay); // mocked api request
  const data = getTextList(searchText); // mocked server data
  await sleep(delay); // mocked api response
  return data;
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getTextList(searchText) {
  const textList = [
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
    "charlie 40",
    "charlie 41",
    "charlie 42",
    "charlie 43",
    "charlie 44",
    "charlie 45",
    "delta 80",
    "delta 81",
    "delta 82",
    "delta 83",
    "delta 84",
    "delta 85",
    "echo 50",
    "echo 51",
    "echo 52",
    "echo 53",
    "echo 54",
    "echo 55",
    "foxtrot 60",
    "foxtrot 61",
    "foxtrot 62",
    "foxtrot 63",
    "foxtrot 64",
    "foxtrot 65",
    "golf 30",
    "golf 31",
    "golf 32",
    "golf 33",
    "golf 34",
    "golf 35",
    "hotel 30",
    "hotel 31",
    "hotel 32",
    "hotel 33",
    "hotel 34",
    "hotel 35",
    "value 10",
    "value 11",
    "value 12",
    "value 13",
    "value 14",
    "value 15",
    "zulu 20",
    "zulu 21",
    "zulu 22",
    "zulu 23",
    "zulu 24",
    "zulu 25",
  ];

  if (searchText == null || searchText === "") {
    return [];
  }
  const output = textList.filter((text) => text.match(searchText)).sort();
  return output;
}
