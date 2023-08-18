import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://p4-px0f.onrender.com/test").then((response) => {
      setData(response.data);
    }, []);
  });

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
