const Header = (props) => {
  console.log(props);
  return (
    <h1>{props.course.name}</h1>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
       {/* I got a lot of errors in the console:  "Uncaught TypeError: Cannot read properties of undefined (reading 'name')"
       I solved it with adding the ? statement that checks if a parts exists before trying to get to it.
       */}
      <p> {props.part1?.name} {props.part1?.exercises}</p>
      <p> {props.part2?.name} {props.part2?.exercises}</p>
      <p> {props.part3?.name} {props.part3?.exercises}</p>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part1={props.parts[0]}/>
      <Part part2={props.parts[1]}/>
      <Part part3={props.parts[2]}/>
    </div>
  );
};

const Total = (props) => {
  console.log(props);
 
  const totalExercises =  props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises 
  // I put the sum out of the JSX, looks cleaner in my opinion. 
  // I could probably destructur the passed props and use string interpolation.
  // I learned this in scrimba's introduction to react's course. But decided to keep it simple for now :).
  return (
    <p>Number of exercises {totalExercises}</p>
  );
};

  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
