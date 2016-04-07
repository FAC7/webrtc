import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <ul>
      {props.mentees.map((el, index) => {
        return (
            <li key={index}>
              <Link to={el.conversationLink} key={index}>{el.menteeName}</Link>
            </li>
        )
      })}
    </ul>
  )
}
