import { Form, Link, useSearchParams, useActionData, useNavigation} from "react-router-dom";


const RegisterForm = () => {
    const [searchParams] = useSearchParams();
    const isRegister = searchParams.get('mode') === 'register';
    const data = useActionData()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    return ( 
        <Form method="post">
                <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left mt-10">
                        {isRegister ? 'Register' : 'Sign In'}       
                    </h2>
                   {isRegister && <div className="intro-x mt-2 text-slate-400 dark:text-slate-400 xl:hidden text-center">A few more clicks to sign in to your account.</div> }
                   
                    <div className="intro-x mt-8">
                        {/* Adding error notification */}
                           {data && data.status === false && <div class="alert alert-danger-soft alert-dismissible show flex items-center mb-2" role="alert"> 
                                <i data-lucide="alert-octagon" class="w-6 h-6 mr-2"></i> {data.message}
                                <button type="button" class="btn-close" data-tw-dismiss="alert" aria-label="Close"> x </button>
                            </div>}
                        {/* End of error notification */}
                        {isRegister && <input type="text" className="intro-x login__input form-control py-3 px-4 block" name="fullname" placeholder="Full name" /> }
                        {isRegister &&  <input type="text" className="intro-x login__input form-control py-3 px-4 block mt-4" name="username" placeholder="Username" /> }
                        {isRegister &&  <input type="number" className="intro-x login__input form-control py-3 px-4 block mt-4" name="phone_number" placeholder="Phone Number" /> }
                        <input type="text" className="intro-x login__input form-control py-3 px-4 block mt-4" name="email" id="email" placeholder="Email" />
                        <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" name="password" id="password" placeholder="Password" />
                        {isRegister && <input type="text" className="intro-x login__input form-control py-3 px-4 block mt-4" name="confirm_password" placeholder="Password Confirmation" /> }
                    </div>
                    { isRegister && <div className="intro-x flex items-center text-slate-600 dark:text-slate-500 mt-4 text-xs sm:text-sm">
                        <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
                        <label className="cursor-pointer select-none" for="remember-me">I agree to Mytrade</label>
                        <a className="text-primary dark:text-slate-200 ml-1" href="">Privacy Policy</a>. 
                    </div>}

                    {!isRegister &&  <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                        <div className="flex items-center mr-auto">
                            <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
                            <label className="cursor-pointer select-none" for="remember-me">Remember me</label>
                        </div>
                        <a href="">Forgot Password?</a> 
                    </div>}

                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" disabled={isSubmitting}> {isSubmitting ? 'Submitting...' : 'Submit'}</button> 
                        <Link to={`?mode=${isRegister ? 'login' : 'register'}`}> <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">{isRegister ? 'Login' : 'Register'}</button></Link>
                    </div>
                </div>
            {/* </div>   */}
        </Form>
     );
}
 
export default RegisterForm;    

