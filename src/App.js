import MainComponent from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <MainComponent />
        </Provider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

