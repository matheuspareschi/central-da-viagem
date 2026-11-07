import { ArrowUpRight, Image,type LucideIcon } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { photoAlbumUrl } from "../data/global/contacts";
import { isDestinationActive, navigationDestinations } from "./navigationDestinations";

const itemClasses =
  "flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs outline-offset-[-2px] focus-visible:outline-2 focus-visible:outline-citrus";

function NavIcon({ icon: Icon, isActive }: { icon: LucideIcon; isActive: boolean }) {
  return (
    <span className={`flex h-[30px] w-14 items-center justify-center rounded-full ${isActive ? "bg-citrus-tint" : ""}`}>
      <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
    </span>
  );
}

function stateClasses(isActive: boolean): string {
  return isActive ? "font-bold text-citrus-text" : "font-semibold text-ink-soft";
}

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-10 mx-auto flex w-full max-w-[480px] border-t border-line bg-cardbg px-1 pb-[max(10px,env(safe-area-inset-bottom))] pt-1.5"
    >
      {navigationDestinations.map(({ label, icon, path }) => (
        <NavLink
          key={path}
          to={path}
          end
          aria-current={isDestinationActive(path, pathname) ? "page" : undefined}
          className={`${itemClasses} ${stateClasses(isDestinationActive(path, pathname))}`}
        >
          <NavIcon icon={icon} isActive={isDestinationActive(path, pathname)} />
          <span>{label}</span>
        </NavLink>
      ))}
      {photoAlbumUrl && (
        <a
          href={photoAlbumUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fotos, abre em nova aba"
          className={`${itemClasses} ${stateClasses(false)}`}
        >
          <span className="relative">
            <NavIcon icon={Image} isActive={false} />
            <ArrowUpRight className="absolute right-[13px] -top-[3px] h-3 w-3" strokeWidth={2.8} aria-hidden="true" />
          </span>
          <span>Fotos</span>
        </a>
      )}
    </nav>
  );
}
