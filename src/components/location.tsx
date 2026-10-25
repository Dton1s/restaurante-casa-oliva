import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Location() {
  const mapsHref = siteData.location.mapsUrl || siteData.ui.mapFallbackUrl;

  return (
    <section className="location-section section-pad" id="ubicacion">
      <div className="section-topline mx-auto flex max-w-7xl items-end justify-between px-6">
        <div><p className="eyebrow">{siteData.location.eyebrow}</p><h2>{siteData.location.title}</h2></div>
        <p className="section-intro">{siteData.location.note}</p>
      </div>
      <div className="location-grid mx-auto grid max-w-7xl gap-5 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="map-card" aria-label={siteData.ui.mapAccessibleLabel}>
          <div className="map-paper" aria-hidden="true">
            <svg viewBox="0 0 720 430" preserveAspectRatio="xMidYMid slice">
              <path d="M-20 112 C135 96 161 175 306 156 S480 74 748 112" />
              <path d="M-30 303 C103 248 198 342 320 286 S513 228 752 282" />
              <path d="M168 -18 C202 80 177 143 225 223 S315 319 296 450" />
              <path d="M494 -15 C462 81 535 147 485 229 S428 329 468 454" />
              <path className="map-road-major" d="M-15 210 C149 226 233 192 359 225 S588 206 743 223" />
              <path className="map-road-major" d="M355 -20 C332 79 380 137 349 226 S337 333 363 450" />
              <circle cx="359" cy="220" r="29" />
              <circle className="map-pin-core" cx="359" cy="220" r="8" />
              <text x="388" y="216">{siteData.brand.name.toUpperCase()}</text>
              <text x="388" y="235" className="map-label-small">{siteData.ui.mapPinLabel}</text>
            </svg>
            <span className="map-stamp"><MapPin size={15} /> {siteData.location.city}</span>
          </div>
        </div>
        <div className="location-details">
          <article className="location-detail">
            <span className="detail-icon"><MapPin size={18} /></span>
            <div><small>{siteData.ui.locationLabel}</small><p>{siteData.location.address}</p><span>{siteData.location.city}</span></div>
          </article>
          <article className="location-detail hours-detail">
            <span className="detail-icon"><Clock3 size={18} /></span>
            <div><small>{siteData.location.hoursTitle}</small>
              <ul>{siteData.location.hours.map((item) => <li key={item.days}><span>{item.days}</span><b>{item.time}</b></li>)}</ul>
            </div>
          </article>
          <a className="button button-olive maps-button" href={mapsHref} target="_blank" rel="noreferrer">
            {siteData.ui.mapsAction} <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
