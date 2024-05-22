import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import AdminBreadcrumb from "../../../../Components/Design/AdminBreadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchTShirt } from "../../../Redux/TShirt/tShirtSlice";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductList = () => {
  const { isLoading, TShirts, error } = useSelector((state) => state.TShirts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTShirt());
  }, []);
  console.log(TShirts);
  return (
    <section className="bg-[#F1F5F9] p-7 ">
      <div className="space-y-1">
        <h2 className="text-3xl font-medium">Product</h2>
        <AdminBreadcrumb name={"Product List"} />
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
              placeholder="Search by product name"
            />
          </div>
          <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <p>Status:</p>
            <div>
              <label
                htmlFor="status"
                className="block bg-[#f5f5f8] rounded   overflow-hidden  shadow-sm outline-none "
              >
                <select
                  id="status"
                  className="p-2 w-full border-none bg-transparent  placeholder-transparent text-base outline-none"
                >
                  <option value disabled>
                    Status
                  </option>
                  <option value="">Stock available</option>
                  <option value="">Stock Out</option>
                </select>
              </label>
            </div>
          </div>
          <Link to='../add-product'>
          
          <button className="secondaryButton w-32 py-2 rounded-md">Add Product</button>
          </Link>
          </div>
        </div>
        <div className="overflow-x-scroll">
          {/* {
TShirts.map(tShirt => <> 
<div>
  t
</div>
</>)
       } */}
          <table className="divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left ">
              <tr className="uppercase text-[#C5C8D4] text-[12px] font-semibold">
                <th className="whitespace-nowrap px-4 py-2  ">PRODUCT</th>
                <th className="whitespace-nowrap px-8 py-2 ">SKU</th>
                <th className="whitespace-nowrap px-8 py-2 ">Stock</th>
                <th className="whitespace-nowrap px-8 py-2 ">PRICE</th>
                <th className="whitespace-nowrap px-8 py-2 ">STATUS</th>
                <th className="whitespace-nowrap px-8 py-2 ">ACTION</th>
              </tr>
            </thead>

            <tbody className="divide-y text-[14px] divide-gray-200 text-black">
              {TShirts?.map((tShirt) => (
                <tr key={tShirt._id}>
                  <td className="whitespace-nowrap font-semibold px-8 py-2">
                    <div className="flex items-center gap-5">
                      <div className="w-[60px] ">
                        <img
                          className="w-full h-[60px] rounded-lg"
                          src={tShirt?.image[0]}
                          alt=""
                        />
                      </div>
                      <h2>{tShirt?.title}</h2>
                    </div>
                  </td>
                  <td className="whitespace-nowrap font-medium px-8 py-2">
                    {tShirt?.SKU}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {tShirt?.email}
                  </td>

                  <td className="whitespace-nowrap px-8 py-2">
                    TK {tShirt?.price}
                  </td>

                  <td className="whitespace-nowrap   px-8 py-2">
                    <span
                      className={`px-3 font-semibold py-1 rounded-lg text-[11px] ${
                        tShirt?.status === "Stock Out"
                          ? "bg-[#f1416c1a] text-[#F1416C]"
                          : tShirt?.status === "Stock available"
                          ? "bg-[#50cd891a] text-[#50cd89]"
                          : ""
                      }`}
                    >
                      {tShirt?.status}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-8 py-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#F62977] text-white p-2 rounded-md flex items-center justify-center ">
                        <FaEdit size={20} />
                      </div>
                      <div className="bg-[#F62977] text-white p-2 rounded-md flex items-center justify-center ">
                        <FaTrash size={19} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default ProductList;
