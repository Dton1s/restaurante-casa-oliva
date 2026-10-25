"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteData } from "@/data/siteData";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openReservation() {
    setMenuOpen(false);
    window.dispatchEvent(new Event("open-reservation"));
  }

  return (
    <header className="site-header">
      <div className="header-inner mx-auto flex max-w-7xl items-center justify-between px-6">
        <a className="brand-lockup" href="#inicio" aria-label={`${siteData.brand.name}`}>
          <span className="brand-wordmark">{siteData.brand.name}</span>
          <span className="brand-description">{siteData.brand.descriptor}</span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} id="main-nav" aria-label={siteData.ui.primaryNavLabel}>
          {siteData.navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <button className="nav-reserve mobile-reserve" onClick={openReservation}>
            {siteData.ui.reserve} <ArrowUpRight size={15} />
          </button>
        </nav>
        <button className="nav-reserve desktop-reserve" onClick={openReservation}>
          {siteData.ui.reserve} <ArrowUpRight size={15} />
        </button>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? siteData.ui.closeMenu : siteData.ui.openMenu}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
