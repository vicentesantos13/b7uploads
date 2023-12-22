"use client";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import UploadSchema from "@/schemas/UploadSchema";

export const UploadArea = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UploadSchema),
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSend = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      reset();
    }, 1000);
  };
  return (
    <div className="w-11/12 md:w-7/12">
      {success && (
        <div className="rounded w-full h-16 bg-graySuccess flex items-center justify-between mt-6 mb-6 md:mt-0 px-3">
          <div className="flex items-center">
            <Image
              src="/assets/checkbox.png"
              width={20}
              height={20}
              alt="concluído"
            />
            <p className="text-lg text-gray60 ml-2">Upload concluído.</p>
          </div>
          <div className="cursor-pointer" onClick={() => setSuccess(false)}>
            <Image
              src="/assets/close.png"
              width={24}
              height={24}
              alt="fechar"
            />
          </div>
        </div>
      )}
      <div className="bg-black17 border-2 border-gray40 border-dashed rounded w-full md:aspect-[79/50] md:max-h-96 mt-6 md:mt-0  py-20 md:py-10  flex flex-col items-center justify-center">
        {!loading && (
          <form
            onSubmit={handleSubmit(handleSend)}
            className="flex flex-col items-center justify-center"
          >
            <Image src="/assets/cloud.png" width={88} height={88} alt="nuvem" />
            <label
              className={`text-center w-4/5 sm:w-1/2 md:w-3/5 lg:w-1/2 text-gray60 text-xl mt-4 cursor-pointer border ${
                errors.file ? "border-red-700" : "border-gray40"
              }  border-dashed rounded p-2 `}
              htmlFor="fileInput"
            >
              Clique aqui e selecione seu arquivo para realizar o upload.
            </label>
            {errors.file && (
              <p className="text-red-700 mt-2">
                {errors.file.message as string}
              </p>
            )}
            <button className="bg-greenB7Uploads text-white text-lg mt-8 w-48 h-16 rounded">
              Enviar arquivo
            </button>
            <input
              {...register("file")}
              type="file"
              id="fileInput"
              className="hidden"
            />
          </form>
        )}
        {loading && (
          <>
            <div className="w-16 h-16 border-4 border-l-grayBG border-r-grayBG border-b-grayBG border-t-greenB7Uploads rounded-full animate-spin ease-linear"></div>
            <p className="text-gray60 text-xl mt-4">Carregando...</p>
          </>
        )}
      </div>
    </div>
  );
};
