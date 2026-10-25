import { Star } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Reviews() {
  return (
    <section className="reviews-section section-pad" aria-labelledby="reviews-title">
      <div className="reviews-inner mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="reviews-heading">
          <p className="eyebrow">{siteData.reviews.eyebrow}</p>
          <h2 id="reviews-title">{siteData.reviews.title}</h2>
          <div className="rating-block">
            <strong>{siteData.reviews.rating}</strong>
            <div>
              <span className="stars" aria-label={siteData.ui.reviewsStarsLabel.replace("{count}", String(siteData.reviews.stars))}>
                {Array.from({ length: siteData.reviews.stars }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.2} />)}
              </span>
              <small>{siteData.reviews.source}</small>
            </div>
          </div>
          <p className="review-disclaimer">{siteData.reviews.disclaimer}</p>
        </div>
        <div className="quote-grid">
          {siteData.reviews.quotes.map((quote, index) => (
            <figure className="quote-card" key={quote.author}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{quote.text}</blockquote>
              <figcaption><span className="review-avatar">{quote.author.slice(0, 1)}</span><span><b>{quote.author}</b><small>{quote.detail}</small></span><span className="quote-number">0{index + 1}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
