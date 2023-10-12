import { useState } from 'react';
import OtpInput from 'react-otp-input'
import Api from '../../Api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Activation = (props) => {
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const verifyToken = () => {
        setLoading(true)
        Api.axios_instance.post(Api.baseUrl+'/confirmation', {token:token, email:localStorage.getItem('email')})
        .then(res => {
            console.log(res);
            toast.success(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
            navigate('/auth')
        }).catch(err => {
            setError(err.response.data.message)
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
            {error && <div class="alert alert-danger-soft alert-dismissible show flex items-center mb-2" role="alert"> 
                    <i data-lucide="alert-octagon" class="w-6 h-6 mr-2"></i> {error}
                    <button type="button" class="btn-close" data-tw-dismiss="alert" aria-label="Close"> x </button>
                </div>
            }
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