"use client";

import { ArrowUpRight, CalendarDays, Clock3, Users, X } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";
import { siteData } from "@/data/siteData";

export function ReservationModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    const openModal = () => { setSubmitted(false); setOpen(true); };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("open-reservation", openModal);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("open-reservation", openModal);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const whatsapp = siteData.contact.whatsapp.replace(/\D/g, "");
    if (!whatsapp) {
      setConfirmationMessage(siteData.reservation.noWhatsappMessage);
      setSubmitted(true);
      return;
    }
    const reservationData = siteData.reservation;
    const message = [
      `${reservationData.whatsappIntro} ${siteData.brand.name}.`,
      `${reservationData.fields.name}: ${values.get("name")}`,
      `${reservationData.fields.guests}: ${values.get("guests")}`,
      `${reservationData.fields.date}: ${values.get("date")}`,
      `${reservationData.fields.time}: ${values.get("time")}`,
      `${reservationData.fields.phone}: ${values.get("phone")}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setConfirmationMessage(siteData.reservation.sentMessage);
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <section className="reservation-modal" role="dialog" aria-modal="true" aria-label={siteData.reservation.formDialogLabel}>
        <button className="modal-close" aria-label={siteData.reservation.closeLabel} onClick={() => setOpen(false)}><X size={20} /></button>
        <p className="eyebrow">{siteData.reservation.eyebrow}</p>
        <h2>{siteData.reservation.title}</h2>
        <p className="modal-lead">{siteData.contact.reservationLead}</p>
        {submitted ? (
          <div className="reservation-success" role="status">
            <span>✓</span><p>{confirmationMessage}</p>
            <button className="text-link" onClick={() => setOpen(false)}>{siteData.reservation.backToSite} <ArrowUpRight size={15} /></button>
          </div>
        ) : (
          <form className="reservation-form" onSubmit={handleSubmit}>
            <label>{siteData.reservation.nameLabel}<input name="name" autoComplete="name" placeholder={siteData.reservation.namePlaceholder} required /></label>
            <div className="form-pair">
              <label><span><Users size={14} /> {siteData.reservation.guestsLabel}</span><select name="guests" defaultValue={siteData.reservation.defaultGuests}>{siteData.reservation.guestOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
              <label><span><CalendarDays size={14} /> {siteData.reservation.dateLabel}</span><input name="date" type="date" required /></label>
            </div>
            <div className="form-pair">
              <label><span><Clock3 size={14} /> {siteData.reservation.timeLabel}</span><select name="time" defaultValue={siteData.reservation.defaultTime}>{siteData.reservation.suggestedTimes.map((time) => <option key={time}>{time}</option>)}</select></label>
              <label>{siteData.reservation.phoneLabel}<input name="phone" type="tel" autoComplete="tel" placeholder={siteData.reservation.phonePlaceholder} required /></label>
            </div>
            <button className="button button-olive modal-submit" type="submit">{siteData.reservation.submitLabel} <ArrowUpRight size={16} /></button>
            <p className="modal-note">{siteData.reservation.note}</p>
          </form>
        )}
      </section>
    </div>
  );
}
