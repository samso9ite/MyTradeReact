import ChangePassword from "../components/ChangePassword";
import MainLayout from "../components/layout/MainLayout";
import ProfileNav from "../components/layout/ProfileNav";

const Settings = () => {
    return ( <>
        <MainLayout>
        <div class="content">
                    <div class="intro-y flex items-center mt-8">
                        <h2 class="text-lg font-medium mr-auto">
                            Change Password
                        </h2>
                    </div>
                    <div class="grid grid-cols-12 gap-6">
                        <ProfileNav />
                        <ChangePassword />
                    </div>
                </div>
        </MainLayout>
    </> );
}
 
export default Settings