import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;
  return (
    <nav aria-label="Fil d'Ariane" className="mb-4 text-xs sm:text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-muted-foreground">
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-1">
              {it.to && !isLast ? (
                <Link to={it.to} className="hover:text-blue-600">
                  {it.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{it.label}</span>
              )}
              {!isLast && <span className="opacity-60">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

