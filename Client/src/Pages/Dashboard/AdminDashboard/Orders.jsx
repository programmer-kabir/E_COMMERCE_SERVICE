import React, { useEffect, useState } from "react";
import AdminBreadcrumb from "../../../Components/Design/AdminBreadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckout } from "../../Redux/CheckOut/checkoutSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { RiPrinterFill } from "react-icons/ri";
import axios from "axios";
import toast from "react-hot-toast";
import Pagination from "react-js-pagination";
import ReactPaginate from "react-paginate";
import { MdDoubleArrow } from "react-icons/md";

const Orders = () => {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const { isLoading, checkouts } = useSelector((state) => state.checkouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckout());
  }, [dispatch]);
  const handleChange = (event) => {
    const email = checkouts?.find(
      (checkout) => checkout._id === event.target.id
    )?.email;
    setSelectedEmail(email);
    const data = {
      id: event.target.id,
      email: email,
      status: event.target.value,
    };
    axios
      .put(`${import.meta.env.VITE_LOCALHOST_KEY}/checkout`, data)
      .then((data) => {
        if (data.status == 200) {
          toast.success(`Now Order is ${data.data.status} `);
        }
      });
  };

  const pageCount = Math.ceil(checkouts.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the index of the first and last item for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = checkouts.slice(startIndex, endIndex);

  return (
    <section className="bg-[#F1F5F9] p-7 ">
      <div className="space-y-1">
        <h2 className="text-3xl font-medium">Orders</h2>
        <AdminBreadcrumb name={"orders"} />
      </div>
      <section
        className="  mt-10  rounded-md  bg-white px-7 py-12"
        style={{
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        }}
      >
        <div className="flex items-center justify-between pb-9">
          <div className="md:flex hidden px-2 py-1 rounded-md border w-64 gap-2 items-center">
            <AiOutlineSearch className="w-7 h-7" color="#64748b" />
            <input
              type="search"
              name=""
              className="w-full text-gray-700 text-sm focus:outline-none"
              placeholder="Search by invoice no"
            />
          </div>
          <div className="flex items-center gap-2">
            <p>Status:</p>
            <div>
              <label
                htmlFor="district"
                className="block bg-[#f5f5f8]   overflow-hidden  shadow-sm outline-none "
              >
                <select
                  id="district"
                  className="p-2 w-full border-none bg-transparent  placeholder-transparent text-base outline-none"
                >
                  <option value disabled>
                    Status
                  </option>
                  <option value="">Delivered</option>
                  <option value="">Pending</option>
                  <option value="">Processing</option>
                  <option value="">Cancel</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="overflow-x-scroll ">
          <table className="divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left ">
              <tr className="uppercase text-[#C5C8D4] text-[12px] font-semibold">
                <th className="whitespace-nowrap px-4 py-2  ">INVOICE NO</th>
                <th className="whitespace-nowrap px-8 py-2 ">CUSTOMER</th>
                <th className="whitespace-nowrap px-8 py-2 ">Email</th>
                <th className="whitespace-nowrap px-8 py-2 ">Product</th>
                <th className="whitespace-nowrap px-8 py-2 ">Transition No</th>
                <th className="whitespace-nowrap px-8 py-2 ">Product Price</th>
                <th className="whitespace-nowrap px-8 py-2 ">Total Price</th>
                <th className="whitespace-nowrap px-8 py-2 ">STATUS</th>
                <th className="whitespace-nowrap px-8 py-2 ">DATE</th>
                <th className="whitespace-nowrap px-8 py-2 ">ACTION</th>
                <th className="whitespace-nowrap px-8 py-2 ">INVOICE</th>
              </tr>
            </thead>

            <tbody className="divide-y text-[14px] divide-gray-200 text-black">
              {currentItems?.map((checkout) => (
                <tr key={checkout._id}>
                  <td className="px-5 py-2 font-normal ">
                    #{checkout?.invoiceId}
                  </td>

                  <td className="whitespace-nowrap font-semibold px-8 py-2">
                    {checkout?.firstName} {checkout?.lastName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {checkout?.email}
                  </td>
                  <td className="whitespace-nowrap px-8 py-2">
                    {checkout?.productId.length}
                  </td>
                  <td className="whitespace-nowrap px-8 py-2">
                    {checkout?.transaction}
                  </td>
                  <td className="whitespace-nowrap px-8 py-2">
                    {checkout?.productPrice}
                  </td>
                  <td className="whitespace-nowrap px-8 py-2">
                    {checkout?.totalPrice}
                  </td>
                  <td className="whitespace-nowrap   px-8 py-2">
                    <span
                      className={`px-3 font-semibold py-1 rounded-lg text-[11px] ${
                        checkout?.status === "Confirm Payment"
                          ? "bg-gray-200 text-[#555555]"
                          : checkout?.status === "cancel"
                          ? "bg-[#f1416c1a] text-[#F1416C]"
                          : checkout?.status === "pending"
                          ? "bg-[#ff98001a] text-[#ff9800]"
                          : checkout?.status === "delivered"
                          ? "bg-[#50cd891a] text-[#50cd89]"
                          : checkout?.status === "processing"
                          ? "bg-[#6366f11a] text-[#6366f1]"
                          : ""
                      }`}
                    >
                      {checkout?.status}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-8 py-2">
                    {checkout?.orderDate}
                  </td>
                  <td className="whitespace-nowrap px-8 py-2">
                    <div className="w-full">
                      <label
                        htmlFor="district"
                        className="block border  focus:border-gray-400  rounded overflow-hidden shadow-sm outline-none"
                      >
                        <select
                          id={checkout._id}
                          value={checkout?.status}
                          placeholder="select"
                          onChange={handleChange}
                          className="p-2 border-none bg-transparent  outline-none"
                        >
                          <option disabled>select</option>
                          <option value="delivered">Delivered</option>
                          <option value="pending">Pending</option>
                          <option value="processing">Processing</option>
                          <option value="cancel">Cancel</option>
                        </select>
                      </label>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-8 py-2">
                    <div className="flex items-center gap-4">
                      <IoEye className="bg-gray-200 p-2 rounded-md" size={38} />
                      <RiPrinterFill
                        className="p-2 rounded-md bg-gray-200"
                        size={38}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center my-4">
            <p className="text-sm">Showing 1 - 10 of {checkouts.length}</p>
            <ReactPaginate
              previousLabel={<MdDoubleArrow className="rotate-180" />}
              nextLabel={<MdDoubleArrow />}
              breakLabel={"..."}
              pageCount={pageCount}
              onPageChange={handlePageChange}
              className="flex items-center"
              containerClassName={"pagination"}
              activeClassName={"bg-[#F62977] text-white"}
              previousClassName={
                "w-[35px] h-[35px] flex items-center justify-center border border-gray-300 rounded-md mr-2"
              }
              nextClassName={
                "w-[35px] h-[35px] flex items-center justify-center border border-gray-300 rounded-md ml-2"
              }
              pageClassName={
                "w-[35px] h-[35px] flex items-center justify-center border border-gray-300 rounded-md mx-1"
              }
              disabledClassName={"text-gray-500 cursor-not-allowed"}
              breakClassName={"mx-2"}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Orders;
