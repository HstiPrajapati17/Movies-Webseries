import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainSliderMovies } from "../MoviesList/MoviesList";
import {
  BiArrowBack,
  BiPause,
  BiPlay,
  BiChevronsRight,
  BiChevronsLeft,
} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { RiFullscreenFill } from "react-icons/ri";
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState(null);

  const currentmovie = MainSliderMovies.find(
    (movie) =>
      movie.id === parseInt(id) ||
      (movie.name === "Ek Badnaam Aashram" && movie.type === "Web series")
  );

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

  const handleBackClick = () => {
    navigate(`/premium-movies/${id}`);
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
  const videoSrc = "your-video-url.mp4"; // same as main video

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

  if (!currentmovie) {
    return (
      <div className="bg-[#0f0f0f] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Movie Not Found</h1>
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
              {currentmovie.name}
            </h1>
          </div>
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
          src={currentmovie.MovieLink}
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
                                 px-[26px] sm:px-[40px] md:px-[80px] pb-[26px] sm:pb-[40px] md:pb-[60px] pt-6"
              >
                {/* Progress Bar and Time Display */}
                <div
                  className="mb-4 flex items-center gap-4 relative w-full"
                  onMouseMove={handleSliderHover}
                  onMouseLeave={() => setShowSliderPreview(false)}
                >
                  {/* Video Thumbnail Preview */}
                  {showSliderPreview && currentmovie?.MovieLink && (
                    <div
                      className="absolute -top-[100px] z-10"
                      style={{
                        left: `${sliderPreviewX}px`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <video
                        src={currentmovie.MovieLink}
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
                  <div className="flex items-center gap-[2px] sm:gap-[6px] w-full">
                    <button
                      onClick={handleRewind}
                      className="flex items-center"
                    >
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
                    <button
                      onClick={handleForward}
                      className="flex items-center"
                    >
                      <span className="text-[14px] sm:text-[16px]">10</span>
                      <BiChevronsRight className="text-[26px] sm:text-[30px]" />
                    </button>
                  </div>

                  <div className="flex justify-end items-center gap-[10px] sm:gap-[18px] text-[20px] sm:text-[26px] relative">
                    <SpeedMenu />

                    <Subtitle_Language_Menu />
                    <QualityMenu />
                    <Volume />
                    <button onClick={handleToggleFullScreen}>
                      <RiFullscreenFill />
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
            {showPreview && currentmovie?.MovieLink && (
              <div
                className="absolute -top-[100px] z-10"
                style={{
                  left: `${previewPosition}px`,
                  transform: "translateX(-50%)",
                }}
              >
                <video
                  src={currentmovie.MovieLink}
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
            <div className="flex justify-end items-center gap-[10px] sm:gap-[18px] text-[20px] sm:text-[26px] relative">
              <SpeedMenu />

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
    </div>
  );
};

export default WatchNowWebSeriesPage;
