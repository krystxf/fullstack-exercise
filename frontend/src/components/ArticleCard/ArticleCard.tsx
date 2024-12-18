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
    <div className="group flex min-h-48 flex-row gap-6 rounded-lg border border-zinc-100 shadow-sm transition-all duration-100 ease-in-out group-hover:border-zinc-300">
      <div className="relative w-64 overflow-hidden rounded-l-lg">
        <Image
          src={getImageUrl(imageId)}
          alt={`Image for article: ${title}`}
          fill
          objectFit="cover"
          className="transition-all duration-200 ease-in-out group-hover:scale-[1.025]"
        />
      </div>

      <div className="flex w-full flex-col justify-between px-4 py-4">
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
