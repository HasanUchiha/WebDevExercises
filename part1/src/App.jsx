
//header component for outputting the h1 text
const Header = ({props}) => {   
  return (
    <h1>{props}</h1>
  )
}

/*Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. 
Instead, it only renders three Part components of which each renders the name and number of exercises of one part*/


//creating Part component 

const Part = ({part, exercise}) => {
  return (
     <p>{part} - Exercise {exercise}</p>
  )
}



//content is for displaying the options of different exercises and their numbers
const Content = ({ parts }) => {
  return(
    <div>
       {parts.map((part, index) => (
        <Part key={index} part={part.name} exercise={part.exercise} />
      ))}
    </div>
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
  const parts = [
    { name: 'Fundamentals of React', exercise: 10 },
    { name: 'Using props to pass data', exercise: 7 },
    { name: 'State of a component', exercise: 14 }
  ]

  return (
    <div>
      <Header props={course} />
      <Content parts={parts} />
      <Total num1={parts[0].exercise} num2={parts[1].exercise} num3={parts[2].exercise} />
    </div>
  )
}
export default App