import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import AddProject from './pages/AddProject';
import EditProject from './pages/EditProject';
import Tasks from './pages/Tasks';
import AddResourceTask from './pages/AddResourceTask';
import ResourceList from './pages/ResourcesList';
import EditTaskPage from './pages/EditTask';
import EditResource from './pages/EditResource';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-project" element={<AddProject/>} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/Resource-List" element={<ResourceList/>} />
        <Route path='/edit-project/:id' element={<EditProject/>} />
        <Route path='/vieu-tasks/:id' element={<Tasks/>} />   
        <Route path='add-resource-task' element ={ <AddResourceTask/>}/>
        <Route path='/edit-task' element ={ <EditTaskPage />}/>
        <Route path='/edit-resource' element ={ <EditResource />}/>
      </Routes>

    </Router>
  );
}

export default App;
