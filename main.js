import "./style.css";
import { createAutocompleteComponent } from "./autocomplete";
import { fetchTextList } from "./mockAPI";

const app = document.getElementById("app");
app.innerHTML = createAutocompleteComponent({
  ID: "1",
  searchID: "search",
  resultID: "result",
  fetch: fetchTextList,
});