import React from 'react'


const LikePostHoc = (props) => {
    let {count, increment} = props
  return (
    <>
     <button onClick={increment}>Like Post count: {count}</button> 
    </>
  )
}

export default LikePostHoc