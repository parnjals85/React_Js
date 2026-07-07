import React from 'react'

function Card2(props) {
  return (
    <>
   <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-lg hover:shadow-xl transition profile">

  <img
    src={props.image}
    alt="Developer"
    className="mx-auto h-24 w-24 rounded-full object-cover"
  />

    <p className='text-center ml-2 mt-5 text-2xl font-bold text-red-500'>{props.Name}</p>
    <div className="mt-4 text-center">
    <h2 className="text-xl font-bold">{props.position}</h2>

    <p
      className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
    >
      {props.status}
    </p>

    <h3 className="mt-4 text-2xl font-bold text-blue-600">
      {props.pay}
    </h3>

    <button
      className="mt-5 w-full rounded-lg bg-black py-2 text-white transition hover:bg-gray-800 cursor-pointer"
    >
      View Profile
    </button>
  </div>
</div>
</>
  )
}

export default Card2
