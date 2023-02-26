import React from 'react';

const SinkronDocTitle = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `Clicked ${count} x`;
  });

  const increase = () => setCount((prevCount) => prevCount + 1);
  const decrease = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className='wrapper'>
      <p>Sinkronisasi angka dan judul</p>
      <button onClick={increase}>Increase</button>
      <p>Count: {count}</p>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default SinkronDocTitle;
