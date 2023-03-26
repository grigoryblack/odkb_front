import './App.css'
import {Routes, Route} from 'react-router-dom';
import ChildrenPage from "./pages/childrenPage";
import Login from "./pages/login/index.jsx";
import MainPage from "./pages/mainPage";
import PrivateRoute from "./privateRoute/index.jsx";
import Initial_Inspection from "./pages/Initial_Inspection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <MainPage/>
          </PrivateRoute>
        }/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Children" element={
          <PrivateRoute>
            <ChildrenPage/>
          </PrivateRoute>
        }/>
        <Route path="Children/Initial_Inspection" element={
          <PrivateRoute>
            <Initial_Inspection/>
          </PrivateRoute>}
        />
      </Routes>
    </>
  )
}

export default App
