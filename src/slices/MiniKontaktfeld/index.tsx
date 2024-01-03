import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MiniKontaktfeld`.
 */
export type MiniKontaktfeldProps =
  SliceComponentProps<Content.MiniKontaktfeldSlice>;

/**
 * Component for "MiniKontaktfeld" Slices.
 */
const MiniKontaktfeld = ({ slice }: MiniKontaktfeldProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for mini_kontaktfeld (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MiniKontaktfeld;
