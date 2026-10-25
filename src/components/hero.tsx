"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Hero() {
  function openReservation() {
    window.dispatchEvent(new Event("open-reservation"));
  }

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-inner mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="hero-copy">
          <p className="hero-kicker"><span className="olive-dot" /> {siteData.hero.eyebrow}</p>
          <h1>{siteData.hero.titleStart}<br /><em>{siteData.hero.titleEmphasis}</em></h1>
          <p className="hero-description">{siteData.hero.description}</p>
          <div className="hero-actions">
            <button className="button button-olive" onClick={openReservation}>{siteData.ui.reserveForUs} <ArrowUpRight size={17} /></button>
            <a className="text-link" href="#carta">{siteData.ui.discoverMenu} <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-location"><MapPin size={14} /> {siteData.hero.locationCaption}</div>
        </div>
        <figure className="hero-photo-wrap">
          <div className="hero-photo">
            <Image
              src={siteData.hero.image}
              alt={siteData.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 56vw"
              className="photo-image"
            />
            <span className="photo-index">01 <i /> 03</span>
          </div>
          <figcaption><span>{siteData.hero.imageCaption}</span><span>CASA OLIVA — {siteData.brand.descriptor}</span></figcaption>
          <span className="hero-stamp" aria-hidden="true">hecho<br />con calma</span>
        </figure>
      </div>
    </section>
  );
}
