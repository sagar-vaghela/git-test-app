import './App.css';
import RootContainer from './container/RootContainer';

function App() {
  return (
    <div className="App">
      {/* header */}
      <div> <h1>Post Listing </h1></div>
      <hr />
      {/* body */}
      <RootContainer />
     </div>
  );
}

export default App;
