import { HashRouter, Routes, Route } from "react-router-dom";
import { ItineraryPage, ExtrasPage, ExtraToolPage, CalendarPage, HomePage, CasaPage } from "./features";
import { BottomNav, OfflineNotice, useShowsBottomNav } from "./components";

function AppShell() {
  const showsBottomNav = useShowsBottomNav();

  return (
    <div
      className={`mx-auto min-h-screen max-w-[480px] bg-paper px-4 pt-7 text-ink md:shadow-column ${
        showsBottomNav ? "pb-[calc(var(--spacing-bottom-nav)+env(safe-area-inset-bottom)+2.5rem)]" : "pb-7"
      }`}
    >
      <OfflineNotice />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendario" element={<CalendarPage />} />
        <Route path="/casa" element={<CasaPage />} />
        <Route path="/informacoes-extra" element={<ExtrasPage />} />
        <Route path="/informacoes-extra/:toolId" element={<ExtraToolPage />} />
        <Route path="/roteiro/:day" element={<ItineraryPage />} />
      </Routes>
      {showsBottomNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
