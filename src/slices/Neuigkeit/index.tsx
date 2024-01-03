import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Neuigkeit`.
 */
export type NeuigkeitProps = SliceComponentProps<Content.NeuigkeitSlice>;

/**
 * Component for "Neuigkeit" Slices.
 */
const Neuigkeit = ({ slice }: NeuigkeitProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for neuigkeit (variation: {slice.variation}) Slices
    </section>
  );
};

export default Neuigkeit;
