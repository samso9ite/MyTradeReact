import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Api from "../Api";
import { ToastContainer, toast } from 'react-toastify';
import ImageUploading from 'react-images-uploading';
import axios from "axios";

const Profile = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] =  useState('')
    const [username, setUsername] = useState('')
    const [imageUrl, setImageUrl] =  useState('')
    const [image, setImage] =  useState('')
    const [isLoading, setIsLoading] = useState(false)
    const details = useSelector(state => state.accountInfo.accountDetails.data)
    const [images, setImages] = useState([]);
    const maxNumber = 1;
    
    useEffect(() => {
        setName(details.fullname);
        setEmail(details.email);
        setPhone(details.phone);
        setUsername(details.username)
    }, [])

    const onChange = (imageList) => {
        setImages(imageList);
      };

    const submitHandler = async () => {
        setIsLoading(true)
        const response = await Promise.all((images.map( async(image) => {
            const formData = new FormData();
            formData.append('image', image.file);
            const response = await axios.post('https://api.imgur.com/3/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: 'Client-ID c383bbc6a421d53',
                }
            });
            return response.data.data.link;
        })
        ))
        const data = {
            image: response
        }
        Api.axios_instance.post(Api.baseUrl+'/user/image/add', data)
        .then(res => {
            toast.success('Account Updated Successfully', {
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
                        {/* <center> <img alt="Profile Image" class="rounded-full mb-5"  style={{width: '100px', marginBotton:'20px'}} src={process.env.PUBLIC_URL + '/dist/images/avatar.png'} />  </center>  */}
          
                       <div> 
                            <ImageUploading
                                    multiple
                                    value={images}
                                    onChange={onChange}
                                    maxNumber={maxNumber}
                                    dataURLKey="data_url"
                                >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (
                                    // write your building UI
                                    <center>
                                    <div className="upload__image-wrapper" class="dropzone">
                                        <button
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                        >
                                        <div class="col-span-12 sm:col-span-12 lg:col-span-2 xl:col-span-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="cloud-rain" data-lucide="cloud-rain" class="lucide lucide-cloud-rain block mx-auto"><path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg> 
                                                <div class="text-center text-l mt-2">Click or Drop Profile Image Here</div>
                                            </div>
                                        </button>
                                        {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                            <button class="btn btn-default" onClick={() => onImageUpdate(index)}>Update</button>
                                            <button  onClick={() => onImageRemove(index)} style={{color:'red'}}>Remove</button>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                    </center>
                                )}
                            </ImageUploading>
                            <div class="grid grid-cols-2 gap-6 mt-10">
                                <input type="text" className="form-control w-full" placeholder="Full name" value={name} disabled />
                                <input type="text" className="form-control w-full" placeholder="Username" value={username} disabled />
                                <input type="email" className="form-control w-full" placeholder="Email" value={email} disabled />
                                <input type="number" className="form-control w-full" placeholder="Phone" value={phone} disabled />
                                
                            </div>
                        </div>
                    </div>
                    <center><button type="submit" class="btn btn-primary large mr-1 mb-10 mt-10" disabled={isLoading} onClick={submitHandler}> {isLoading ? 'Updating Details' : 'Update Details'} </button></center>
                    <ToastContainer />
                </div>
            </div>      
        </>
     );
}
 
export default Profile;