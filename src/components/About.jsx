import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-10'>
           Hello folks!
           <br/>
            Here is my first ever Portfolio WebApp. This is just a beginning of a newer version of me.
            I have learned a lot and still improving myself.
            Your feedbacks and suggestions are always welcome. <br/>
            If you are an employer, I must say I will give my best to grow your organisation. This portfolio shows all the present and previous technologies that I've worked with.
        </p>

        <br/>

        <p className='text-xl pb-16'>
        I am looking for a opportunity in software development field where I can put my best efforts.
I am a enthusiastic problem solver with good knowledge of Data Structures and Algorithms, Java programming, and SQL.
I also have knowlegde of web development using MERN Stack.
Apart from all these, I love to play flute in my spare time and writing poems.
<br/>
Thanks!
        </p>
        
      </div>
    </div>
  )
}

export default About

