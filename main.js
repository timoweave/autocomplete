import "./style.css";
import { createAutocompleteComponent, fetchTextList } from "./autocomplete";

const app = document.querySelector("#app");
app.innerHTML = createAutocompleteComponent({
  ID: "autocomplete_1",
  searchID: "search_input",
  resultID: "search_result",
  fetch: fetchTextList,
});
