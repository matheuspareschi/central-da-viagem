import { parkSnacksGuide } from "../../data/global/parkSnacks";
import { StaticGuideView } from "./StaticGuideView";

export function ParkSnacks() {
  return <StaticGuideView guide={parkSnacksGuide} />;
}
