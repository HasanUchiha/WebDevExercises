/*Refactor the code so that it consists of three new components: Header, Content, and Total. 
All data still resides in the App component,
which passes the necessary data to each component using props.
Header takes care of rendering the name of the course, 
Content renders the parts and their number of exercises and Total renders the total number 
of exercises.*/

//TODO - first make the syntax for the three components 


const Header = ({props}) => {   
  return (
    <h1>{props}</h1>
  )
}

//TODO - create the Content component

const Content = ({part,exercise}) => {
  return(
    <p>{part} - Exercise {exercise}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1= 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
      <Header props={course}/>  
      <Content part={part1} exercise ={exercise1} />
      <Content part={part2} exercise ={exercise2} />
      <Content part={part3} exercise ={exercise3} />
      <p>Number of exercises {exercise1+exercise2+exercise3}</p>
    </div>
  )
}
export default App
