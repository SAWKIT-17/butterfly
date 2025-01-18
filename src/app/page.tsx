import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="">
        <div className="absolute top-0 left-0 w-full h-1/2">
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

  
      </main>
    </div>
  );
}
