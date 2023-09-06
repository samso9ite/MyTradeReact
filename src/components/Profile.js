import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Api from "../Api";
import { ToastContainer, toast } from 'react-toastify';


const Profile = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] =  useState('')
    const [username, setUsername] = useState('')
    const [imageUrl, setImageUrl] =  useState('')
    const [image, setImage] =  useState('')
    const [isLoading, setIsLoading] = useState(false)
    const details = useSelector(state => state.accountInfo.accountDetails.data)
    console.log(details);

    useEffect(() => {
        setName(details.fullname);
        setEmail(details.email);
        setPhone(details.phone);
        setUsername(details.username)
    }, [])

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        console.log(file);
        setImage(file)
        if (file) {
            setImageUrl(URL.createObjectURL(file));
            console.log(imageUrl);
          }
    }
    const submitHandler = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const formData = new FormData();
        formData.append('image', JSON.stringify(imageUrl))
        Api.axios_instance.post(Api.baseUrl+'/user/image/add', formData)
        .then(res => {
            toast.success('Bank Added Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
            console.log(res.data);
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return ( 
        <>
            <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
                <div class="intro-y box lg:mt-5">
                    <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 class="font-medium text-base mr-auto">
                        Account Info
                        </h2>
                    </div>
                    <div class="p-5">
                        <center> <img alt="Profile Image" class="rounded-full mb-5"  style={{width: '100px', marginBotton:'20px'}} src={process.env.PUBLIC_URL + '/dist/images/avatar.png'} />  </center> 
                       <form encType="multpart/form-data" onSubmit={submitHandler}> 
                        <input type="file" className="form-control w-full mb-10" placeholder="Upload Image" onChange={handleImageChange} />
                       
                            <div class="grid grid-cols-2 gap-6">
                                <input type="text" className="form-control w-full" placeholder="Full name" value={name} disabled />
                                <input type="text" className="form-control w-full" placeholder="Username" value={username} disabled />
                                <input type="email" className="form-control w-full" placeholder="Email" value={email} disabled />
                                <input type="number" className="form-control w-full" placeholder="Phone" value={phone} disabled />
                                
                            </div>
                        </form>
                    </div>
                    <center><button type="submit" class="btn btn-primary large mr-1 mb-10 mt-10" disabled={isLoading} onClick={submitHandler}> {isLoading ? 'Updating Details' : 'Update Details'} </button></center>
                    <ToastContainer />
                </div>
            </div>      
        </>
     );
}
 
export default Profile;