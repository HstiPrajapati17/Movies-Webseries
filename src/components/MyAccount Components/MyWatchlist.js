import React from "react";
import WatchlistEmpty from "../Assets/Images/WatchlistEmpty.png";
import stranger_thing from "../Assets/Images/StrangerThings3.png";
import Criminal_justice from "../Assets/Images/criminal_justice.png";
import Drishyam from "../Assets/Images/drishyam.png";

// Dummy data (replace this with actual state or props)
const dummyWatchlist = [
  {
    id: 1,
    title: "Stranger Things",
    image: stranger_thing,
  },
  {
    id: 2,
    title: "Criminal Justice",
    image: Criminal_justice ,
  },
  {
    id: 3,
    title: "Drishyam",
    image: Drishyam ,
  },
];

const MyWatchlist = () => {
  const watchlist = dummyWatchlist; // replace this with actual state from context, redux, etc.

  return (
    <div className="my-watchlist bg-[#141414] p-[30px] min-h-[65vh] border-[2px] border-white/20 rounded">
      {watchlist.length === 0 ? (
        <div className="empty-part flex flex-col justify-center items-center h-full">
          <img
            src={WatchlistEmpty}
            alt="Empty Watchlist"
            className="w-[115px] mb-2"
          />
          <p className="text-[14px] sm:text-[18px] text-white">
            Your watchlist is currently empty.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {watchlist.map((item) => (
            <div key={item.id} className="text-white text-center">
              <img
                src={item.image}
                alt={item.title}
                className="rounded w-full h-auto mb-2"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyWatchlist;
