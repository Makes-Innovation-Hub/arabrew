import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Intro from './pages/Intro';


const router = createBrowserRouter([
  {path: "/", element: <Intro/>, errorElement: <>Error...</>}
])

function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
