import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Entries from './pages/Entries';
import Test from './pages/Test';
import EditTestWindow from "./components/EditTestForm"
import {loader as testloader} from "./pages/Test";
import {loader as editQuestionsloader} from "./pages/EditTestWindow";
import CreateForm from './components/CreateForm';
import RootLayout from './pages/Root';
import Home from "./pages/Home";


const router=createBrowserRouter([
  {path:"/",element:<RootLayout/>,children:[
    {index:true,element:<Home/>},
    {path:"create",element:<CreateForm/>},
    {path:"create/:testid",element:<EditTestWindow/>,loader:editQuestionsloader},
    {path:"tests",element:<Entries/>},
    {path:"tests/:testid",element:<Test/>,loader:testloader}
    
  ]},
])

function App() {
  return(
  <RouterProvider router={router}/>
  )
}

export default App;
