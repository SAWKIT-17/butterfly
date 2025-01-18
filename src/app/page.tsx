import Image from "next/image";
import VideoPlayer from "./components/player";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen">
      <main className="w-full">
          <div className="absolute top-0 left-0 w-full h-[50vh]">
            <Image
              src="/banner.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[80%] max-w-[600px]">
              <Image
                src="/title.png"
                alt="L'effet papillon"
                width={3110}
                height={342}
                objectFit="contain"
                quality={100}
              />
          </div>
        </div>
        <div className="h-[30vh] lg:h-[40vh] sm:h-[50vh]"></div>

        <div className="flex justify-center items-center p-7">
          <VideoPlayer />
        </div>
      </main>
    </div>
  );
}
