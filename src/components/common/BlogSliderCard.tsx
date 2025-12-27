import { IBlogPost } from "@/src/types/blog";

interface BlogSliderCardProps {
  data: IBlogPost;
}
export default function BlogSliderCard({ data }: BlogSliderCardProps) {
  return (
    <>
      <div className="relative h-full py-10 px-6">
        <div className="absolute bottom-4 left-0 right-0 top-1/2 bg-linear-to-r from-[#efe5ff] to-[#eaf2ff] rounded-2xl -z-10"></div>

        <div className="h-full bg-white border-1 border-borderColor rounded-xl p-6 text-start">
          <h3 className="font-raleway font-bold text-textdark">{data.title}</h3>
          <p className="text-[#719AD0] text-xs font-medium mt-2 mb-4">{data.date}</p>
          <p className="line-clamp-5 text-light text-sm">{data.excerpt}</p>
        </div>
      </div>
    </>
  );
}
