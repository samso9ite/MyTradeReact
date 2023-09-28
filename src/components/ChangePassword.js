import { useState } from "react";

const ChangePassword = () => {
// const [state, setState] = useState(
//     {
//         old_pwd: '',
//         new_pwd: '',
//         confirm_pwd: '',
//         pwd_validation: false
//     }
// )
// const oldPwdHandler = (event) => {
//     setState(...state, {old_pwd:event.target.value})
// }
// const newPwdHandler = (event) => {
//     setState(...state, {new_pwd:event.target.value})
// }
// const confirmPwdHandler = (event) => {
//     setState(...state, {confirm_pwd:event.target.value})
// }

const [newPwd, setNewPwd] = useState('')
const [oldPwd, setOldPwd] = useState('')
const [confirmPwd, setConfirmPwd] = useState('')
const [pwdValidation, setPwdValidation] =  useState(false)

const oldPwdHandler = (event) => {
    setOldPwd(event.target.value)
}
const newPwdHandler = (event) => {
    setNewPwd(event.target.value)
}
const confirmPwdHandler = (event) => {
    setConfirmPwd(event.target.value)
}

const submitPwdHandler = () => {
    if(newPwd === confirmPwd){
        const formData = {
            // new_pwd
        }

    }else{
        setPwdValidation(true)
        setNewPwd('')
        setOldPwd('')
        setConfirmPwd('')
    }
}

    return ( 
        <>
            <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
                <div class="intro-y box lg:mt-5">
                    <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 class="font-medium text-base mr-auto">
                            Change Password
                        </h2>
                    </div>
                    <div class="p-5">
                        { pwdValidation && <div class="alert alert-danger-soft alert-dismissible show flex items-center mb-2" role="alert"> 
                                <i data-lucide="alert-octagon" class="w-6 h-6 mr-2"></i> Password Mismatch
                                <button type="button" class="btn-close" data-tw-dismiss="alert" aria-label="Close"> x </button>
                            </div>
                        }
                        <div>
                            <label for="change-password-form-1" class="form-label">Old Password</label>
                            <input id="change-password-form-1" type="password" class="form-control" placeholder="Input text" onChange={oldPwdHandler} />
                        </div>
                        <div class="mt-3">
                            <label for="change-password-form-2" class="form-label">New Password</label>
                            <input id="change-password-form-2" type="password" class="form-control" placeholder="Input text" onChange={newPwdHandler} />
                        </div>
                        <div class="mt-3">
                            <label for="change-password-form-3" class="form-label">Confirm New Password</label>
                            <input id="change-password-form-3" type="password" class="form-control" placeholder="Input text" onChange={confirmPwdHandler} />
                        </div>
                        <button type="button" class="btn btn-primary mt-4" onClick={submitPwdHandler} >Change Password</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ChangePassword;