import { useRef, useState, type KeyboardEvent } from "react";
import { womenShoeSizes, menShoeSizes, type ShoeSizeConversion } from "../../data/global/shoeSizes";
import { readStorage, writeStorage } from "../../lib/storage";

type Gender = "feminino" | "masculino";

interface GenderChart {
  gender: Gender;
  title: string;
  sizes: ShoeSizeConversion[];
}

const genderCharts: GenderChart[] = [
  { gender: "feminino", title: "Feminino", sizes: womenShoeSizes },
  { gender: "masculino", title: "Masculino", sizes: menShoeSizes },
];

const SELECTED_GENDER_STORAGE_KEY = "shoe-size-chart:selected-gender";

function readSelectedGender(): Gender {
  const stored = readStorage<string>(SELECTED_GENDER_STORAGE_KEY, "feminino");
  return genderCharts.some((chart) => chart.gender === stored) ? (stored as Gender) : "feminino";
}

const tabId = (gender: Gender) => `shoe-size-tab-${gender}`;
const panelId = (gender: Gender) => `shoe-size-panel-${gender}`;

/** No mobile mostra um gênero por vez (escolhido no switch); a partir de `md` mostra os dois lado a lado. */
export function ShoeSizeChart() {
  const [selectedGender, setSelectedGender] = useState<Gender>(readSelectedGender);

  function selectGender(gender: Gender) {
    setSelectedGender(gender);
    writeStorage(SELECTED_GENDER_STORAGE_KEY, gender);
  }

  return (
    <div>
      <GenderSwitch selectedGender={selectedGender} onSelect={selectGender} />
      <div className="grid items-start gap-4 md:grid-cols-2">
        {genderCharts.map((chart) => (
          <div
            key={chart.gender}
            id={panelId(chart.gender)}
            role="tabpanel"
            aria-labelledby={tabId(chart.gender)}
            className={chart.gender === selectedGender ? "" : "hidden md:block"}
          >
            <ShoeSizeTable title={chart.title} sizes={chart.sizes} />
          </div>
        ))}
      </div>
    </div>
  );
}

function GenderSwitch({ selectedGender, onSelect }: { selectedGender: Gender; onSelect: (gender: Gender) => void }) {
  const tabRefs = useRef<Partial<Record<Gender, HTMLButtonElement | null>>>({});

  function handleArrowKeys(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const currentIndex = genderCharts.findIndex((chart) => chart.gender === selectedGender);
    const nextGender = genderCharts[(currentIndex + step + genderCharts.length) % genderCharts.length].gender;
    onSelect(nextGender);
    tabRefs.current[nextGender]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label="Gênero"
      onKeyDown={handleArrowKeys}
      className="mb-3 grid grid-cols-2 gap-1 rounded-full border border-ink/10 bg-paper p-1 md:hidden"
    >
      {genderCharts.map((chart) => {
        const isSelected = chart.gender === selectedGender;
        return (
          <button
            key={chart.gender}
            ref={(element) => {
              tabRefs.current[chart.gender] = element;
            }}
            type="button"
            role="tab"
            id={tabId(chart.gender)}
            aria-selected={isSelected}
            aria-controls={panelId(chart.gender)}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelect(chart.gender)}
            className={`min-h-11 rounded-full text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus ${
              isSelected ? "bg-citrus text-cardbg" : "text-ink"
            }`}
          >
            {chart.title}
          </button>
        );
      })}
    </div>
  );
}

function ShoeSizeTable({ title, sizes }: { title: string; sizes: ShoeSizeConversion[] }) {
  const headerCellClasses = "w-1/2 py-2.5 text-[13px] font-semibold uppercase tracking-widest md:py-3";
  const valueCellClasses = "py-2.5 text-[18px] font-semibold tabular-nums md:py-3.5 md:text-[22px]";

  return (
    <div className="overflow-hidden rounded-xl border border-ink/10">
      <table className="w-full border-collapse text-center">
        <caption className="sr-only bg-paper px-4 py-2.5 text-left font-serif text-[18px] font-semibold text-ink md:not-sr-only">
          {title}
        </caption>
        <thead>
          <tr className="bg-citrus text-cardbg">
            <th scope="col" className={headerCellClasses}>
              BR
            </th>
            <th scope="col" className={headerCellClasses}>
              EUA
            </th>
          </tr>
        </thead>
        <tbody>
          {sizes.map(({ br, us }) => (
            <tr key={br} className="border-t border-ink/8 even:bg-paper/60">
              <th scope="row" className={`border-r border-ink/10 text-ink ${valueCellClasses}`}>
                {br}
              </th>
              <td className={`text-citrus-dark ${valueCellClasses}`}>{us}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
