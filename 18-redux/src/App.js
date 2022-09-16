import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile'


function App() {
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);

  return (
    <Fragment>
      <Header></Header>
      {isAuthenticated ? <UserProfile></UserProfile> : <Auth></Auth>}
      <Counter></Counter> 
    </Fragment>
  );
}

export default App;
