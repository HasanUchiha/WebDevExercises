/*Refactor the code so that it consists of three new components: Header, Content, and Total. 
All data still resides in the App component,
which passes the necessary data to each component using props.
Header takes care of rendering the name of the course, 
Content renders the parts and their number of exercises and Total renders the total number 
of exercises.*/

//TODO - first make the syntax for the three components 


const Header = (props) => {    // BUG - what is the problem here ???? why the error message.....
  return (
    <h1>{props}</h1>
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
      <Header {course}/>        //FIXME - trying to pass the text hrough the props - the wqhole text why isnt it working......????? 
                                //TODO - learning how a component works and then i will underastand what is going on and what should i do..
      <p>
        {part1} { exercise1}
      </p>
      <p>
        {part2} {exercise2}
      </p>
      <p>
        {part3} {exercise3}
      </p>
      <p>Number of exercises {exercise1+exercise2+exercise3}</p>
    </div>
  )
}
export default App
