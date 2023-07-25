import { json } from "react-router-dom";
import Api from "../Api";
import AuthForm from "../components/Forms/AuthForm";


const Authentication = () => {
    return ( 
        <>
        <body className="login">
            <div className="container sm:px-10">
                <div className="block xl:grid grid-cols-2 gap-4">
                    <div className="hidden xl:flex flex-col min-h-screen">
                        <div className="mt-5">
                            <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10" style={{marginTop: "30%"}}>
                                <img src="./dist/images/coin/logo.svg" width="50%"/>
                                A few more clicks to 
                                <br />
                                sign up to your account.
                            </div>
                            <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">Manage all your e-commerce accounts in one place</div>
                        </div>
                    </div>
                   <AuthForm />         
                </div>
            </div>
            </body>
        </>
     );
}
 
export default Authentication;

export async function action({request}){
    let searchParams = new URL(request.url).searchParams;
      console.log(searchParams);
    const mode = searchParams = searchParams.get('mode') || 'login';
    console.log(mode);
    // Throw error if the mode matches neither login or register 
    if(mode !== 'login' && mode !== 'register'){
        throw json({message: "Unsupported Mode"}, {status: 422})
    };

    // Get user data from form data
    const data = await request.formData()
    console.log(data);
    let authData = {}
    if (mode === 'login'){
        authData = {
            email: data.get('email'),
            password: data.get('password')
        }
    } else if(mode === 'register'){ 
        authData = {
            username: data.get('username'),
            fullname: data.get('fullname'),            
            email: data.get('email'),
            password: data.get('password'),
            phone: data.get('phone')
        }
    }
    console.log(authData);

    // Send request to login
    const response = await Api.axios_instance.post(Api.baseUrl+'user/'+mode, authData)
    if(response.status === 422 || response.status === 401){
        return response
    }  

    if(!response.ok){
        throw json({message:'Couldn\'t Authenticate User'}, {status: '500'})
    }

    const resData = resData.json()
    console.log(resData);
}