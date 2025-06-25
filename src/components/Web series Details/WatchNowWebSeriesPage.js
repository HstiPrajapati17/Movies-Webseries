import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainSliderMovies } from "../MoviesList/MoviesList";
import {
  BiArrowBack,
  BiChevronDown,
  BiPause,
  BiPlay,
  BiChevronsRight,
  BiChevronsLeft,
} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { PiMonitorPlay } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { RiFullscreenFill, RiFullscreenExitFill } from "react-icons/ri";
import {
  QualityMenu,
  SpeedMenu,
  Subtitle_Language_Menu,
  Volume,
} from "../Assets/ActionBarControls";

const WatchNowWebSeriesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [selectedEpisode, setSelectedEpisode] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState(null);

  const currentSeries = MainSliderMovies.find(
    (movie) =>
      movie.id === parseInt(id) ||
      (movie.name === "Ek Badnaam Aashram" && movie.type === "Web series")
  );

  const currentSeasonData = currentSeries?.seasons?.[selectedSeason];
  const currentEpisodeData = currentSeasonData?.episodes?.[selectedEpisode];

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (isFullscreen) {
      if (controlsTimeout) clearTimeout(controlsTimeout);
      const timeout = setTimeout(() => setShowControls(false), 3000);
      setControlsTimeout(timeout);
      return () => clearTimeout(timeout);
    } else {
      setShowControls(true);
      if (controlsTimeout) clearTimeout(controlsTimeout);
    }
  }, [isFullscreen, showControls]);

  const handleMouseMove = () => {
    if (isFullscreen) {
      setShowControls(true);
      if (controlsTimeout) clearTimeout(controlsTimeout);
      setControlsTimeout(setTimeout(() => setShowControls(false), 3000));
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEpisodeSelect = (seasonIndex, episodeIndex) => {
    setSelectedSeason(seasonIndex);
    setSelectedEpisode(episodeIndex);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
      setIsPlaying(true);
    }
    setShowSidebar(false);
  };

  const handleBackClick = () => {
    navigate(`/webseries/${id}`);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleToggleFullScreen = () => {
    const videoContainer = videoContainerRef.current;
    if (!document.fullscreenElement) {
      videoContainer?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        videoRef.current.currentTime - 10,
        0
      );
    }
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.currentTime + 10,
        duration
      );
    }
  };

  // preview full screen
  const [showSliderPreview, setShowSliderPreview] = useState(false);
  const [sliderPreviewTime, setSliderPreviewTime] = useState(0);
  const [sliderPreviewX, setSliderPreviewX] = useState(0);
  const hoverPreviewVideoRef = useRef(null);

  const handleSliderHover = (e) => {
    const rangeInput = e.currentTarget.querySelector("input[type='range']");
    const rect = rangeInput.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const percent = relativeX / rect.width;
    const timeEstimate = percent * duration;
    const safeTime = Math.min(duration, Math.max(0, timeEstimate));
    setSliderPreviewTime(safeTime);
    setSliderPreviewX(relativeX);
    setShowSliderPreview(true);

    if (
      hoverPreviewVideoRef.current &&
      hoverPreviewVideoRef.current.readyState >= 1
    ) {
      hoverPreviewVideoRef.current.currentTime = safeTime;
    }
  };

  // preview
  const [showPreview, setShowPreview] = useState(false);
  const [previewTime, setPreviewTime] = useState(0);
  const [previewPosition, setPreviewPosition] = useState(0);
  const previewVideoRef = useRef(null);

  const handleHover = (e) => {
    const range = e.currentTarget.querySelector("input[type='range']");
    const rect = range.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within range
    const percentage = x / rect.width;
    const time = percentage * duration;
    const clampedTime = Math.min(duration, Math.max(0, time));
    setPreviewTime(clampedTime);
    setPreviewPosition(x);
    setShowPreview(true);

    if (previewVideoRef.current) {
      previewVideoRef.current.currentTime = clampedTime;
    }
  };

  if (!currentSeries) {
    return (
      <div className="bg-[#0f0f0f] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Series Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`bg-[#0f0f0f] text-white ${
        !isFullscreen ? "px-[24px] sm:px-[40px] md:px-[80px]" : ""
      } min-h-screen relative inter-font`}
    >
      {/* Header - Hide in fullscreen */}
      {!isFullscreen && (
        <div className="top-0 left-0 right-0 z-30 bg-[#0f0f0f] flex items-center justify-between py-[14px] sm:py-4">
          <div className="flex items-center sm:gap-4">
            <button
              onClick={handleBackClick}
              className="pr-[6px] sm:p-2 hover:bg-white/10 rounded-full text-[18px] sm:text-[24px]"
            >
              <BiArrowBack />
            </button>
            <h1 className="text-[12px] sm:text-lg font-medium flex items-center flex-wrap gap-[6px] sm:gap-2 text-white">
              {currentSeries.name}
              <span>
                S{selectedSeason + 1} E{selectedEpisode + 1}
              </span>
            </h1>
          </div>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex items-center text-[14px] sm:text-[16px] text-white"
          >
            <PiMonitorPlay className="mr-[6px] text-[18px] sm:text-[24px]" />
            Episodes
          </button>
        </div>
      )}

      {/* Video Player */}
      <div
        ref={videoContainerRef}
        className={`relative w-full bg-black overflow-hidden ${
          isFullscreen
            ? "h-screen"
            : "h-[calc(80vh-64px)] sm:h-[calc(80vh-80px)] md:h-[calc(90vh-120px)] lg:h-[calc(92vh-120px)]"
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isFullscreen && setShowControls(false)}
        onClick={() => {
          if (isFullscreen) {
            setShowControls(true);
            if (controlsTimeout) clearTimeout(controlsTimeout);
            setControlsTimeout(setTimeout(() => setShowControls(false), 2000));
          }
        }}
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={
            currentSeries.video ||
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
          className="w-full h-full object-cover"
          autoPlay
          loop
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.target.duration)}
        />

        {/* Center Play/Pause Button */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <button
            onClick={handlePlayPause}
            className="bg-black/50 hover:bg-black/70 rounded-full p-4 opacity-0 hover:opacity-100 transition-opacity"
          >
            {isPlaying ? <BiPause size={48} /> : <BiPlay size={48} />}
          </button>
        </div>

        {/* Fullscreen Controls Overlay */}
        {isFullscreen && (
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                                 px-[26px] sm:px-[40px] md:px-[80px] pb-[26px] sm:pb-[40px] md:pb-[80px] pt-6"
              >
                {/* Progress Bar and Time Display */}
                <div
                  className="mb-4 flex items-center gap-4 relative w-full"
                  onMouseMove={handleSliderHover}
                  onMouseLeave={() => setShowSliderPreview(false)}
                >
                  {/* Video Thumbnail Preview */}
                  {showSliderPreview &&
                    (currentSeries.video ||
                      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4") && (
                      <div
                        className="absolute -top-[100px] z-10"
                        style={{
                          left: `${sliderPreviewX}px`,
                          transform: "translateX(-50%)",
                        }}
                      >
                        <video
                          src={
                            currentSeries.video ||
                            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                          }
                          ref={hoverPreviewVideoRef}
                          muted
                          preload="metadata"
                          onLoadedMetadata={() => {
                            if (hoverPreviewVideoRef.current) {
                              hoverPreviewVideoRef.current.currentTime =
                                sliderPreviewTime;
                            }
                          }}
                          className="w-[140px] h-[80px] object-cover rounded"
                        />
                        <div className="text-white text-xs text-center mt-1 font-mono">
                          {formatTime(sliderPreviewTime)}
                        </div>
                      </div>
                    )}

                  {/* Seek Bar */}
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={(e) => {
                      const updatedTime = parseFloat(e.target.value);
                      setCurrentTime(updatedTime);
                      if (videoRef.current)
                        videoRef.current.currentTime = updatedTime;
                    }}
                    className="flex-1 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                        (currentTime / duration) * 100
                      }%, rgba(255,255,255,0.3) ${
                        (currentTime / duration) * 100
                      }%, rgba(255,255,255,0.3) 100%)`,
                    }}
                  />

                  {/* Time Display */}
                  <div className="flex items-center gap-2 text-sm text-white/80 font-mono whitespace-nowrap">
                    <span>{formatTime(currentTime)}</span>
                    <span>/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleRewind}
                      className="flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      <BiChevronsLeft size={24} />
                      <span className="text-sm ml-1">10</span>
                    </button>

                    <button
                      onClick={handlePlayPause}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {isPlaying ? <BiPause size={32} /> : <BiPlay size={32} />}
                    </button>

                    <button
                      onClick={handleForward}
                      className="flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      <span className="text-sm mr-1">10</span>
                      <BiChevronsRight size={24} />
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <SpeedMenu />
                    <Subtitle_Language_Menu />
                    <QualityMenu />
                    <Volume />

                    <button
                      onClick={handleToggleFullScreen}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {isFullscreen ? (
                        <RiFullscreenExitFill size={20} />
                      ) : (
                        <RiFullscreenFill size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Regular Controls - Only show when not in fullscreen */}
      {!isFullscreen && (
        <div className="py-[12px] sm:py-4">
          <div
            className="relative w-full"
            onMouseMove={handleHover}
            onMouseLeave={() => setShowPreview(false)}
          >
            {/* Thumbnail Preview */}
            {showPreview &&
              (currentSeries.video ||
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4") && (
                <div
                  className="absolute -top-[100px] z-10"
                  style={{
                    left: `${previewPosition}px`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <video
                    src={
                      currentSeries.video ||
                      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    }
                    ref={previewVideoRef}
                    muted
                    preload="metadata"
                    onLoadedMetadata={() => {
                      if (previewVideoRef.current) {
                        previewVideoRef.current.currentTime = previewTime;
                      }
                    }}
                    className="w-[140px] h-[80px] object-cover rounded relative"
                  />
                  <div className="text-white text-xs text-center mt-1 font-mono absolute bottom-0 left-0 right-0">
                    {formatTime(previewTime)}
                  </div>
                </div>
              )}

            {/* Range Slider */}
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => {
                const newTime = parseFloat(e.target.value);
                setCurrentTime(newTime);
                if (videoRef.current) videoRef.current.currentTime = newTime;
              }}
              className="w-full h-[3px] sm:h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                  (currentTime / duration) * 100
                }%, rgba(255,255,255,0.3) ${
                  (currentTime / duration) * 100
                }%, rgba(255,255,255,0.3) 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[2px] sm:gap-[6px] w-full">
              <button onClick={handleRewind} className="flex items-center">
                <BiChevronsLeft className="text-[26px] sm:text-[30px]" />
                <span className="text-[14px] sm:text-[16px]">10</span>
              </button>
              <button onClick={handlePlayPause} className="">
                {isPlaying ? (
                  <BiPause className="text-[34px] sm:text-[46px]" />
                ) : (
                  <BiPlay className="text-[34px] sm:text-[46px]" />
                )}
              </button>
              <button onClick={handleForward} className="flex items-center">
                <span className="text-[14px] sm:text-[16px]">10</span>
                <BiChevronsRight className="text-[26px] sm:text-[30px]" />
              </button>
            </div>
            <div className="flex justify-end items-center gap-[10px] sm:gap-[18px] text-[20px] sm:text-[26px]">
              <div className="">
                <SpeedMenu />
              </div>
              <Subtitle_Language_Menu />
              <QualityMenu />
              <Volume />
              <button onClick={handleToggleFullScreen}>
                <RiFullscreenFill />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar for Episodes */}
      <AnimatePresence>
        {showSidebar && !isFullscreen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowSidebar(false)}
              className="fixed inset-0 bg-black/40 z-20"
            />
            <motion.div
              key="sidebar"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 right-0 w-[85vw] sm:w-[80vw] lg:w-[740px] h-full z-30 bg-[#141414] overflow-y-auto border-[1px] border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-[12px] sm:p-4 relative">
                <h3 className="px-[0px] sm:px-4 py-2 text-[16px] sm:text-[18px] font-semibold">
                  Seasons and Episodes
                </h3>

                <button
                  onClick={() => setShowSidebar(false)}
                  className="absolute top-4 right-4 text-white hover:text-red-500 text-2xl"
                >
                  &times;
                </button>

                {currentSeries.seasons?.map((season, seasonIndex) => {
                  const isOpen = selectedSeason === seasonIndex;

                  return (
                    <div
                      key={seasonIndex}
                      className="border-[1px] mt-[14px] sm:mt-[20px] overflow-hidden rounded border-white/20"
                    >
                      {/* Season Button */}
                      <button
                        onClick={() =>
                          setSelectedSeason(
                            seasonIndex === selectedSeason ? -1 : seasonIndex
                          )
                        }
                        className="w-full p-[14px] sm:p-[16px] flex items-center justify-between bg-[#0f0f0f] hover:bg-white/5"
                      >
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-[15px] sm:text-lg">
                            {season.season}
                          </h4>
                          <span className="text-[11px] sm:text-sm text-white/70">
                            ({season.episodes?.length || 0} Episodes)
                          </span>
                        </div>
                        <BiChevronDown
                          className={`text-[26px] transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Episodes Accordion */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#0f0f0f]"
                          >
                            <div className="p-[0px] sm:p-[12px] md:p-4 grid grid-cols-1 gap-4">
                              {season.episodes?.map((episode, episodeIndex) => (
                                <div
                                  key={episodeIndex}
                                  onClick={() =>
                                    handleEpisodeSelect(
                                      seasonIndex,
                                      episodeIndex
                                    )
                                  }
                                  className={`flex items-start gap-[8px] sm:gap-4 p-[8px] sm:p-3 rounded-lg cursor-pointer transition-all duration-200 border-b-[1px] border-[#fff]/5 ${
                                    selectedSeason === seasonIndex &&
                                    selectedEpisode === episodeIndex
                                      ? "hover:bg-white/5"
                                      : "hover:bg-white/5"
                                  }`}
                                >
                                  {/* Thumbnail */}
                                  <img
                                    src={episode.thumbnail}
                                    alt={episode.title}
                                    className="w-[80px] h-[65px] sm:w-[120px] sm:h-[75px] object-cover rounded"
                                  />

                                  {/* Episode Content */}
                                  <div className="flex-1">
                                    <div className="flex flex-wrap justify-between items-center mb-[6px] sm:mb-[8px]">
                                      <h5
                                        className={`font-semibold text-[12px] sm:text-[14px] md:text-[18px] mb-1 ${
                                          selectedSeason === seasonIndex &&
                                          selectedEpisode === episodeIndex
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]"
                                            : "text-white"
                                        }`}
                                      >
                                        {episode.title}
                                      </h5>
                                      <div className="flex items-center text-[9px] sm:text-xs text-white/60 border-[1px] border-[#fff]/10 rounded-[4px] py-[3px] sm:py-[4px] px-[6px] sm:px-[8px]">
                                        <IoMdTime className="mr-[2px] sm:mr-1" />
                                        <span>
                                          {episode.duration || "49 min"}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="text-[10px] sm:text-[12px] md:text-[14px] text-white/70">
                                      On his way from a friend's house, young
                                      Will sees something terrifying. Nearby, a
                                      sinister secret lurks in the depths of a
                                      government lab.
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WatchNowWebSeriesPage;
