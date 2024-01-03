import "@/styles/globals.css"
import '@/styles/scss/style.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout';



const variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 2, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
      duration: 0.5,
      delay: 2,
    },
  },
};

const handExitComplete = () => {
  window.scrollTo(0, 0);
  if (typeof window !== "undefined") {
    // Get the hash from the url
    const hashId = window.location.hash;

    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(`${hashId}`);

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        console.log("scrollToHash");
      }
    }
    // else {
    //   window.scrollTo(0,0)
    //   console.log("scrollTop")
    // }
  }
};

export default function App({ Component, pageProps, router }: AppProps) {
  const names = ["Home", "Produkte", "Kontakt"];
  const legals_names = [`Datenschutz`, `Impressum`]
  return (
    <Layout navbar={names} legals={legals_names} >
      <Component {...pageProps} />
    </Layout>

  )
}
