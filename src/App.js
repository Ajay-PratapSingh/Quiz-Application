import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Entries from './pages/Entries';
import Test from './pages/Test';
import EditTestWindow from "./pages/EditTestWindow"
import { loader as Questionloader } from "./pages/Test";
import CreateForm from './components/CreateForm';
import RootLayout from './pages/Root';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import {action as authAction} from "./pages/Auth";
import { AuthContextProvider } from './context/AuthContext';



const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, children: [
      { index: true, element: <Home /> },

      {path:"auth",element:<Auth/>,action:authAction},

      { path:"profile", element: <Profile/>},

      {
        path: "create", children: [
          { index:true, element: <CreateForm/> },
        ]
      },

      {
        path: ":testid", loader: Questionloader, id: "questions",
        children: [
          { path: "attempt", element: <Test/> },
          { path: "edit", element: <EditTestWindow /> }
        ]
      },

      { path: "tests", element: <Entries /> }
    ]
  }
])

function App() {
  return (
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App;
