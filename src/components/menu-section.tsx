"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { siteData, type MenuCategory } from "@/data/siteData";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(siteData.menu.categories[0]);
  const visibleDishes = useMemo(
    () => siteData.menu.items.filter((dish) => dish.category === activeCategory),
    [activeCategory],
  );

  function openReservation() {
    window.dispatchEvent(new Event("open-reservation"));
  }

  return (
    <section className="menu-section section-pad" id="carta">
      <div className="section-topline mx-auto flex max-w-7xl items-end justify-between px-6">
        <div>
          <p className="eyebrow">{siteData.menu.eyebrow}</p>
          <h2>{siteData.menu.title}</h2>
        </div>
        <p className="section-intro">{siteData.menu.description}</p>
      </div>
      <div className="menu-content mx-auto max-w-7xl px-6">
        <div className="menu-tabs" role="tablist" aria-label={siteData.ui.menuTabListLabel}>
          {siteData.menu.categories.map((category, index) => (
            <button
              key={category}
              role="tab"
              id={`tab-${index}`}
              aria-selected={activeCategory === category}
              aria-controls={siteData.menu.tabPanelId}
              className={`menu-tab ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              <span>0{index + 1}</span>{category}
            </button>
          ))}
          <button className="menu-print-link" type="button" onClick={openReservation}>{siteData.ui.menuPrintAction} <ArrowUpRight size={15} /></button>
        </div>
        <div className="dish-grid" id={siteData.menu.tabPanelId} role="tabpanel" aria-labelledby={`tab-${siteData.menu.categories.indexOf(activeCategory)}`}>
          {visibleDishes.map((dish, index) => (
            <article className={`dish-card ${index === 0 ? "dish-featured" : ""}`} key={dish.name}>
              <div className="dish-image-wrap">
                <Image src={dish.image} alt={dish.imageAlt} fill sizes="(max-width: 760px) 90vw, 42vw" className="photo-image" />
                <span className="dish-note">{dish.note}</span>
              </div>
              <div className="dish-info">
                <div><h3>{dish.name}</h3><p>{dish.description}</p></div>
                <span className="dish-price">{dish.price}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-disclaimer">{siteData.menu.menuNote}</p>
      </div>
    </section>
  );
}
