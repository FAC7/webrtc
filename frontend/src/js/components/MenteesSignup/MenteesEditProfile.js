import React from 'react'
import {Input, ButtonInput} from 'react-bootstrap'

export default (props) => {
  return (
    <form action='/save-mentee-profile' style={{padding: '0 2em'}}>
      <h4>Fill in your details</h4>
      <Input
        id='username'
        type='text'
        placeholder='username'
        defaultValue={props.username}
        required
      />
      <Input
        id='password'
        type='password'
        placeholder='password'
        required={props.editing}
      />
      <Input
        id='confirm-password'
        type='password'
        placeholder='confirm-password'
        required={props.editing}
      />
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
        id='profession'
        type='text'
        placeholder='profession'
        defaultValue={props.profession}
        required
      />
      <Input
        id='topics'
        type='textarea'
        placeholder='topics'
        defaultValue={props.topics}
        required
      />
      <Input
        id='aboutme'
        type='textarea'
        placeholder='about me'
        defaultValue={props.aboutme}
        required
      />
      <ButtonInput type='submit' defaultValue='save details'/>
    </form>
  )
}
