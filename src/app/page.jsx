import Header from "../components/Header";
import App from "./heroSection/App";
import Popularclass from "./popularClass/components/PopularClass";
import Services from "./services/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <App />
      <Services />
      <Popularclass />
    </div>

  );
}
