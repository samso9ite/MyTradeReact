import { useState } from 'react';
import OtpInput from 'react-otp-input'
import Api from '../../Api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Activation = (props) => {
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const verifyToken = () => {
        setLoading(true)
        console.log(token);
        Api.axios_instance.post(Api.baseUrl+'/user/account/activate', token)
        .then(res => {
            console.log(res);
            toast.success('Account Activated Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
            navigate('/auth')
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoading(false)
        })
    }

    return(
        <>
            <h3 className="intro-x mt-2 text-slate-400 dark:text-slate-400 mb-10" style={{fontSize:"17px"}}>
                A mail has been sent to your email, verify your account with the token sent to your email.
            </h3> 
            <OtpInput
                value={token}
                onChange={setToken}
                inputStyle={{width:'3em', margin:'5px', border:'2px solid #94a3b8'}}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
            />
            <button className="btn btn-primary py-3 px-4 w-full xl:w-32 mt-10  align-top" onClick={verifyToken} disabled={loading}>
                {loading ? 'Verifying Token ...' : 'Verify Token'}
            </button>
            <ToastContainer />
      </>
      
    );
} 

export default Activation;