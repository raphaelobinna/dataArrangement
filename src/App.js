import { Pages } from './pages/pages';
import { Routes, Route } from 'react-router-dom';
import "./sass/main.scss";
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Pages />} />
        </Routes>
      </Provider>
      {/* <div class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">My test</a>
          </div>
          <ul class="nav navbar-nav d-flex justify-content-around flex-row ">
            <li style={{ marginRight: 10 }} ><a href="/">Metrics</a></li>
          </ul>
        </div>
      </div> */}

    </>
  );
}

export default App;
