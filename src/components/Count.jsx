import React from 'react';

const Counter = () => {
  //   function Counting() {
  //     console.log('Calculating initial count');
  //     return 9999;
  //   }

  //const [count, setCount] = react.useState(() => Counting());
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className='wrapper'>
      <p className='angka'>{count}</p>
      <div className='buttonCount'>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
