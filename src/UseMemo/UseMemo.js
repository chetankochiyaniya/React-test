import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function UseMemoDemo() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  /* o ensure that data is not null before calling findLongestName. 
  One way to do this is to use the optional chaining operator ?., like this: */
  const getLongestName = useMemo(() => data?.length && findLongestName(data), [data]);

  return (
    <div className="App">
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
