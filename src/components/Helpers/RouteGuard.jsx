import { useNavigate } from "react-router-dom";

export const checkAuthLoader = () => {
    const token = sessionStorage.getItem('token');
    // const navigate = useNavigate(); // Use useNavigate to perform redirects.
  
    if (!token) {
        console.log("Token not found. Redirecting to /auth");
        // navigate('/auth');
        window.location.replace('/auth')
        return null;
      }
    
      // Token exists, user is authenticated, no need to redirect.
      console.log("User is authenticated");
      return null;
  };