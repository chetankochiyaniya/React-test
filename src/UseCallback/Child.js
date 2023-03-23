import { useEffect } from "react";

const Child = ({returnText}) =>{
    useEffect(() => {
        console.log("Child Call");
      }, [returnText]);
    return <>{returnText(" Bhai use callbasck work kar raha he")}</>;
}
export default Child;