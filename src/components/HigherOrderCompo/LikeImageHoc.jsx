import React from 'react'


const LikeImageHoc = (props) => {
    let {count, increment} = props
  return (
    <>
     <button onClick={increment}>Like Image count: {count}</button> 
    </>
  )
}

export default LikeImageHoc
