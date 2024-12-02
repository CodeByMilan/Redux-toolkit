import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/blog/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AddBlog from './pages/blog/AddBlog';
import EditBlog from './pages/blog/EditBlog';
import { Provider } from 'react-redux';
import store from '../store/store';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/blog/edit" element={<EditBlog/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  
    </>
  );
}

export default App;
