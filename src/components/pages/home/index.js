import React from 'react';
import Todo from '../../organisms/todo';

const Home = props => {
  return (
    <React.Fragment>
      <Todo {...props}/>
    </React.Fragment>
  );
};

export default Home;
