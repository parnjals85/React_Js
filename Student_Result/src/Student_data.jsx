import React, { useState } from "react";
const Student_data = () => {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [students, setStudents] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copytask = [...students];
    copytask.push({ name, marks });
    setStudents(copytask);
    setName(" ");
    setMarks(" ");
  };
  const deleteNote = (idx) => {
    const copytask = [...students];
    copytask.splice(idx, 1);
    setStudents(copytask);
  };
  const checkresult = () =>{

  }
  return (
    <div>
      <div className="ml-36 mt-10 h-screen lg:flex ">
        <form
          className="flex gap-4 lg:w-1/2 p-10 flex-col items-start bg-amber-600"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h1 className="text-4xl mb-2 font-bold">Student Form</h1>
          <input
            type="text"
            className="px-5 w-full font-medium py-2 border-2 outline-none rounded "
            placeholder="Enter the Student Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            className="px-5 h-11 w-full font-medium border-2 outline-none rounded py-2"
            placeholder="Student Mark Total"
            value={marks}
            onChange={(e) => {
              setMarks(e.target.value);
            }}
          />
          <button className="cursor-pointer ml-52 mt-7 bg-blue-400 rounded-3xl w-20 font-medium py-2">
            Submit
          </button>
        </form>
        <div className="lg:w-1/2 lg:border-l-2 p-10">
          <h1 className="text-4xl font-bold">Student Result</h1>
          <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
            {students.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
                >
                  <div>
                    <h3 className="leading-tight text-lg font-bold">
                      {elem.name}
                    </h3>
                    <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">
                      {elem.marks}
                    </p>
                     <span className="mt-2 leading-tight text-xs font-semibold text-gray-600" >{elem.marks >=40 ? "Pass" : "Fail"}</span>
                  </div>
                  <button
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student_data;
