import { useEffect, useState } from "react";
import { json, redirect, useActionData, useNavigate, useSearchParams } from "react-router-dom";
import Api from "../Api";
import AuthForm from "../components/Forms/AuthForm";
import { useDispatch } from "react-redux";
import {fetchApprovedTransactions, fetchPaidTransactions, fetchPendingTransactions} from "../store/admin/transactions-base-slice"
import { authActions } from "../store/auth-slice";
import { fetchUsers } from "../store/admin/users-slice";



const Authentication = () => {
    const dispatch = useDispatch()
    const data = useActionData()
    const navigate = useNavigate()
    let [searchParams] = useSearchParams()
    let mode = searchParams = searchParams.get('mode') || 'login'
    
    // Dispatch an action that stores user details and token in store
    useEffect(() => {
        if(data && data.status){
            if (searchParams === 'login'){
                dispatch(authActions.storeUserDetails({
                    userDetails: data.data
                }))
                // Navigate to dashboard after storing retrieved userdetails in store
               if(data.data.email == 'jouslaw@hotmail.com'){
                    localStorage.setItem('isAdmin', true)
                    dispatch(fetchUsers())
                    dispatch(fetchPendingTransactions())
                    dispatch(fetchPaidTransactions())
                    dispatch(fetchApprovedTransactions())
                    navigate('/admin')
               }else{
                 navigate('/')
               }
            } else if(searchParams === 'register'){
                localStorage.setItem('email', data.data)
                navigate(`?mode=${'activation'}`)
            }   
        } 
    }, [data])

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
                           
                        </div>
                    </div>
                    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0" style={{marginTop:"20%"}}>
                        <AuthForm />   
                   </div>      
                </div>
            </div>
            </body>
        </>
     );
}
 
export default Authentication;

export async function action({request}){
    let searchParams = new URL(request.url).searchParams;
    const mode = searchParams = searchParams.get('mode') || 'login';
    console.log(mode);
    // Throw error if the mode matches neither login or register 
    // if(mode !== 'activate' || mode !== 'register' || mode !== 'login'){
    //     throw json({message: "Unsupported Mode"}, {status: 422})
    // };

    // Get user data from form data
    const data = await request.formData()
    let authData = {}
    let userType = 'user'
    if (mode === 'login'){
        if(data.get('email') === 'jouslaw@hotmail.com'){
            userType = 'admin'
        }else{
            userType = 'user'
        }
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
            phone: data.get('phone_number')
        }
    }
    // Sending request and returning response
    return Api.axios_instance.post(Api.baseUrl+userType+'/'+mode, authData)
    .then(res => {
        sessionStorage.setItem('token', res.data.token)
        return res.data

    }).catch((err) => {
        return err.response.data
    })
 
}   