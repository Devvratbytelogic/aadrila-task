import Image from 'next/image'

interface ImageComponentProps {
  url: string | undefined;
  img_title: string | undefined;
  object_cover: boolean;
}
export default function ImageComponent({ url, img_title, object_cover }: ImageComponentProps) {
  return (
    <>
      <Image src={url || '/images/fallback-image.jpg'} width={1000} height={1000} alt={img_title || ''} title={img_title || ''} className={`w-full h-full ${object_cover ? 'object-cover' : 'object-contain'}`} />
    </>
  )
}