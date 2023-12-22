import { useState } from 'react'


/*
1.12*: anecdotes step1 (DONE)
expand App by adding button that can be clicked to display random anecdote.
1.13*: anecdotes step2 (DONE)
Expand your application so that you can vote for the displayed anecdote.
1.14*: anecdotes step3 (DONE)
Now implement the final version of the application that displays the anecdote with the largest number of votes:
*/
// I like the props way of accesing, makes more sense to me for now. 
const Button = (props) => {
  return (
    <>
      <button onClick={props.onVote}>
        vote
      </button>
      <button onClick={props.onClick}>
        next anecdote
      </button>
    </>
  );
};


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //setting the states
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });
  console.log(count); // to check how and if count is working
  
  //Defining helper functions
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * (anecdotes.length));
    console.log(randomNum) // to check if all anecdotes can be reached.
    setSelected(randomNum)
  };
  const handleVote = () => {
    setCount((prevCount) => ({ ...prevCount, [selected]: prevCount[selected] + 1 }))}; // learned it from scrimba's free react course. Very good!

  // calculating the quote with the most votes.
  const values = Object.values(count); // turning object in array with only the values
  const largestElement = Math.max(...values); // getting the max value out the array
  console.log(largestElement); // checking my work
  const largestElementIndex = values.indexOf(largestElement); // getting the index of the max value



  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Button onClick={() => handleClick()} onVote={() => handleVote()}/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[largestElementIndex]}  {/* getting the anecdote with the highest amount of votes (value) */}

    </div>
  )
}

export default App