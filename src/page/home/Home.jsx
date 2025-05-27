// // hooks

// import { useEffect, useState } from "react";

// function Home() {
//  const [data, setData] = useState(0);
//  const [name, setName] = useState("");

//  useEffect(()=>{

//  },[])

// //  it is mustly used as variable
// // if we dont handle states properly
// // Infinity loop

// const increase=()=>{
// setData(data+1)
// }

// const setUserName=(e)=>{
//   console.log(e.target.value)

//   setName(e.target.value)

// }

//   return (
//     <div className="text-center mt-5">
//     {
//       data
//     }
//     <button className="bg-blue-600  cursor-pointer" onClick={()=>increase()}>
//       increase
//     </button>

//     <input onChange={(e)=>setUserName(e) } placeholder="write your Name"/>
//     my name is :{name}
//     </div>
//   );
// }

// export default Home;

import React from "react";
import image from "../../assets/hero.png";
import Card from "../../componet/Card";

const data = [
  {
    title: "card1",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
    imageLink: image,
  },
  {
title: "card2",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
    imageLink: image,
  },
  {
    title: "card2",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
    imageLink: image,
  },
   {
    title: "card2",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
    imageLink: image,
  },
   {
    title: "card3",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
    imageLink: image,
  }
];



function Home() {


  return (
    <div className="grid grid-cols-4 gap-10 ">

{ data &&
  data.map((el,index)=>{
    return <Card data={el} key={index}/>
  })
}
      
    </div>
  );
}

export default Home;
