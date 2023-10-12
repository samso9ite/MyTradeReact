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
                    

            </div>
        </MainLayout>
    )
}

export default Users