import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Entries from './pages/Entries';
import Test from './pages/Test';
import EditTestWindow from "./pages/EditTestWindow"
import { loader as Questionloader } from "./pages/Test";
import CreateForm from './components/CreateForm';
import RootLayout from './pages/Root';
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, children: [
      { index: true, element: <Home /> },
      { path: "create", element: <CreateForm /> },
      {
        path: ":testid", loader: Questionloader, id: "questions",
        children: [
          { path: "attempt", element: <Test /> },
          { path: "edit", element:<EditTestWindow/>}
        ]
      },
      { path: "tests", element: <Entries />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
