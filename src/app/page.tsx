import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { MenuSection } from "@/components/menu-section";
import { ReservationModal } from "@/components/reservation-modal";
import { Reviews } from "@/components/reviews";
import { SiteHeader } from "@/components/site-header";
import { siteData } from "@/data/siteData";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <section className="story-section section-pad" id="historia">
        <div className="story-mark" aria-hidden="true">CO</div>
        <div className="story-copy">
          <p className="eyebrow">{siteData.story.eyebrow}</p>
          <h2>{siteData.story.title}</h2>
          <p className="story-body">{siteData.story.body}</p>
          <p className="story-signature">{siteData.story.signature}</p>
        </div>
        <div className="story-aside"><span>{siteData.story.asideIndex}</span><span>{siteData.story.asideLine.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</span></div>
      </section>
      <MenuSection />
      <Reviews />
      <Location />
      <Footer />
      <ReservationModal />
    </main>
  );
}
