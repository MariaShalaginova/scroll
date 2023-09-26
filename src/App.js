import './index.css';
import {Routes, Route } from 'react-router-dom';
import PostList from './components/main/Main';
import PostDetails from './components/PostDetails/PostDetails';

function App() {

  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={<PostList/>} /> 
      <Route exact path="/post/:postId" element={<PostDetails/> } /> 
     </Routes>
    </div>
  );

}

export default App;
