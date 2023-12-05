import Image from "next/image";

export const TextArea = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center text-sm text-gray7F ">
        <Image src="/assets/layers.png" width={24} height={24} alt="layers" />
        <p className="ml-2 lg:text-lg">Nunca foi tão simples upar.</p>
      </div>
      <h1 className="mt-5 text-white font-poppins text-4xl sm:text-5xl lg:text-6xl text-center md:text-start">
        Faça{" "}
        <span className="text-greenB7Uploads">
          upload <br />
        </span>{" "}
        de arquivos.
      </h1>
      <div className="hidden sm:flex  flex-col items-center md:items-start mt-5 text-gray7F">
        <p className="text-center md:text-start lg:text-xl">
          Um jeito simples de aprender a fazer <br/> um sistema de uploads de
          arquivos.
        </p>
        <ul className="flex justify-between w-full mt-3 list-disc">
            <li className="list-none">MP3</li>
            <li>MP4</li>
            <li>JPG</li>
            <li>PNG</li>
            <li>ZIP</li>
            <li>[...]</li>
        </ul>
      </div>
    </div>
  );
};
