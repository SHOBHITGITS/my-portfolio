import React from 'react'
import communication from '../assets/communication.png'
import problemSolving  from '../assets/problemSolving.png'
import quickLearner from '../assets/quickLearner.png'
import teamWork from '../assets/teamWork.png'
import selfMotivated from '../assets/selfMotivated.png'
import goalOriented from '../assets/goalOriented.png'

const Skills = () => {

    const professionalskills=[
      {
      id:1,
      src:communication,
      title:"Communication Skill",
      style:"shadow-orange-200"
    },
    {
      id:2,
      src:problemSolving,
      title:"Problem Solving",
      style:"shadow-orange-200"
    },
    {
      id:3,
      src:teamWork,
      title:"Team Work",
      style:"shadow-orange-200"
    },
    {
      id:4,
      src:quickLearner,
      title:"Quick Learner",
      style:"shadow-orange-200"
    },
    {
      id:5,
      src:selfMotivated,
      title:"Self Motivated",
      style:"shadow-orange-200"
    },
    {
      id:6,
      src:goalOriented,
      title:"Goal Oriented",
      style:"shadow-orange-200"
    },
  ];

  return (
    <div name="skills"
    className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <p className=" text-4xl font-bold text-white inline border-b-4 border-gray-500 ">
                Professional Skills
            </p>
            <p className="text-white py-6">
                  Here are some my key professional skills
            </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
              {
                professionalskills.map(({id, title, src, style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
                  <img src={src} alt="skills" className="w-20 mx-auto"/>
                  <p className="mt-4">
                    {title}
                  </p>
                </div>
                ))
                }
              </div>
      </div>
    </div>
  )
}

export default Skills
