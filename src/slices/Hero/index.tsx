import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Hero as HeroSection } from "@/components/hero";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroSection
        headerPartOne="Header"
        headerPartTwo="two"
        subHeader="subheader"
        text="text"
        buttonOne="one"
        buttonTwo="two"
        linkOne="/portfolio"
        linkTwo="/contact"
      ></HeroSection>
    </section>
  );
};

export default Hero;
