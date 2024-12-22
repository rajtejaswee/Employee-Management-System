import React from "react";

const Form = () => {
  return (
    <div className="w-full p-10">
      <form className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-custom-blue text-md mb-0.5 font-semibold">
                Task Title
              </h3>
              <input
                className="bg-transparent text-white border-[1px] text-sm outline-none w-4/5 py-1 px-2 rounded border-gray-500 placeholder:text-gray-500"
                type="text"
                placeholder="Enter the Task"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-custom-blue text-md font-semibold mb-0.5">Date</h3>
              <input className="bg-transparent text-white border-[1px] text-sm outline-none w-4/5 py-1 px-2 rounded border-gray-500 placeholder:text-gray-500" type="date" />
            </div>
            <div className="mt-5">
              <h3 className="text-custom-blue text-md font-semibold mb-0.5">Assign To</h3>
              <input className="bg-transparent text-white border-[1px] text-sm outline-none w-4/5 py-1 px-2 rounded border-gray-500 placeholder:text-gray-500" type="text" placeholder="Employee Name" />
            </div>
            <div className="mt-5">
              <h3 className="text-custom-blue text-md font-semibold mb-0.5">Category</h3>
              <input className="bg-transparent text-white border-[1px] text-sm outline-none w-4/5 py-1 px-2 rounded border-gray-500 placeholder:text-gray-500" type="text" placeholder="Dev, Design etc" />
            </div>
          </div>
              
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-custom-blue text-md font-semibold mb-0.5">Description</h3>
            <textarea className="w-full h-44 bg-transparent text-white border-[1px] border-gray-500 text-sm outline-none py-1 px-2 rounded  placeholder:text-gray-500" placeholder="Enter the Description" name="" id=""></textarea>
             <button className="bg-custom-blue py-3 hover:bg-dark-blue px-5 rounded text-sm font-thin mt-5 w-full">Create Task</button>     
          </div>
      </form>
    </div>
  );
};

export default Form;
