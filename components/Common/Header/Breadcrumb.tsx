import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

import { capitalize } from "@/utils/helpers";

import BreadcrumbItem from "./BreadcrumbItem";

interface IBreadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

const Breadcrumb = (): JSX.Element => {
  const { asPath } = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

  useEffect(() => {
    const path = asPath.replace(/#.*/, "");

    const pathWithoutQuery = path.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();
    pathArray = pathArray.filter(path => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: capitalize(path),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [asPath]);

  return (
    <ol aria-label="breadcrumb" className="flex space-x-2">
      <BreadcrumbItem href="/" isRoot>
        <Image
          className="transition-transform duration-1000 ease-boop hover:rotate-90"
          src="/favicons/logo.png"
          alt="logo"
          height={32}
          width={32}
        />
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map(({ href, label, isCurrent }) => (
          <BreadcrumbItem href={href} isCurrent={isCurrent} key={href}>
            {label}
          </BreadcrumbItem>
        ))}
    </ol>
  );
};

export default Breadcrumb;
