import { pricingPlans } from "@/data/pricing-plans";
import { featureOptions, verifiedFeatureTags } from "@/lib/feature-filters";
import { plansFor } from "@/lib/compare";
import type { CategorySlug, Product } from "@/lib/catalog";
import { buildCheck, type SoftwarebriefCheck } from "@/lib/check-rules";

export type { SoftwarebriefCheck } from "@/lib/check-rules";

/** Der Softwarebrief Check eines Produkts, gebaut aus denselben Daten wie Preisübersicht und Funktionsmatrix. */
export function softwarebriefCheck(product: Product): SoftwarebriefCheck {
  return buildCheck({
    plans: plansFor(product.slug).map(({ name, price, unit, amount, model, limited }) => ({ name, price, unit, amount, model, limited })),
    featureOptions: featureOptions[product.categorySlug as CategorySlug] ?? [],
    featureTags: verifiedFeatureTags[product.slug] ?? [],
    sourceCount: product.sources.length,
    checked: pricingPlans[product.slug]?.checked ?? null,
  });
}
