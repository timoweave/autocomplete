# autocomplete
1. mock api data
1. use vanilla js to make autocomplete (dom, no react)
1. user type in text, filter and sort data
1. list autocomplete list to the user

# coding
```js
import { createAutocompleteComponent } from "./autocomplete";
import { fetchTextList } from "./mockAPI";

const app = document.getElementById("app");
app.innerHTML = createAutocompleteComponent({
  ID: "1",
  searchID: "search",
  resultID: "result",
  fetch: fetchTextList,
});
```

# screenshot
![hello](./docs/hello.png)
![alph](./docs/alph.png)
![value](./docs/value.png)
![0](./docs/0.png)
