import React from 'react'
import Card2 from './components/card2'
function App() {
   const developers = [
  {
    Name : "Michel",
    image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
    position: "Frontend Developer",
    status: "Available",
    pay: "$40/hr",
    viewProfile: "View Profile",
  },
  {
     Name : "Robert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    position: "Backend Developer",
    status: "Offline",
    pay: "$45/hr",
    viewProfile: "View Profile",
  },
  {
     Name : "Chrish",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    position: "Full Stack Developer",
    status: "Available",
    pay: "$60/hr",
    viewProfile: "View Profile",
  },
  {
     Name : "Marsh",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    position: "React Developer",
    status: "Available",
    pay: "$50/hr",
    viewProfile: "View Profile",
  },
  {
     Name : "MAX",
    image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    position: "Node.js Developer",
    status: "Offline",
    pay: "$55/hr",
    viewProfile: "View Profile",
  },
  {
     Name : "Karlo",
    image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    position: "UI/UX Designer",
    status: "Available",
    pay: "$35/hr",
    viewProfile: "View Profile",
  },
  {
     Name : "Hemsoworth",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    position: "Mobile App Developer",
    status: "Available",
    pay: "$48/hr",
    viewProfile: "View Profile",
  },
  {
    Name : "Natasha Romanoff",
    image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    position: "DevOps Engineer",
    status: "Offline",
    pay: "$70/hr",
    viewProfile: "View Profile",
  },
  {
    Name : "Banner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    position: "Python Developer",
    status: "Available",
    pay: "$52/hr",
    viewProfile: "View Profile",
  },
  {
    Name : "Hawkey",
    image: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=",
    position: "Data Analyst",
    status: "Offline",
    pay: "$42/hr",
    viewProfile: "View Profile",
  },
];

  return (
    <>
    <div className='flex flex-wrap gap-6 justify-center'>
    {developers.map(function(elem , inx){
      return(
        <div key={inx}>
        <Card2 image = {elem.image} Name = {elem.Name} position = {elem.position} status = {elem.status} pay = {elem.pay}/>
        </div>
      )
    })}
    </div>
    </>
  )
}

export default App
