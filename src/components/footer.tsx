import { ArrowUpRight, Instagram, Phone } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Footer() {
  const contactReady = Boolean(siteData.contact.whatsapp || siteData.contact.phone);

  return (
    <footer className="site-footer">
      <div className="footer-main mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_0.7fr_1fr]">
        <div>
          <a className="footer-brand" href="#inicio">{siteData.brand.name}<span>®</span></a>
          <p className="footer-descriptor">{siteData.brand.descriptor}<br />{siteData.brand.conceptLabel}</p>
        </div>
        <nav className="footer-links" aria-label={siteData.ui.primaryNavLabel}>{siteData.footer.navLinks.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <div className="footer-contact">
          {contactReady ? <a href={`tel:${siteData.contact.phone}`}><Phone size={14} /> {siteData.contact.phone}</a> : <span><Phone size={14} /> {siteData.ui.phoneSetup}</span>}
          {siteData.contact.instagram ? <a href={siteData.contact.instagram} target="_blank" rel="noreferrer"><Instagram size={14} /> {siteData.contact.instagramLabel} <ArrowUpRight size={13} /></a> : <span><Instagram size={14} /> {siteData.ui.instagramSetup}</span>}
        </div>
      </div>
      <div className="footer-bottom mx-auto flex max-w-7xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
        <span>{siteData.footer.yearPrefix} {new Date().getFullYear()} {siteData.brand.name} · {siteData.footer.legal}</span>
        <a href={siteData.footer.agencyUrl} target="_blank" rel="noreferrer">{siteData.footer.signoff} <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
