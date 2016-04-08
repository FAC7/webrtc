import React from 'react'

class MentorItem extends React.Component {
  constructor () {
    super()
    this.onClickFunc = this.onClickFunc.bind(this)
  }
  onClickFunc () {
    console.log('calling onClickFunc');
    this.props.changeState({
      pleaseCall: true
    })
    this.props.mentor.chat(() => {
      console.log('successful chat');
    })
  }
  render () {
    return (
      <li>{this.props.mentor.username}<button onClick={this.props.mentor.chat.bind(null, () => {console.log('successful chat');})}>call</button></li>
    )
  }
}

export default MentorItem
