"use client";

import { usePageTransition } from "./PageTransition";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function CardTransitionLink({
  href,
  className,
  children,
}: Props) {
  const { start } = usePageTransition();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {

    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    start(e.clientX, e.clientY, href);
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}




