import Link from 'next/link';

{/* target="_blank" посилання відкривається у новій вкладці (або новому вікні).
    rel="noopener noreferrer" 
    не передає новому сайту інформацію про те, звідки прийшов користувач (HTTP Referer); 
    у більшості сучасних браузерів також поводиться як noopener.*/}

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function MenuLink({
  href,
  children,
  className,
}: Props) {
  const external =
    href.startsWith('http://') ||
    href.startsWith('https://');

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}