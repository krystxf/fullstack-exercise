/**
 * Naive implementation of Tailwind CSS class merging.
 */

type TwClass = string | undefined | null | false;

export const twMerge = (base: TwClass, ...classes: TwClass[]): string => {
  return [base, ...classes].filter(Boolean).join(" ");
};
