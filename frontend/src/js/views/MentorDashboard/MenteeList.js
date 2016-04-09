import React from 'react'
import MenteeItem from './MenteeItem.js'

const styles = {
  li: {
    listStyleType: 'none',
    color: 'white',
    fontSize: '1.7em',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  ul: {
    backgroundColor: '#FFBE63',
    padding: '2em',
    borderRadius: '10px'
  }
}

export default (props) => {
  return (
    <ul style={styles.ul} rounded>
      {props.mentees.map((menteeObj, index) => {
        return (
          <MenteeItem
            key={index}
            index={index}
            conversationLink={menteeObj.conversationLink}
            menteeName={menteeObj.menteeName}
            about={menteeObj.about}
            lastConversation={menteeObj.lastConversation}
            notes={menteeObj.notes}
            styles={styles.li}
            mentorUsername={props.mentorUsername}
          />
        )
      })}
    </ul>
  )
}
