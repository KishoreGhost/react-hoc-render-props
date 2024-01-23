import React from 'react'

const LikeImageProps = (props) => {
    const {count, increment} = props
  return (
    <div>
      <button onClick={increment}>Like Image:{count}</button>
    </div>
  )
}

export default LikeImageProps

