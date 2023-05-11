import { useEffect, useState } from "react";
import {Detailcard} from './Detailcard'
import {Link } from 'react-router-dom'

const Demo = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails() {
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    setDetails(json);
    
  };
  return (
    <div>
        <Link to='specific'>See Specific Details</Link>
        {details.map((detail)=>{
           // console.log(detail);
            return <Detailcard key={detail.id} name={detail.login} image={detail.avatar_url}/>;
        })}
    </div>
  );
};

export default Demo;
