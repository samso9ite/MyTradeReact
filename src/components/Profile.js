const Profile = () => {
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
                    <div class="grid grid-cols-12 gap-6">
                     </div>
                     <form data-single="true" action="/file-upload" class="dropzone">
                            <div class="fallback"> <input name="file" type="file" /> </div>
                            <div class="dz-message" data-dz-message>
                                <div class="text-lg font-medium">Upload Image</div>
                                {/* <div class="text-slate-500"> This is just a demo dropzone. Selected files are <span class="font-medium">not</span> actually uploaded. </div> */}
                            </div>
                             
                        </form>
                        <input type="text" className="form-control w-full" placeholder="" value="Ajayi Samson" disabled/> 
                        <input type="email" className="form-control w-full" placeholder="" value="samso9ite@gmail " disabled/> 
                     </div>
                    </div>
      </div>      
        </>
     );
}
 
export default Profile;