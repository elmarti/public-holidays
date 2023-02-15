import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ListView} from './pages/ListView';
import {FavouritesView} from './pages/FavouritesView';
import styles from './App.module.css';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className={styles.appBody}>
        <BrowserRouter>
          <Routes>
            <Route element={<ListView/>} path='/'></Route>
            <Route element={<FavouritesView/>} path='/favourites'></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
