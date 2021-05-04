import React, { useState } from "react"

const MostVotesAnecdote = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes)
  if (maxVotes === 0) {
    return <div>
      <h1>Anecdote with most votes</h1>
      No votes are collected yet...
      </div>
  } else {
    return (
    <div>
      <h1>Anecdote with most votes</h1>
      "{anecdotes[votes.indexOf(Math.max.apply(null, votes))]}"
      <br/>
      has {maxVotes} votes
    </div>
    )  
  }
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleVote = (idx) => {
    let newVotes = [...votes]
    newVotes[idx] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      "{anecdotes[selected]}"
      <br />
      <button onClick={() => handleVote(selected)}>vote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        next anecdote
      </button>
      <MostVotesAnecdote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App