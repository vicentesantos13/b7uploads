import { TextArea } from "./TextArea";
import { UploadArea } from "./UploadArea";

export const HeroArea = () => {
  return (
    <div className="flex items-center px-3 pb-10  xl:max-w-7xl xl:px-0 m-auto min-h-[calc(82vh_-_95px)] pt-12">
      <div className="w-full flex  flex-col md:flex-row md:justify-between items-center md:items-start">
        <TextArea />
        <UploadArea />
      </div>
    </div>
  );
};
