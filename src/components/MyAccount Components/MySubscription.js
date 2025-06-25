import React from "react";
import WatchlistEmpty from "../Assets/Images/WatchlistEmpty.png";
import stranger_thing from "../Assets/Images/StrangerThings3.png";
import Criminal_justice from "../Assets/Images/criminal_justice.png";
import Drishyam from "../Assets/Images/drishyam.png";

// Dummy data (replace this with actual state or props)
const dummysubscription = [
  {
    id: 1,
	plan: "Basic Plan",
	description : "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
	time : "21 Sep, 2020 (06:32 pm) to 21 Oct, 2020 (06:32 pm) ",
	price: "$ 9.99",
	status: "Active"
  },
  {
    id: 2,
	plan: "Basic Plan",
	description : "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
	time : "21 Sep, 2020 (06:32 pm) to 21 Oct, 2020 (06:32 pm) ",
	price: "$ 9.99",
	status: "Expired"
  },
];

const MySubscription = () => {
  const subscription = dummysubscription; // replace this with actual state from context, redux, etc.

  return (
    <div className="my-subscription bg-[#141414] p-[18px] sm:p-[30px] min-h-[65vh] border-[2px] border-white/20 rounded">
      {subscription.length === 0 ? (
        <div className="empty-part flex flex-col justify-center items-center h-full">
          <p className="text-[14px] sm:text-[18px] text-white">
            Oops! You're not subscribed yet.
          </p>
        </div>
      ) : (
        <div className="">
          {subscription.map((item, status) => (
                <div
                  key={item}
                  className="bg-[#141414] border-[2px] border-white/20 rounded-lg py-[20px] px-[20px] sm:px-[36px] mb-4"
                >
                  <div className="flex justify-between items-start sm:items-center mb-[12px] gap-2">
                    <h4 className="text-white text-[18px] sm:text-[20px] font-medium">
                     {item.plan}
                    </h4>
                    <span
                      className={`px-2 py-1 text-xs rounded-[2px] font-medium ${
                        item.status === "Active" ? "text-green-700" : "text-red-700"
                      } bg-white`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 font-light mb-2">
                    {item.description}
                  </p>
                  <p className="text-sm text-white/60 font-light mb-2 ">
				  {item.time}
                  </p>
                  <div className="text-white text-[18px] sm:text-[20px] font-medium mt-4 mr-[2px]">
                    {item.price}
                    <span className="text-[14px] text-white/60 font-normal">
                       /month
                    </span>
                  </div>
                </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySubscription;
