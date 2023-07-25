import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AuthenticationPage, {action as authAction} from './pages/Authentication'
import Dashboard from './pages/Dashboard';
import RatePage from './pages/Rate';
import RedeemPage from './pages/Redeem';
import RootLayout from './pages/RootLayout';
import Settings from './pages/Settings';
import Transactions from './pages/Transactions';


const router =  createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {index: true, element:<Dashboard /> },
      {path:'transactions',  element:<Transactions/>},
      {path:'rate', element:<RatePage />},
      {path:'redeem', element: <RedeemPage />},
      {path:'settings', element: <Settings />},
    ]
  },
  {
    path: 'auth/',
    element: <AuthenticationPage />,
    action: authAction
  }
])
function App() {
  return (  
    <RouterProvider router={router} />
  );
}

export default App;
