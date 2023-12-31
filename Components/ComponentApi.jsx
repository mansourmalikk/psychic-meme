import axios from "axios";
import { useEffect, useState } from "react";
export function ComponentApi() {
  const [fact, setFact] = useState([]);
  let fetchData = async  () => {//
    axios.get("https://jsonplaceholder.typicode.com/posts");
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com");
      setFact(response);
      console.log(response);
    } catch (err) {
      console.log("Error:", err);
    }
  };
  // call fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1> API Call </h1>
      <div className="posts-container"> {/* Add a class for styling */}
  <h2>Fetched Posts:</h2>
  <ul>
    <li key={fact.id}>{fact.title}</li>
  </ul>
</div>
    </>
  );
}
