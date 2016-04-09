import React from 'react'
import {Input, ButtonInput} from 'react-bootstrap'

export default (props) => {
  return (
    <form action='/save-mentee-profile' style={{padding: '0 2em'}}>
      <h4>Fill in your details</h4>
      <Input
        id='firstname'
        type='text'
        placeholder='first name'
        required
        defaultValue={props.firstname}
      />
      <Input
        id='lastname'
        type='text'
        placeholder='last name'
        defaultValue={props.lastname}
        required
      />
      <Input
        id='gender'
        type='text'
        placeholder='gender'
        defaultValue={props.gender}
        required
      />
      <Input
        id='age'
        type='text'
        placeholder='age'
        defaultValue={props.age}
        required
      />
      <Input
        id='aboutme'
        type='textarea'
        placeholder='about me'
        defaultValue={props.aboutme}
        required
      />
      <Input
        id='mobile number'
        type='text'
        placeholder='mobile number'
        defaultValue={props.mobilenumber}
        required
      />
      <ButtonInput type='submit' defaultValue='save details'/>
    </form>
  )
}
