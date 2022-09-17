import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router, Switch } from 'react-router-dom'

import Header from './components/header/header.component';
import SmallHeader from './components/header/small_header.component'
import Signup from './components/signup/signup';
import SignIn from './components/signin/signin';
import Category from './components/category/category';
import Items from './components/Items/Item.component';
import Account from './components/account/Account';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Header />}>
              <Route path="/menu/:category" element={<Category />} />
              <Route path="/menu/:category/:id" element={<Items />} />
          </Route>

          <Route path='/' element={<SmallHeader />}>
              <Route path="/profile/sign-up" element={<Signup />} />
              <Route path="/profile/sign-in" element={<SignIn />} />
              <Route path="/profile/account" element={<Account />} />
          </Route>
        </Routes>

    </div>
  );
}

export default App;
