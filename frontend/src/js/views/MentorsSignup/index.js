import React from 'react'
import {Input, ButtonInput} from 'react-bootstrap'

export default (props) => {
  return (
<<<<<<< HEAD:frontend/src/js/components/MentorsSignup/MentorsEditProfile.js
    <form style={{padding: '0 2em'}} onSubmit={props.onSubmit}>
=======
    <form style={{padding: '0 2em'}}>
>>>>>>> origin/api-update:frontend/src/js/views/MentorsSignup/index.js
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
