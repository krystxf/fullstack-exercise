import { getImageUrl } from "@/utils/api.utils";
import Image from "next/image";
import { Link } from "@/components/Link";
import { ArticleDate } from "@/components/ArticleDate";

type Props = {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt: string;
};

export function ArticleCard(props: Props) {
  const { articleId, title, perex, imageId, createdAt, lastUpdatedAt } = props;

  return (
    <div className="group flex gap-6 min-h-48 flex-row border border-zinc-100 rounded-lg shadow-sm group-hover:border-zinc-300 transition-all duration-100 ease-in-out">
      <div className="relative w-64 rounded-l-lg overflow-hidden">
        <Image
          src={getImageUrl(imageId)}
          alt={`Image for article: ${title}`}
          fill
          objectFit="cover"
          className="group-hover:scale-[1.025] transition-all duration-200 ease-in-out"
        />
      </div>

      <div className="w-full px-4 py-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-medium">{title}</h2>
          <p>{perex}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/article/${articleId}`}>Read the whole article</Link>
          •
          <ArticleDate createdAt={createdAt} updatedAt={lastUpdatedAt} />
        </div>
      </div>
    </div>
  );
}
