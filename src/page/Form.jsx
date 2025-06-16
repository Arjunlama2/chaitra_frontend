import React from 'react';
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // Watch input value by passing the name of it
//   console.log(watch("example"));

  return (
    // Load Tailwind CSS script from CDN for development/testing purposes
    // In a real project, you'd typically set up Tailwind via PostCSS
    <>
     
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter p-4 sm:p-6 lg:p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col space-y-5 border border-gray-200"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-4">
            User Registration
          </h2>

          {/* Example Input */}
          <div>
            <label htmlFor="example" className="block text-sm font-medium text-gray-700 mb-1">
              Example Input
            </label>
            <input
              defaultValue="test"
              {...register("example")}
              id="example"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base transition duration-150 ease-in-out"
              placeholder="e.g., Your Name"
            />
          </div>

          {/* Required Input with Validation */}
          <div>
            <label htmlFor="exampleRequired" className="block text-sm font-medium text-gray-700 mb-1">
              Required Field
            </label>
            <input
              {...register("exampleRequired", { required: true })}
              id="exampleRequired"
              className={`mt-1 block w-full px-4 py-2 border ${errors.exampleRequired ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-base transition duration-150 ease-in-out`}
              placeholder="This field is required"
            />
            {/* Errors will return when field validation fails */}
            {errors.exampleRequired && (
              <span className="mt-1 text-sm text-red-600 block">This field is required</span>
            )}
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 ease-in-out cursor-pointer text-lg"
            value="Submit Form"
          />
        </form>
      </div>
    </>
  );
}


/// routing -> react router dom
/// api -> axios
// tailwind
// useform
// hook-> useState, useEffect, useRef, 
// conditional rendering 
// props -> pros, pros-destructure,
// data-> map-> 
// re- usbale componts // 




// design dashboard 
