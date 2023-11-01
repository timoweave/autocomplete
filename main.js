import "./style.css";
import { setupAutocomplete } from "./autocomplete";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Autocomplete!</h1>
    <div class="card">
      <input type="text" id="search_text"/>
      <ol id="matched_result"></ol>
    </div>
  </div>
`;

setupAutocomplete("#search_text", "#matched_result");
