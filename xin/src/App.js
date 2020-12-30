import './App.css';
import routes from './router/config';
import RouteView from './router/index'
function App() {
  return (
    <div className="App">
      <RouteView routes={routes}></RouteView>
    </div>
  );
}

export default App;
