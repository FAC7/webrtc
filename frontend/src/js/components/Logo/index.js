import React from 'react'


export default (props) => {
  const styles = {
    outer: {
      width: '80%',
      maxWidth: props.maxWidth,
      margin: '0 auto'
    },
    inner: {
      width: '100%'
    }
  }
  return (
    <div style={styles.outer}>
      <img style={styles.inner} src={props.imgUrl} />
    </div>
  )
}
