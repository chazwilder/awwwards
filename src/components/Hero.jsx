import React, {useRef, useState} from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hadClicked, setHadClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(0);

    const totalVideos = 3;
    const nextVideoRef = useRef(null);

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHadClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    const handleVideoLoad = () => {
        setLoadedVideo((prev) => prev + 1);
    }

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {/*Main Content Area*/}
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-50">
                {/*Mini Video Click Frame*/}
                <div>
                    <div
                        className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVdClick}
                             className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video ref={nextVideoRef} src={getVideoSrc(upcomingVideoIndex)}
                                   loop={true}
                                   muted
                                   id="current-video"
                                   className="size-64 origin-center scale-150 object-cover object-center"
                                   onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    {/*Main Video BG Section*/}
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-center object-cover"
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        src={getVideoSrc(currentIndex === totalVideos -1 ? 1 : currentIndex)}
                        loop
                        autoPlay
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>

            </div>
        </div>
    )
}
export default Hero
