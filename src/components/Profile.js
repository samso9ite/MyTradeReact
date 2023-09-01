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
                    <div class="grid grid-cols-2 gap-6">
                        <h1 class="font-medium text-base mr-auto m-3" style={{fontSize:'20px'}}>Name: Ajayi Samson Aduragbemi</h1>
                        <h1 class="font-medium text-base mr-auto m-3" style={{fontSize:'20px'}}>Username: Ajayi Samson Aduragbemi</h1>
                        <h1 class="font-medium text-base mr-auto m-3" style={{fontSize:'20px'}}>Email: Ajayi Samson Aduragbemi</h1>
                        <h1 class="font-medium text-base mr-auto m-3" style={{fontSize:'20px'}}>Phone: Ajayi Samson Aduragbemi</h1>
                        
                        <img alt="Profile Image" class="rounded-full"  style={{width: '100px'}} src={process.env.PUBLIC_URL + '/dist/images/avatar.png'} />
                     </div>
                  
                      
                     </div>
                    </div>
      </div>      
        </>
     );
}
 
export default Profile;