import Nav from "./components/Nav";
import { CustomerReviews, Hero, PopularProducts, SuperQuality, Services, SpecialOffer, Subscribe, Footer } from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r paddibg-b">
      <Hero />
    </section>
    <section className="sm:px-16 sm:py-24 px-8 py-12">
      <PopularProducts />
    </section>
    <section className="padding ">
      <SuperQuality />
    </section>
    <section className="padding-x py-10 ">
      <Services />
    </section>
    <section className="padding ">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding padding-x sm:py-31 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App;