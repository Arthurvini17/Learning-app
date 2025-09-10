import Header from "./components/Header";
import App from "./App";
import Feedbacks from "./home/feedbacks/Feedbacks";
import Heroes from "./home/heroes/Heroes";
import Popularclass from "./home/popularClass/PopularClass";
import RecentBlogs from "./home/recentBlogs/RecentBlogs";
import Services from "./home/services/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <App />
      <Services />
      <Popularclass />
      <Heroes />
      <Feedbacks />
      <RecentBlogs />
    </div>

  );
}
