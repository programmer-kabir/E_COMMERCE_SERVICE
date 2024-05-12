import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
import toast from "react-hot-toast";
const Tabs = ({ TShirt }) => {
  const [activeTab, setActiveTab] = useState("description");
  //   Ratting
  const [rating, setRating] = useState(0);
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  //   Ratting
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const getRatingText = () => {
    switch (rating) {
      case 1:
        return "Very Bad 😢";
      case 2:
        return "Bad 😞";

      case 3:
        return "Average 😐";

      case 4:
        return "Satisfactory 😊";

      case 5:
        return "Very Good 😄";

      default:
        return "";
    }
  };
  const [reviewsNotes, setReviewsNotes] = useState("");
  const [questionNotes, setQuestionNotes] = useState("");
  //   console.log(questionNotes);
  const handleClear = () => {
    toast.success("Your Not is Clear");
    setReviewsNotes("");
  };
  // console.log(rating,reviewsNotes);
  const handleReviews = () => {
    const userReviews = {
      productId: TShirt._id,
      ratting: rating,
      reviews: reviewsNotes,
    };

    console.log(userReviews);
  };
  return (
    <div>
      <div className="w-full pt-10">
        <div className="border-gray-200 ">
          <nav className=" border-b-2 -mb-px flex gap-6" aria-label="Tabs">
            <button
              className={`shrink-0   px-1 pb-4 font-semibold ${
                activeTab === "description"
                  ? "border-[#F62977] border-b-2 primaryColor"
                  : "border-gray-300 text-gray-500"
              }`}
              onClick={() => changeTab("description")}
            >
              Description
            </button>

            <button
              className={`shrink-0  px-1 pb-4 font-semibold ${
                activeTab === "reviews"
                  ? "border-[#F62977] border-b-2 primaryColor"
                  : "border-gray-300 text-gray-500"
              }`}
              onClick={() => changeTab("reviews")}
            >
              Customer Reviews{" "}
              <span className="text-base">
                {/* ({DetailsShoes?.reviews?.length}) */}sf
              </span>
            </button>
          </nav>
          {activeTab === "description" && (
            <div className="py-4">
              <div className="space-y-2 grid grid-cols-2">
                {TShirt.productDescription.map((description, index) => (
                  <div key={index}>{description}</div>
                ))}
              </div>
              <p className="text-red-500 font-semibold pt-5">
                N.B:{" "}
                <span className="font-medium">
                  Please check the size chart and select your size before
                  placing <br />
                  order.
                </span>
                <br />
                <span className="font-medium">
                  {" "}
                  Product delivery duration may vary due to product availability
                  in <br />
                  stock.
                </span>
                <br />
                Disclaimer:{" "}
                <span className="font-medium">
                  The actual color of the physical product may slightly <br />{" "}
                  vary due to the deviation of lighting sources, photography or
                  your <br /> device display settings.
                </span>
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="py-4 w-full ">
              {/* Review Show */}
              <div className="">
                <div className="border-b ">SFAF</div>
              </div>
              <div className="pt-5">
                <h2 className="text-2xl text-center font-semibold">
                  Submit Your Review
                </h2>
              </div>
              <div className="flex items-center justify-center pb-2 pt-8 gap-2">
                <p className="text-gray-600 -mb-3">
                  Your Rating Of This Product :
                </p>
                <Rating
                  emptySymbol={<AiFillStar color="#D6D6D6" size={40} />}
                  placeholderSymbol={<AiFillStar color="#FF9933" size={40} />}
                  fullSymbol={<AiFillStar color="#FF9933" size={40} />}
                  onChange={handleRatingChange}
                  initialRating={rating}
                />
                {rating > 0 && (
                  <p className="pl-2 text-xl font-medium">{getRatingText()}</p>
                )}
              </div>

              {/* your reviews */}
              <div>
                <div className="overflow-hidden  rounded p-2 border border-gray-200 shadow-sm ">
                  <textarea
                    id="reviewsNotes"
                    className="w-full outline-none text-base resize-none border-none align-top "
                    rows="4"
                    value={reviewsNotes}
                    onChange={(e) => setReviewsNotes(e.target.value)}
                    placeholder="Enter any additional order notes..."
                  ></textarea>

                  <div className="flex items-center justify-end gap-2 bg-white p-3">
                    <button
                      onClick={handleClear}
                      type="button"
                      className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                    >
                      Clear
                    </button>

                    <button
                      type="button"
                      onClick={handleReviews}
                      className="rounded bg-[#439DDF] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1e4a69]"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
