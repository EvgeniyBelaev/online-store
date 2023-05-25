import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header';
import routesConfig from '@routes/routesConfig'
import style from './App.module.css'


function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
