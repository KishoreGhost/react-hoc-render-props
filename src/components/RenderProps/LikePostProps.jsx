import React from 'react'

const LikePostProps = (props) => {
    const {count, increment} = props
  return (
    <div>
      <button onClick={increment}>Like Post:{count}</button>
    </div>
  )
}

export default LikePostProps
