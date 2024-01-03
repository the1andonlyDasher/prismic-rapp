import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Hero as HeroSection } from "@/components/hero";
import { View } from "@/components/Canvas/View";
import { Model } from "@/gl/Rapp_final";

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
        headerPartOne={`${slice.primary.header_one}`}
        headerPartTwo={`${slice.primary.header_two}`}
        subHeader={slice.primary.subheader}
        text={slice.primary.text}
        buttonOne="one"
        buttonTwo="two"
        linkOne="/portfolio"
        linkTwo="/contact"
      >
      </HeroSection>
    </section>
  );
};

export default Hero;
