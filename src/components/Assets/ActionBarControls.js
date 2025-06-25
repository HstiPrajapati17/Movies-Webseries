import React, { useEffect, useRef, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";
import { LuVolume2 } from "react-icons/lu";
import { MdOutlineSpeed, MdPreview } from "react-icons/md";

export const SpeedMenu = () => {
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  const speedMenuRef = useRef(null);

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    setShowSpeedMenu(false);
    const video = document.querySelector("video");
    if (video) video.playbackRate = speed;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        speedMenuRef.current &&
        !speedMenuRef.current.contains(event.target)
      ) {
        setShowSpeedMenu(false);
      }
    };

    if (showSpeedMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSpeedMenu]);
  return (
    <>
      {/* Speed Menu Button */}
      <div className="relative">
        <button
          onClick={() => setShowSpeedMenu((prev) => !prev)}
          className="group rounded-md text-white hover:text-[#0072FF]"
        >
          <MdOutlineSpeed
            className={`w-[26px] h-[26px] transition-all duration-300 
            ${
              showSpeedMenu ? "text-[#0072FF]" : "text-white "
            } group-hover:text-[#0072FF]`}
          />
        </button>
      </div>

      {/* Speed Menu Dropdown */}
      {showSpeedMenu && (
        <div
          ref={speedMenuRef}
          className="absolute bottom-[96px] sm:bottom-[80px] right-[24px] sm:right-[80px] bg-[#141414] border-[1px] border-gray-700 text-white rounded-[4px] px-[12px] sm:px-4 py-[10px] sm:py-3 w-auto z-50 shadow-lg"
        >
          <h3 className="text-[16px] font-normal mb-2 text-white">
            Playback Speed
          </h3>
          <div className="flex flex-col items-center text-sm">
            <div className="flex items-center justify-between w-full gap-[8px] sm:gap-[28px] relative">
              {speeds.map((speed) => (
                <>
                  <div
                    key={speed}
                    onClick={() => handleSpeedChange(speed)}
                    className="flex flex-col items-center cursor-pointer relative"
                  >
                    <div
                      className={`flex items-center justify-center w-[16px] h-[16px] rounded-full ${
                        playbackSpeed === speed ? "ring-1 ring-blue-500" : ""
                      }`}
                    >
                      <div
                        className={`w-[12px] h-[12px] rounded-full border-2 transition-all duration-200 ${
                          playbackSpeed === speed
                            ? "border-blue-500 bg-blue-600 "
                            : "border-gray-400 bg-white"
                        }`}
                      ></div>
                    </div>
                    <span
                      className={`mt-[4px] text-[12px] ${
                        playbackSpeed === speed
                          ? "text-blue-400 font-medium"
                          : "text-gray-300"
                      }`}
                    >
                      {speed === 1 ? "Normal" : `${speed}x`}
                    </span>
                  </div>
                </>
              ))}
              <span className="border w-[229px] sm:w-[338px] border-white/50 absolute top-[18%] right-[5px] -z-[1]"></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export const Subtitle_Language_Menu = () => {
  const [selectedSubtitle, setSelectedSubtitle] = useState("Off");
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");
  const [showSubtitlesMenu, setShowSubtitlesMenu] = useState(false);
  const subtitlesMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        subtitlesMenuRef.current &&
        !subtitlesMenuRef.current.contains(event.target)
      ) {
        setShowSubtitlesMenu(false);
      }
    };
    if (showSubtitlesMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSubtitlesMenu]);
  return (
    <>
      <div className="relative">
        <button onClick={() => setShowSubtitlesMenu((prev) => !prev)}>
          <BiMessageDetail
            className={`text-[24px] ${
              showSubtitlesMenu ? "text-[#0072FF]" : "text-white"
            }`}
          />
        </button>

        {showSubtitlesMenu && (
          <div
            ref={subtitlesMenuRef}
            className="absolute bottom-[70px] right-[-89px] sm:right-0 w-[230px] bg-[#1e1e1e] border-[1px] border-[#fff]/20 text-white rounded-md p-3 shadow-lg z-50 flex gap-[26px]"
          >
            {/* Subtitles */}
            <div className="mb-2">
              <p className="text-[18px] font-normal text-white">Subtitles</p>
              <ul className="mt-[10px] space-y-[10px] text-[14px] flex flex-col items-start">
                {["Off", "English"].map((subtitle) => (
                  <li
                    key={subtitle}
                    onClick={() => setSelectedSubtitle(subtitle)}
                    className="cursor-pointer font-light flex items-center gap-2 text-white"
                  >
                    {selectedSubtitle === subtitle ? (
                      <FiCheck className="text-blue-500 text-[22px]" />
                    ) : (
                      <span className="w-[22px]" />
                    )}
                    {subtitle}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <p className="text-[18px] font-normal text-white text-end">
                Languages
              </p>
              <ul className="mt-[10px] space-y-[10px] text-[14px] flex flex-col items-start">
                {["Hindi", "Tamil", "English"].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className="cursor-pointer font-light flex items-center gap-2 text-white"
                  >
                    {selectedLanguage === lang ? (
                      <FiCheck className="text-[22px] text-blue-500" />
                    ) : (
                      <span className="w-[22px]" />
                    )}
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export const QualityMenu = () => {
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState("Auto");
  const qualityMenuRef = useRef(null);

  const qualities = [
    { label: "Auto", value: "Auto", enabled: true },
    { label: "Full HD (1080p)", value: "1080p", enabled: true },
    { label: "HD (720p)", value: "720p", enabled: true },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        qualityMenuRef.current &&
        !qualityMenuRef.current.contains(event.target)
      ) {
        setShowQualityMenu(false);
      }
    };

    if (showQualityMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showQualityMenu]);
  return (
    <>
      <div className="relative">
        <button onClick={() => setShowQualityMenu((prev) => !prev)}>
          <MdPreview
            className={`text-[24px] ${
              showQualityMenu ? "text-[#0072FF]" : "text-white"
            }`}
          />
        </button>

        {showQualityMenu && (
          <div
            ref={qualityMenuRef}
            className="absolute bottom-[50px] right-0 w-[170px] bg-[#1e1e1e] border-[1px] border-white/20 rounded-md p-3 text-white shadow-lg z-50"
          >
            <p className="text-[16px] font-medium mb-[14px]">Quality</p>
            <ul className="space-y-[10px] text-[14px]">
              {qualities.map((quality) => (
                <li
                  key={quality.value}
                  onClick={() => {
                    if (quality.enabled) setSelectedQuality(quality.value);
                  }}
                  className={`flex items-center gap-2 cursor-pointer font-light
                              ${
                                !quality.enabled
                                  ? "text-white/30 cursor-not-allowed "
                                  : selectedQuality === quality.value
                                  ? "text-white"
                                  : "text-white/40"
                              }`}
                >
                  {selectedQuality === quality.value && quality.enabled ? (
                    <FiCheck className="text-blue-500 text-[18px]" />
                  ) : (
                    <span className="w-[18px]" />
                  )}
                  {quality.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export const Volume = () => {
  const [showVolumeMenu, setShowVolumeMenu] = useState(false);
  const [volume, setVolume] = useState(36);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) video.volume = volume / 100;
  }, [volume]);

  const volumeMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        volumeMenuRef.current &&
        !volumeMenuRef.current.contains(event.target)
      ) {
        setShowVolumeMenu(false);
      }
    };

    if (showVolumeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showVolumeMenu]);
  return (
    <>
      <div className="relative">
        <button onClick={() => setShowVolumeMenu((prev) => !prev)}>
          <LuVolume2
            className={`text-[24px] ${
              showVolumeMenu ? "text-[#0072FF]" : "text-white"
            }`}
          />
        </button>
        {showVolumeMenu && (
          <div
            ref={volumeMenuRef}
            className="absolute bottom-[75px] right-[-20px] sm:right-0 w-[250px] sm:w-[350px] bg-[#1e1e1e] border-[1px] border-white/20 rounded-md p-3 text-white shadow-lg z-50"
          >
            <p className="text-[16px] font-normal mb-3">Volume</p>
            <div className="flex items-center gap-2">
              <LuVolume2 className="text-[22px]" />
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-[4px] rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${volume}%, #4b5563 ${volume}%, #4b5563 100%)`,
                }}
              />
              <span className="text-[14px] w-[24px] text-right">{volume}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
