import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags.js";
import Loader from "../../components/Loader/loader.jsx";
import "../AboutPage/loading.css";
import KeyConcept from "../../components/keyConcept/keyConcept.jsx";
import NewHomepage from "../../components/home/homepage.jsx"
const Hero = React.lazy(() => import("../../components/hero"));
const About = React.lazy(() => import("../../components/about"));
const Container = React.lazy(() => import("../Status/status.jsx"));
const ServiceSection = React.lazy(() =>
  import("../../components/ServiceSection")
);


const Testimonial = React.lazy(() => import("../../components/testimonial"));
const Footer = React.lazy(() => import("../../components/footer"));
const OngoingProjects = React.lazy(() =>
  import("../../components/ourOnGoingProjects/ourOnGoingProjects.jsx")
);

const HomePage = () => {
  // const description =
  //   "";
  // const ogTitle = "";
  // const ogDescription =
  //   " ";
  // const ogUrl = "";
  // const title =
  //   " ";

  // useEffect(() => {
  //   updateMetaTags({
  //     title,
  //     description,
  //     ogTitle,
  //     ogDescription,
  //     ogUrl,
  //   });
  // }, [title, description, ogTitle, ogDescription, ogUrl]);
  
  return (
    <>
      {/* <Helmet> */}
        {/* <title>{title}</title> */}
        {/* <meta name="description" content={description} /> */}
        {/* <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} /> */}
        {/* <meta
          property="og:image"
          content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png"
        /> */}
        {/* <meta property="og:url" content={ogUrl} /> */}
      {/* </Helmet> */}
      {/* <Header/> */}
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        {/* <Hero/> */}
        <NewHomepage/>
        {/* <About text={""} readMore="read more" /> */}
        <KeyConcept  />
        {/* <Container /> */}
        <OngoingProjects />
        <ServiceSection />
        <Testimonial />
        <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;
