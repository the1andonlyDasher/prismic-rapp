import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductMain`.
 */
export type ProductMainProps = SliceComponentProps<Content.ProductMainSlice>;

/**
 * Component for "ProductMain" Slices.
 */
const ProductMain = ({ slice }: ProductMainProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product_main (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProductMain;
