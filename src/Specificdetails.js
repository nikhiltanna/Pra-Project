import { useEffect, useState } from "react";
const Specificdetails=()=>
{
    const [details, setDetails] = useState([]);
    const [count, setCount] = useState(0);

  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails() {
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    setDetails(json);
    
  };
  

    return (
    <>
    {console.log(details)};
    <img src={details[count]?.avatar_url}></img>
         <h1>{details[count]?.login}</h1>
         <h1>{count}</h1>
         <button onClick={()=>setCount(count-1)}>Precious Person</button>
         <button onClick={()=>setCount(count+1)}>Next Person</button>
         
    </>
    )

}
export default Specificdetails;