
//header component for outputting the h1 text
const Header = ({props}) => {   
  return (
    <h1>{props}</h1>
  )
}

//content is for displaying the options of different exercises and their numbers
const Content = ({part,exercise}) => {
  return(
    <p>{part} - Exercise {exercise}</p>
  )
}

//total is for adding up all the numbers and showing the total of it 
const Total = ({num1,num2,num3}) => {
  const total = num1+num2+num3
  return(
  <p>Number of exercises- {total}</p>
  )
}

//finally here is all the props are being passed and the components are doing their work to output the desired line that we expect
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
      <Total num1={exercise1} num2={exercise2} num3={exercise3} />
    </div>
  )
}
export default App