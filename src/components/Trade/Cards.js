import GiftcardBox from "../GiftcardBox";

const Cards = () => {
    return(
        <>
            <h2 class="intro-y text-lg font-medium mt-10">
                All Gift Cards
            </h2>
            <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                    <div class="w-56 relative text-slate-500">
                        <input type="text" class="form-control w-56 box pr-10" placeholder="Search..." />
                        <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                    </div>
                </div>
            </div>
            <GiftcardBox />
        </>
    )
}

export default Cards;