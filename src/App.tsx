import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Homepage from './pages/DashBoard/DashBoard';
import NotesHomepage from './pages/Notes/NotesHomepage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignupPage/SignUpPage';
import AddNotesPage from './pages/Notes/AddNotesPage';
import CategoriesHomePage from './pages/Categories/CategoriesHomePage';
import { useStateContext } from './GlobalContext/ContextProvider';
function App() {
  const {currentUser} = useStateContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={currentUser !== null ? <Homepage/> : <LoginPage/>} />
        <Route path='/notes/:type' element={currentUser !== null ? <NotesHomepage/> :<LoginPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/categories' element={currentUser !== null ? <CategoriesHomePage/> : <LoginPage/>}/>
        <Route path='/notes/new' element={currentUser !== null ?<AddNotesPage/>: <LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
