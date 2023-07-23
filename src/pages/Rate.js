import GetRate from "../components/layout/GetRate";
import MainLayout from "../components/layout/MainLayout";
import RateCalculator from "../components/RateCalculator";

const RatePage = () => {
    return ( 
        <>
        <MainLayout>
            <div class="content">
                <div class="intro-y flex items-center mt-8">
                    <h2 class="text-lg font-medium mr-auto">
                        Rates
                    </h2>
                </div>
                <div class="grid grid-cols-12 gap-6 mt-5">
                    <RateCalculator/> <GetRate />
                </div>
            </div>
        </MainLayout>
        </>
     );
}
 
export default RatePage
