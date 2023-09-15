import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AuthenticationPage, {action as authAction} from './pages/Authentication'
import Dashboard from './pages/Dashboard';
import RatePage from './pages/Rate';
import RedeemPage from './pages/Redeem';
import RootLayout from './pages/RootLayout';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';
import Transactions, {loader as transactionsLoader} from './pages/Transactions';

const router =  createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,    
    children: [
      {index: true, element:<Dashboard /> },
      {path:'transactions',  element:<Transactions/>, loader:transactionsLoader},
      {path:'rate', element:<RatePage />},
      {path:'redeem/:component_name', element: <RedeemPage />},
      {path:'redeem/:component_name/:id', element: <RedeemPage />},
      {path:'settings/:component_name', element: <Settings />},
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
