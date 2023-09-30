import { useSelector } from "react-redux"
import MainLayout from "../../components/layout/admin/MainLayout"

const Users = () => {
    const users = useSelector(state => state.users.usersList)
    console.log(users);

    return(
        <MainLayout>
            <div class="content">
                    <h2 class="intro-y text-lg font-medium mt-10">
                        All Users
                    </h2>
                    <div class="grid grid-cols-12 gap-6 mt-5">
                        <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                            <div class="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
                            <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                                <div class="w-56 relative text-slate-500">
                                    <input type="text" class="form-control w-56 box pr-10" placeholder="Search..." />
                                    <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                                </div>
                            </div>
                        </div>
                        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
                            <table class="table table-report -mt-2">
                                <thead>
                                    <tr>
                                        <th class="whitespace-nowrap">Name</th>
                                        <th class="whitespace-nowrap">Email</th>
                                        <th class="text-center whitespace-nowrap">Phone</th>
                                        <th class="text-center whitespace-nowrap">Transactions</th>
                                        <th class="text-center whitespace-nowrap">Pending Amount</th>
                                        <th class="text-center whitespace-nowrap">Available Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.map((user) => (
                                             <tr class="intro-x">
                                             <td class="w-40">
                                                <p>{user.fullname}</p>
                                             </td>
                                             <td>
                                                 <p>{user.email}</p>
                                             </td>
                                             <td class="text-center">{user.phone}</td>
                                             <td class="w-40">
                                                 <p>{user.card_transactions.length}</p>
                                             </td>
                                             <td class="table-report__action w-56">
                                                <p>{user.pendingAmount}</p>
                                             </td>
                                             <td class="table-report__action w-56">
                                                 <p>{user.availableAmount}</p>
                                              </td>      
                                         </tr>
                                    ))
                                }
                                    
                                </tbody>
                            </table>
                        </div>

                        <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                            <nav class="w-full sm:w-auto sm:mr-auto">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                    </li>
                                    <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                    <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                                    <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
                                    <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                                    <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                    </li>
                                </ul>
                            </nav>
                            <select class="w-20 form-select box mt-3 sm:mt-0">
                                <option>10</option>
                                <option>25</option>
                                <option>35</option>
                                <option>50</option>
                            </select>
                        </div>
                    </div>
                    
                    <div id="delete-confirmation-modal" class="modal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body p-0">
                                    <div class="p-5 text-center">
                                        <i data-lucide="x-circle" class="w-16 h-16 text-danger mx-auto mt-3"></i> 
                                        <div class="text-3xl mt-5">Are you sure?</div>
                                        <div class="text-slate-500 mt-2">
                                            Do you really want to delete these records? 
                                            <br />
                                            This process cannot be undone.
                                        </div>
                                    </div>
                                    <div class="px-5 pb-8 text-center">
                                        <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                        <button type="button" class="btn btn-danger w-24">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </MainLayout>
    )
}

export default Users