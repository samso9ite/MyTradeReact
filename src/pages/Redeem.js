import GiftCardBox from "../components/GiftcardBox";
import MainLayout from "../components/layout/MainLayout";

const RedeemPage = () => {
    return ( 
        <>
            <MainLayout >
                <div class="content">
                    <h2 class="intro-y text-lg font-medium mt-10">
                        All Gift Cards
                    </h2>
                    <div class="grid grid-cols-12 gap-6 mt-5">
                        <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                          
                            <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                                <div class="w-56 relative text-slate-500">
                                    <input type="text" class="form-control w-56 box pr-10" placeholder="Search..." />
                                    <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                                </div>
                            </div>
                        </div>
                        <div class="intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                            <GiftCardBox />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
     );
}
 
export default RedeemPage;