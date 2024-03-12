"use client";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { generatePaginationNumbers } from "@/utils";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  totalPages: number;
}
export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get("page") ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathname);
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathname}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex p-2 justify-center items-center">
      <nav className="flex gap-10 items-center">
        <Link href={createPageUrl(currentPage - 1)} className="text-slate-950">
          <FaChevronCircleLeft size={30} />
        </Link>
        <ul className="flex gap-2 items-center">
          {allPages.map((page, index) => (
            <li
              key={index}
              className={clsx(
                "text-lg hover:underline  flex justify-center items-center rounded-full",
                {
                  "bg-slate-950 text-white h-6 w-6 ": page === currentPage,
                }
              )}
            >
              <Link href={createPageUrl(currentPage + 1)}>{page}</Link>
            </li>
          ))}
        </ul>
        <Link href={createPageUrl(totalPages)} className="text-slate-950">
          <FaChevronCircleRight size={30} />
        </Link>
      </nav>
    </div>
  );
};
