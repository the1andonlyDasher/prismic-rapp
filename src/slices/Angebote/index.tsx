import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Angebote`.
 */
export type AngeboteProps = SliceComponentProps<Content.AngeboteSlice>;

/**
 * Component for "Angebote" Slices.
 */
const Angebote = ({ slice }: AngeboteProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for angebote (variation: {slice.variation}) Slices
    </section>
  );
};

export default Angebote;
