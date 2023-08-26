import React from 'react'
import {Element} from 'react-scroll'
import Project from '../Project/Project'
import './Projects.css'

const projectsList=[
  {
    image:'https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png',
    title:'Todo App',
    desc:'A Todo list is a simple efective tool used to manage and organize tasks, activities, or goals. It helps individuals stay focused, prioritize their work, and track their progress.',
    link:'https://react-todoapp-f4e6d.web.app/'
  },
  {
    image:'https://images.pexels.com/photos/6772022/pexels-photo-6772022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:'Calculator',
    desc:'A Calcuator is a device that can be perform basic arithmatic operations on numbers. A simple calculator is perform addition, subtraction, multiplication, and devision mathematical operations. ',
    link:'https://react-calculator-c332d.web.app'
  },
  {
    image:'https://img.freepik.com/free-vector/modern-online-registration-compositio_23-2147993866.jpg?w=740&t=st=1692897837~exp=1692898437~hmac=243c2a5cd42ec5442a767b992210712e71ac2f97d80f0d5b93f898e082c62be4',
    title:'RegistrationForm',
    desc:'An online registration form is a way to collect registration information and create a list of events, programs, and more. ',
    link:'https://t1registerform.ccbp.tech/'
  },
  {
    image:'https://e1.pxfuel.com/desktop-wallpaper/44/131/desktop-wallpaper-cinetemper-sr-ntr-senior-ntr-thumbnail.jpg',
    title:'TributePage',
    desc:'A tribute page is a type of website or webpage that is created to honor and celebrate a particular person, group, event, or cause. It serves as a platform for expressing admiration, respect, and appreciation for the subject of the tribute.',
    link:'https://tributepage-ntr.web.app/'
  },
  {
    image:'https://static.vecteezy.com/system/resources/thumbnails/009/656/939/small/a-template-of-questions-and-answer-options-for-a-quiz-on-a-blue-background-test-exam-questions-for-a-tv-show-illustration-of-eps10-vector.jpg',
    title:'Quiz App',
    desc:'A quiz app is a software application designed to present users with a series of questions in a structured format, allowing them to test their knowledge, skills, or comprehension of a particular topic. Quiz apps can be used for educational purposes, training, entertainment, and assessment.',
    link:'https://tirusimplequiz.ccbp.tech/'

  },
  {
    image:'https://cdn.imgbin.com/9/1/23/imgbin-emoji-temperature-celsius-kelvin-fahrenheit-temperature-k079mA9az5K73hff9RSM42cDF.jpg',
    title:'Temperature Convertion',
    desc:'A temperature conversion app is a software application designed to convert temperatures from one unit of measurement to another. It might convert temperatures from Celsius to Fahrenheit, Fahrenheit to Celsius, Kelvin to Celsius, and so on.',
    link:'https://tempratureconvertion.web.app/'
  
  }
]

const Projects=()=> {
  return (
    <Element className="projectContainer" id="projects">
      <h1>PROJECTS</h1>
      <p>Here are some projects which I done for makinglives of people easy. </p>
      <div className='projectsBg'>
        <div className='projectContainer_projects'>
            {
              projectsList.map((project,index)=>{
                return(
                  <Project key={index} 
                          image={project.image} 
                          title={project.title} 
                          desc={project.desc} 
                          link={project.link} 
                  />
                )
              })
            }
        </div>
      </div>

      
    </Element>
  )
}

export default Projects
