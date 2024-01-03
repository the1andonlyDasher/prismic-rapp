import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroGrid`.
 */
export type HeroGridProps = SliceComponentProps<Content.HeroGridSlice>;

/**
 * Component for "HeroGrid" Slices.
 */
const HeroGrid = ({ slice }: HeroGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_grid (variation: {slice.variation}) Slices
    </section>
  );
};

export default HeroGrid;
