import React from 'react'

class MentorList extends React.Component {
  componentDidMount () {
    //ajax call for all mentors from our API
    var getMentors = new XMLHttpRequest()
    getMentors.onLoad = function (e) {
      if (getMentors.readyState === 4 && getMentors.status === 200) {
        console.log(getMentors.responseText)
      } else {
        console.log(getMentors.statusText)
      }
    }
    getMentors.open('GET', 'getMentors')
    getMentors.send()
  }

  render () {
    return (

    )
  }
}

export default Room
