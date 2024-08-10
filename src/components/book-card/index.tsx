import { FC } from "react";
import s from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { mergeClassname } from "@utils/merge-classname";
import { BookCardProps } from "./index.type";
import getImage from "@utils/get-image";

const BookCard: FC<BookCardProps> = async ({ book, delay }) => {
  const { base64, img } = await getImage(book.cover);

  return (
    <div
      className={s.book}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <Link href={`/bookshelf/${book.id}`} className={s.cover}>
        <Image
          src={img.src}
          alt={`${book.title} cover`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          placeholder="blur"
          blurDataURL={base64}
        />
      </Link>
      <div className={mergeClassname("hidden", s.status, s[book.status])}>
        {book.status}
      </div>
      <div className={s.info}>
        <div className={s.title}>{book.title}</div>
        <div className={s.author}>{book.author}</div>
      </div>
    </div>
  );
};

export default BookCard;
