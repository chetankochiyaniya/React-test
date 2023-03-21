import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffect() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log("2nd useLayout effect",inputRef.current.value);
    console.log("LE")
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
    console.log("3rd useEffect")
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} defaultValue="Deault value" style={{ width: 400, height: 60 }} />
      {
        console.log(" 1st return")
      }
    </div>
  );
}

export default LayoutEffect;
