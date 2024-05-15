import React, { useEffect } from "react";
import AdminBreadcrumb from "../../../Components/Design/AdminBreadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckout } from "../../Redux/CheckOut/checkoutSlice";

const Orders = () => {
    const { isLoading, checkouts } = useSelector((state) => state.checkouts);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchCheckout());
    }, [dispatch]);
  console.log(checkouts);
  return (
    <section className="bg-[#F1F5F9] p-7">
      <div className="space-y-1">
        <h2 className="text-3xl font-medium">Orders</h2>
        <AdminBreadcrumb name={"orders"} />
      </div>
      <section className="overflow-x-scroll">
        <table className="divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left ">
            <tr className="uppercase text-[#C5C8D4] text-[12px] font-semibold">
              <th className="whitespace-nowrap px-4 py-2  ">INVOICE NO</th>

              <th className="whitespace-nowrap px-4 py-2 ">CUSTOMER</th>
              <th className="whitespace-nowrap px-4 py-2 ">Product</th>
              <th className="whitespace-nowrap px-4 py-2 ">Transition No</th>
              <th className="whitespace-nowrap px-4 py-2 ">Product Price</th>
              <th className="whitespace-nowrap px-4 py-2 ">Total Price</th>
              <th className="whitespace-nowrap px-4 py-2 ">STATUS</th>
              <th className="whitespace-nowrap px-4 py-2 ">DATE</th>
              <th className="whitespace-nowrap px-4 py-2 ">ACTION</th>
              <th className="whitespace-nowrap px-4 py-2 ">INVOICE</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {/* {users?.map((User) => (
              <tr key={User._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium">
                  {User.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {User?.email}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {User?.role ? User?.role : "User"}
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <div className="flex gap-2">
                    <span
                      onClick={() => handleMakeAdmin(User)}
                      className="inline-flex items-center gap-1 rounded-full bg-cyan-200 hover:bg-cyan-400 hover:text-gray-600 transition-colors duration-500 px-2 py-1 text-xs font-semibold  text-cyan-600"
                    >
                      {User.role === "admin" ? "admin" : <>Make Admin</>}
                    </span>
                    {User.role === "admin" ? (
                      <span
                        onClick={() => handleMakeAdmin(User)}
                        className="inline-flex items-center gap-1 rounded-full bg-cyan-200 hover:bg-cyan-400 hover:text-gray-600 transition-colors duration-500 px-2 py-1 text-xs font-semibold  text-cyan-600"
                      >
                        {User.role === "admin" ? <>Make User</> : ""}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Orders;
