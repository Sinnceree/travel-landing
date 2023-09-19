import Navigation from "components/navigation";
import styles from "./app.module.css";
import Header from "components/header";
import Offers from "components/offers";
import Property from "components/property-types";
import PromoHero from "components/promo-hero";
import Community from "components/community";
import Footer from "components/footer";

const App = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Navigation />

      <Header />

      <Offers />
      
      <Property />

      <PromoHero />

      <Community />

      <Footer />
    </div>
  );
};

export default App;
