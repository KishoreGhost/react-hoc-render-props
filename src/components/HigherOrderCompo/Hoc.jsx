import React, { useState } from "react";

const Hoc = (PassedComponent) => {
  const NewCompo = () => {
    let [count, setCount] = useState(0);

    const handleCount = () => {
      setCount(count + 1);
    };
    return (
      <>
        <PassedComponent count={count} increment={handleCount} />
      </>
    );
  };
  return NewCompo;
};

export default Hoc;
