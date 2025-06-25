import React from "react";
import { FaTv } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdLaptopMac } from "react-icons/md";

const LoggedDevice = () => {
  const thisDevice = {
    name: "Chrome Browser on Windows",
    lastUsed: "Today",
    icon: <MdLaptopMac className="text-white text-xl mt-[2px]" />,
  };

  const otherDevices = [
    {
      name: "Android TV",
      lastUsed: "2 month ago",
      icon: <FaTv className="text-white text-xl mt-[2px]" />,
    },
    {
      name: "Khushi Patel Vivo Y50",
      lastUsed: "2 month ago",
      icon: (
        <HiOutlineDevicePhoneMobile className="text-white text-xl mt-[2px]" />
      ),
    },
  ];

  return (
    <div className="logged-device p-[0px] sm:p-6 text-white space-y-8 min-h-screen">
      {/* This Device */}
      <div>
        <h2 className="text-lg font-semibold mb-4">This Device</h2>
        <div className="bg-[#141414] p-[12px] sm:p-4 rounded border-[2px] border-white/20 flex items-center justify-between flex-wrap">
          <div className="flex items-start gap-[8px] mb-[12px]">
            {thisDevice.icon}
            <div>
              <p className="font-medium mb-1">{thisDevice.name}</p>
              <p className="text-sm text-white/50">
                Last Used : {thisDevice.lastUsed}
              </p>
            </div>
          </div>
          <button className="bg-[#2a2a2a] text-[#ff0000] px-[65px] py-2 rounded hover:bg-[#333]">
            Logout
          </button>
        </div>
      </div>

      {/* Other Devices */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Other Device</h2>
        <div className="space-y-4">
          {otherDevices.map((device, index) => (
            <div
              key={index}
              className="bg-[#141414] p-[12px] sm:p-4 rounded border-[2px] border-white/20 flex items-center justify-between flex-wrap"
            >
              <div className="flex items-start gap-[8px] mb-[12px]">
                {device.icon}
                <div>
                  <p className="font-medium mb-1">{device.name}</p>
                  <p className="text-sm text-white/50">
                    Last Used : {device.lastUsed}
                  </p>
                </div>
              </div>
              <button className="bg-[#2a2a2a] text-[#ff0000] px-[65px] py-2 rounded hover:bg-[#333]">
                Logout
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoggedDevice;
