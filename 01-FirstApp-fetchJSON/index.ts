import axios from "axios";

// API url address to fetch data
const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  console.log(response.data);
});
