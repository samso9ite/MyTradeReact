import {useSelector} from 'react-redux'

const Banks = () => {
    const details = useSelector(state => state.accountInfo.accountDetails)
    console.log(details);
    return ( <>
        <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
            <div class="intro-y box lg:mt-5">
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 class="font-medium text-base mr-auto">
                        Bank Accounts
                    </h2>
                </div>
                <div class="p-5">
                    <div class="grid grid-cols-12 gap-6">
                     
                        <div class="col-span-12 lg:col-span-6 2xl:col-span-6  box p-8 relative overflow-hidden bg-primary intro-y" style={{backgroundImage:'url("../../dist/images/cardBG.png")',  backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                                }}
                            >
                            <div class="leading-[2.15rem] w-full sm:w-72 text-white text-xl -mt-3">{details.accountInfo[0].name}</div>
                            <div class="w-full sm:w-72 leading-relaxed text-white/70 text-xl     mt-3 mb-3"><strong>{details.accountInfo[0].bank_name}</strong></div>
                            <div class="leading-[2.15rem] w-full sm:w-72 text-white text-xl -mt-3 mb-5">{details.accountInfo[0].number}</div>
                            <button class="btn box flex items-center text-slate-600 dark:text-slate-300">  Delete </button>
                        </div>  
                    </div>
                    
                </div>
            </div>
        </div>
    </> );
}
 
export default Banks;