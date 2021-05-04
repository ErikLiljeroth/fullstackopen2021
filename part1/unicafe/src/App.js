import React, { useState } from "react"

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistic = ({ text, value, unit }) => {
  return (
    <div>
      {text} {value} {unit}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <Statistic text="good" value={good} unit="" />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic text="neutral" value={neutral} unit="" />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic text="bad" value={bad} unit="" />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic text="all" value={good + neutral + bad} unit="" />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic
                  text="average"
                  value={(1 / (good + bad + neutral)) * (1 * good - 1 * bad)}
                  unit=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic
                  text="positive"
                  value={(good / (good + neutral + bad)) * 100}
                  unit="%"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
