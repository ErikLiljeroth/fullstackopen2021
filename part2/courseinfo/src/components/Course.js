import React from "react"

const Header = ({ course }) => {
  return <h2>{course.name}</h2>
}

const Total = ({ parts }) => {
  const sum = parts.reduce((accSum, parts) => accSum + parts.exercises, 0)
  return <b>total of {sum} exercises</b>
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => (
        <Part part={p} key={p.id} />
      ))}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
