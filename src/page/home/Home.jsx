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

// import React, { useEffect, useState } from "react";
// import image from "../../assets/hero.png";
// import Card from "../../componet/Card";

// const data = [
//   {
//     title: "card1",
//     discription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
//     imageLink: image,
//   },
//   {
// title: "card2",
//     discription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
//     imageLink: image,
//   },
//   {
//     title: "card2",
//     discription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
//     imageLink: image,
//   },
//    {
//     title: "card2",
//     discription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
//     imageLink: image,
//   },
//    {
//     title: "card3",
//     discription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
//     imageLink: image,
//   }
// ];

// const Test=()=>{
//   const[state,setState]=useState(true)

//   const changeState=async()=>{
//     setState(!state)
//   }
//   useEffect(()=>{
// console.log("test initialie")
// return function(){
//   console.log("clearn up ")
// }
//   },[])

//   useEffect(()=>{

// console.log("test initialie updated")
//   },[state])
// return(
//   <div>
//     Test component
//     <button className="bg-red-600" onClick={changeState}>Update</button>
//   </div>
// )

// }

// function Home() {
// const [showtes, setShowtest]=useState(true)

//   return (
//     <div className="grid grid-cols-4 gap-10 ">

// {/* { data &&
//   data.map((el,index)=>{
//     return <Card data={el} key={index}/>
//   }) */}
// {
//   showtes &&
//     <Test/>
// }

// <button className="bg-blue-800 text-white" onClick={()=>setShowtest(!showtes)}>
// {
//   showtes?"Hide Test":"Show Test"
// }
//    </button>

//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";

function Home() {
  const [task, setTask] = useState("");
  const [data, setData] = useState();
  const [loading, setLaoding] = useState(true);
  const [editPop,setEditPop]=useState(false)
  const [editData,setEditdata]=useState(null)
  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=5")
      .then((res) => res.json())
      .then((res) => {
        setData(res.todos);
        setLaoding(false);
      });
  }, []);

  const handleSubmit = async () => {
    if (task.trim()) {
      try {
        const response = await fetch("https://dummyjson.com/todos/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            todo: task,
            completed: false,
            userId: 5,
          }),
        });

        setTask("")
      } catch (err) {
        console.log("erreor", err);
      }
    }
  };

const handleEdit=(payload)=>{

  const {id}=payload
fetch(`https://dummyjson.com/todos/${id}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    completed:true
  })
})
.then(res => res.json())
.then(console.log);
}






  if (loading) {
    return (
      <div>
        <div className="animate-spin">Loading</div>
      </div>
    );
  }
  return (
    <div className="bg-[#c9bead] flex justify-center items-center">
      <div>
        <p>Create Daily task</p>
        <div className="flex">
          <input
            type="search"
            name="task"
            value={task}
            id=""
            placeholder="write your task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="cursor-pointer flex items-center gap-2 py-1 px-2 bg-green-500" onClick={handleSubmit}>
            <CgAddR/>
            Add Task{" "}
          </button>
        </div>

        {data && !loading && data.length > 0 ? (
          data.map((el, index) => {
            return (
              <div className="flex gap-10 m-5">
                <li
                  className={`${el.completed ? "line-through" : ""} list-none`}
                  key={index}
                >
                  {el.todo}
                </li>
                <div className="flex gap-2 ">
                  <button className="flex bg-blue-400 items-center px-2 py-1 rounded-lg gap-2"
                  onClick={()=>setEditPop(true)}
                  >
                    <FaRegEdit />
                    Edit
                  </button>
                  <button className="flex bg-red-500 items-center px-2 py-1 rounded-lg">
                    <MdDeleteOutline />
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div>No task added yet</div>
        )}
      </div>
  {
    editPop && <div className="fixed top-[60px] h-72 bg-blue-400/80 w-screen flex justify-center items-center ">
      <div>
<input type="text"  />
      </div>
      </div>
  }
    </div>
  );
}

export default Home;
