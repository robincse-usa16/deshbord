import { useEffect } from "react";
import axios from "axios";

function Extra() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => console.log(response.data));
  }, []);
  return (
    <div className="Axios">
      <h1>Try something Different</h1>
    </div>
  );
}

export default Extra;
