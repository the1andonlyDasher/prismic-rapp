import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/styles/globals.css"
import '@/styles/scss/style.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout';
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from '@/prismicio'



export default function App({ Component, pageProps, router }: AppProps) {
  const names = ["Home", "Produkte", "Kontakt"];
  const legals_names = [`Datenschutz`, `Impressum`]
  return (
    <Layout navbar={names} legals={legals_names} >
      <PrismicPreview repositoryName={repositoryName} />
      <Component {...pageProps} />
    </Layout>

  )
}
