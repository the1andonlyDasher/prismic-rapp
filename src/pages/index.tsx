import { createClient } from "@prismicio/client";
import { repositoryName } from "@/prismicio";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { components } from "@/slices";
import Head from "next/head";
import HeroGrid from "@/components/HeroGrid/HeroGrid";
import { motion } from "framer-motion";
import { Model } from "@/gl/Rapp_final";
import { View } from "@/components/Canvas/View";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heebo } from "next/font/google"
import { Quando } from "next/font/google"
import { Hind } from "next/font/google"

const heebo = Heebo({
  subsets: ["latin"]
})

const rasa = Hind({
  subsets: ["latin"],
  weight: "400"
})

export async function getStaticProps() {
  const client = createClient(repositoryName);
  const pageContent = await client.getSingle("landing_page");
  return {
    props: {
      pageContent,
    },
  };
}
const thumb = () => <div className="rounded-full bg-black h-20 w-20"></div>

export default function Home({ pageContent }: any) {
  console.log(pageContent);
  return (
    <>
      <Head>
        <title>{pageContent.data.meta_title}</title>
        <meta name="description" content={pageContent.data.meta_description} />
        <meta name="keywords" content={pageContent.data.meta_keywords} />
      </Head>
      <section>
        <motion.div className="hero__grid">
          <motion.div>
            <div className=" flex flex-auto w-full h-full">
              <View>
                <Model />
              </View>
            </div>
          </motion.div>
          <motion.div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              effect="cards"
              spaceBetween={5}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              rewind={true}
              thumbs={{ thumbsContainerClass: "thumbs" }}
            >
              {pageContent.data.slices.map((item: any) =>
                item.slice_type === "table" && item.variation === "default"
                  ? item.items.map((entry: any) =>
                    <SwiperSlide>
                      <div className="inner">
                        <h5 className={heebo.className}>{entry.text}</h5>
                        <p className={rasa.className}>{entry.title}</p>
                      </div>
                    </SwiperSlide>
                  )
                  : null
              )}
            </Swiper>
          </motion.div>
          <motion.div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              effect="cards"
              spaceBetween={5}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              rewind={true}
              thumbs={{ thumbsContainerClass: "thumbs" }}
            >
              {pageContent.data.slices.map((item: any) =>
                item.slice_type === "table" && item.variation === "angebote"
                  ? item.items.map((entry: any) =>
                    <SwiperSlide>
                      <div className="inner">
                        <h5 className={heebo.className}>{entry.text}</h5>
                        <p className={rasa.className}>{entry.title}</p>
                      </div>
                    </SwiperSlide>
                  )
                  : null
              )}
            </Swiper>
          </motion.div>
          <motion.div>
            <div className="relative overflow-hidden">
              <h1>
                {pageContent.data.slices.map((item: any) =>
                  item.slice_type === "hero" ? item.primary.header_one : null
                )}
                <br />{" "}
                {pageContent.data.slices.map((item: any) =>
                  item.slice_type === "hero" ? item.primary.header_two : null
                )}
              </h1>
              <h2>
                {pageContent.data.slices.map((item: any) =>
                  item.slice_type === "hero" ? item.primary.subheader : null
                )}
              </h2>
              <p>
                {pageContent.data.slices.map((item: any) =>
                  item.slice_type === "hero" ? item.primary.text[0].text : null
                )}
              </p>
            </div>
          </motion.div>
          <motion.div></motion.div>
        </motion.div>
      </section>
      {/* <SliceZone slices={pageContent.data.slices} components={components} /> */}
    </>
  );
}
