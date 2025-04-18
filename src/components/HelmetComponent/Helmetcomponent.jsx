import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content="IJCBS, International Journal of Cognitive and Behavioral Sciences , Cognitive and Behavioral Sciences, Journal & Performance research papers ,Cognitive and Behavior, Science, Psychology" />
      <meta name="description" content="The International Journal of Cognitive and Behavioral Sciences publishes high-quality research in psychology, neuroscience, cognition, and behavior. Explore peer-reviewed articles, case studies, and reviews focused on mental health, brain science, and human behavior across all age groups and cultures." />
      <meta name="author" content="IJCBS Editorial Team" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="International Journal of Cognitive and Behavioral Sciences" />
      <meta property="og:description" content="The International Journal of Cognitive and Behavioral Sciences publishes high-quality research in psychology, neuroscience, cognition, and behavior. Explore peer-reviewed articles, case studies, and reviews focused on mental health, brain science, and human behavior across all age groups and cultures." />
      <meta property="og:url" content="https://www.ijcbs.com/" />
      {/* <meta property="og:image" content="https://www.ijcbs.com/assets/images/ijcbs.png" /> */}

      {/* <link rel="icon" type="image/png" href="https://www.ijcbs.com/assets/images/Favicon.png" /> */}
    </Helmet>
  );
};

export default HelmetComponent;