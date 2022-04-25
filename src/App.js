import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate'

import Home from './pages/Home/Home'
import Contacts from './pages/Contacts/Contacts';
import News from './pages/News/News';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import CheckOut from './pages/CheckOut/CheckOut';
// import { lazy, Suspense } from 'react';
import CheckOutTemplate from './templates/CheckOutTemplate/CheckOutTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import SignUp from './pages/SignUp/SignUp';
import Loading from './components/Loading/Loading';
export const history = createBrowserHistory();
// const CheckOutTemplateLazy = lazy(() => import('./templates/CheckOutTemplate/CheckOutTemplate'))
function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contacts} />
        <HomeTemplate path='/news' exact Component={News} />
        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/signup' exact Component={SignUp} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <CheckOutTemplate path='/checkout/:id' exact Component={CheckOut} />
        {/* <Suspense fallback={<h1>Loading...</h1>}>
          <CheckOutTemplateLazy path='/checkout/:id' exact Component={CheckOut} />
        </Suspense> */}
      </Switch>
    </Router>

  );
}

export default App;
