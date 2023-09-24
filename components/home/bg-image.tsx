import Image from 'next/image';

interface BgImageProps {
  img: string;
}

const BgImage = ({ img }: BgImageProps) => {
  return (
    // h-[200px]
    <div className="w-full h-full fixed top-0 left-0 -z-10">
      <Image
        src={img}
        alt={'首页背景图片'}
        fill={true}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BgImage;
