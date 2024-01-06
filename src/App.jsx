import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AuthenticationPage, {action as authAction} from './pages/Authentication'
import Dashboard from './pages/Dashboard';
import RatePage from './pages/Rate';
import RedeemPage from './pages/Redeem';
import RootLayout from './pages/RootLayout';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';
import Transactions, {loader as transactionsLoader} from './pages/Transactions';
import AdminDashboard from './pages/admin/Dashboard';
import AdminTransactions from './pages/admin/Transactions';
import Users from './pages/admin/Users';
import Cards from './pages/admin/Cards';
import Rates from './pages/admin/Rates';
import UtilityPayment from './pages/UtilityPayment';
import UtilityTransactions from './pages/admin/UtilityTransactions'

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
      {path:'utility-payment', element: <UtilityPayment />},
      {
        path:'admin',
        element: <AdminDashboard />
      },
      {
        path:'all-transactions',
        element: <AdminTransactions />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'cards/',
        element: <Cards />,
      },
      {
        path: 'utility-transactions/',
        element: <UtilityTransactions />,
      },
     
      
    ]
  },
  {
    path: 'auth/',
    element: <AuthenticationPage />,
    action: authAction
  },
  {
    path:'/cards/:id',
    element: <Rates />
  },

  // Admin Routers

  
 
])

function App() {
  return (  
    <RouterProvider router={router} />
  );
}

export default App;
