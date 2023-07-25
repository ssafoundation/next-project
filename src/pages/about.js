import AboutCallToAction from "@/components/about/AboutCallToAction";
import AboutDetails from "@/components/about/AboutDetails";
import AboutExperience from "@/components/about/AboutExperience";
import AboutHero from "@/components/about/AboutHero";
import AboutMobileHero from "@/components/about/AboutMobileHero";
import ExploreShiekhSlider from "@/components/about/ExploreShiekhSlider";
import PhotographSlider from "@/components/about/PhotographSlider";
import Writing from "@/components/home/Writing";
import Layout from "@/components/layout/Layout";
import useResolution from "@/utils/useResolution";
import Head from "next/head";

const about = () => {
  const { width } = useResolution();
  console.log(width);
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="Job task about" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Layout>
        {width <= 991 ? <AboutMobileHero /> : <AboutHero />}
        <AboutDetails />
        <AboutExperience />
        <ExploreShiekhSlider />
        <PhotographSlider />
        <AboutCallToAction />
        <Writing />
      </Layout>
    </>
  );
};

export default about;
