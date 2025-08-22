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
            I’m a Java Developer who loves turning ideas into applications. With 2 years of professional experience,
            I’ve worked on ERP modules, authentication systems, and real-time applications. My core expertise lies in
            Java, Spring Boot, Microservices Hibernate, REST APIs, and database systems like PostgreSQL and MySQL. On the front end, I
            work with ReactJS, JSP, Bootstrap, Tailwind CSS, and JavaScript to create user-friendly interfaces. I believe in
            writing clean, efficient code and following Agile practices to deliver impactful solutions. I’m constantly
            exploring new technologies such as Spring Security, Microservices, and AWS to enhance my skills and build
            scalable, modern applications.
            Apart from all these, I love to play flute in my spare time and writing poems.
<br/>
Thanks!
        </p>
        
      </div>
    </div>
  )
}

export default About

