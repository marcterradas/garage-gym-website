import Head from "@/application/layout/Head";
import Navbar from "@/application/layout/Navbar";
//import Footer from "@/application/layout/Footer";

export default function Home() {
  return (
    <>
      <Head />
      <div className="px-4 m-auto max-w-screen-2xl">
        <Navbar />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../infrastructure/translations/${locale}.json`))
        .default,
    },
  };
}
