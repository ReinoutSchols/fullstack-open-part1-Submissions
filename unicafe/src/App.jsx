import { useState } from 'react'

/* 1.6: unicafe step1 (DONE)
create Header and statistics component 
create eventhandlers & functions when buttons are pressed and pass them as props to Header
pass the score of the states to the stats component
1.7 unicafe step2 (DONE)
add the total, average and percentage of positives. 
1.8: unicafe step3 (DONE)
create statistics component (already did this in the first step, made the most sense to me.)
1.9: unicafe step4 (DONE)
Change your application to display statistics only once feedback has been gathered. 
1.10: unicafe step5 (Done)
Extract the following two components:
Button Handles the functionality of each feedback submission button. 
StatisticLine for displaying a single statistic, e.g. the average score.
note to myself: probably a better way to solve the conditional rendering.
1.11*: unicafe step6 (DONE)
create table with the data
note to myself: don't create the table in the statisticsline component, that's a mess and creates a table with each statisticsline.
*/




const Button = (props) => {
  console.log(props)
 return (
      <>
      <button onClick={props.onClickGood}>good </button>
      <button onClick={props.onClickNeutral}>neutral </button>
      <button onClick={props.onClickBad}>bad </button>
      </>
 )
}


const StatisticLine = (props) => {
  console.log(props)
  const conditionalStats = () => {
    if (props.all === 0) {
      return (<p>No feedback given</p>)
    } else {
      return (
        <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
      );
    }
  }
  return <div>{conditionalStats()}</div>;
};


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood((prevGood) => prevGood + 1);
  const handleClickNeutral = () => setNeutral((prevNeutral) => prevNeutral + 1);
  const handleClickBad = () => setBad((prevBad) => prevBad + 1);
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const prctPositive = (good / total) * 100;

   return (
    <div>
      <h1>give feedback</h1>
      <Button
        onClickGood={handleClickGood}
        onClickNeutral={handleClickNeutral}
        onClickBad={handleClickBad}
      />
      <h1>statistics</h1>

      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={`${prctPositive} %`} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App
