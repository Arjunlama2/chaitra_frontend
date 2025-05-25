// hooks

import { useEffect, useState } from "react";



function Home() {
 const [data, setData] = useState(0);
 const [name, setName] = useState("");
 useEffect(()=>{

 },[])


//  it is mustly used as variable
// if we dont handle states properly 
// Infinity loop

// const increase=()=>{
// setData(data+1)
// }

const setUserName=(e)=>{
  console.log(e.target.value)

  setName(e.target.value)

}


  return (
    <div className="text-center mt-5">
    {
      data
    }
    <button className="bg-blue-600  cursor-pointer" onClick={()=>increase()}>
      increase
    </button>


    <input onChange={(e)=>setUserName(e) } placeholder="write your Name"/>
    my name is :{name}
    </div>
  );
}



export default Home;
