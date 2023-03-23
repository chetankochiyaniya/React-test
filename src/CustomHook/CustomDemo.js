import useFetch from "./useFetch"

const CustomDemo =()=>{
    //useFetch is custom hook that we create 
    const data = useFetch("https://jsonplaceholder.typicode.com/comments")
    
    return <h1>{data && data[0].email}</h1>
}
export default CustomDemo;