import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../main";

// function Login() {
//   const [username, setUsername] = useState(null);
//   const [passowrd, setPassword] = useState(null);

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleUsername = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleSubmit = () => {
//     const data = {
//       username: username,
//       passowrd: passowrd,
//     };
// console.log(data)
//     alert(`username:${data.username}`);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           Login
//         </h2>

//         <form>
//           <div className="space-y-5">
//             <div className="flex flex-col">
//               <label
//                 htmlFor="username"
//                 className="text-sm font-medium text-gray-700 mb-1"
//               >
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 placeholder="Enter your username"
//                 onChange={(e) => {
//                   handleUsername(e);
//                 }}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label
//                 htmlFor="password"
//                 className="text-sm font-medium text-gray-700 mb-1"
//               >
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 placeholder="Enter your password"
//                 onChange={(e) => handlePassword(e)}
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//               onClick={handleSubmit}
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;




function login() {
  const [logindata, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Replace only the changed value using object spread
    setLoginData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("this is login data",logindata)
  }
  console.log("this is outside log")



// useEffect(()=>{
// console.log("This inside useeffect")
// },[handleSubmit])





  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form>
          <div className="space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter your username"
                name="username"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter your password"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <button
             
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              onClick={(e)=>handleSubmit(e)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login
