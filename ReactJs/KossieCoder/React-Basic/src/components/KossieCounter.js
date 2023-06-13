import React, { useEffect, useState } from 'react';

const KossieCounter = () => {
  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count, kossie]);

  return (
    <>
      <button onClick={() => setKossie(kossie + 1)}>Click1</button>
    </>
  );
};

export default KossieCounter;
