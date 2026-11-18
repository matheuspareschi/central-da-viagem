import { kissimmeeActivitiesGuide } from "../../data/global/kissimmeeActivities";
import { StaticGuideView } from "./StaticGuideView";

export function KissimmeeActivities() {
  return <StaticGuideView guide={kissimmeeActivitiesGuide} />;
}
