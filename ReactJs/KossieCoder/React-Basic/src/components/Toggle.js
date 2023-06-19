import React, { useEffect, useState } from 'react';

const Toggle = () => {
  const [buttonName, setButtonName] = useState('클릭');

  const clickButton = () => {
    setButtonName('click');
  };

  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);
  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const renderCondition = condition ? 'True' : 'False';
  return (
    <div>
      <div>{renderCondition}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={clickButton}>Click</button>
    </div>
  );
};

export default Toggle;
