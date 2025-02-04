"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface SidebarItem {
  name: string;
  href: string;
}

export function SidebarNav({
  items,
}: Readonly<{
  items: SidebarItem[];
}>) {
  const pathname = usePathname();
  const currentPath = pathname;
  return (
    <nav className="flex flex-col gap-3  lg:gap-1 max-sm:w-full px-8 lg:px-0">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={clsx(
            "text-sm text-[#797878]  transition-colors font-bold uppercase",
            currentPath === item.href ? "text-black" : "hover:text-[#000000]"
          )}
          target={
            item.href.startsWith("https")
              ? "_blank"
              : undefined
          }
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
