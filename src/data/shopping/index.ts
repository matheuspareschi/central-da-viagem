import type { ShopRegion } from "../../types";
import { outletMarketplace } from "./outletMarketplace";
import { theLoop } from "./theLoop";
import { theCrosslands } from "./theCrosslands";
import { loopWest } from "./loopWest";
import { vinelandPremiumOutlets } from "./vinelandPremiumOutlets";
import { internationalPremiumOutlets } from "./internationalPremiumOutlets";
import { winterGardenVillage } from "./winterGardenVillage";
import { lakeBuenaVistaFactoryStores } from "./lakeBuenaVista";

export const shopRegions: Record<string, ShopRegion> = {
  ...outletMarketplace,
  ...theLoop,
  ...theCrosslands,
  ...loopWest,
  ...vinelandPremiumOutlets,
  ...internationalPremiumOutlets,
  ...winterGardenVillage,
  ...lakeBuenaVistaFactoryStores,
};
