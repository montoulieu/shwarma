"use client";

import Script from "next/script";

export default function TourDates() {
  return (
    <section id="tour" className="section">
      <div className="section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">Live Shows</span>
          <h2 className="heading heading-gradient mb-4">Tour Dates</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Catch us live. Follow for updates on upcoming shows near you.
          </p>
        </div>

        {/* Bandsintown Widget */}
        <div className="glass-card p-6 md:p-10 max-w-6xl mx-auto">
          <Script
            charSet="utf-8"
            src="https://widgetv3.bandsintown.com/main.min.js"
            strategy="lazyOnload"
          />
          <a
            className="bit-widget-initializer"
            data-artist-name="id_2574282"
            data-events-to-display=""
            data-background-color="rgba(0,0,0,0)"
            data-separator-color="rgba(255,255,255,0.1)"
            data-text-color="rgba(255,255,255,0.9)"
            data-font="Helvetica"
            data-auto-style="true"
            data-button-label-capitalization="uppercase"
            data-header-capitalization="uppercase"
            data-location-capitalization="uppercase"
            data-venue-capitalization="uppercase"
            data-local-dates-position="tab"
            data-display-details="true"
            data-display-lineup="true"
            data-display-start-time="true"
            data-social-share-icon="true"
            data-display-limit="all"
            data-date-format="MMM. D, YYYY"
            data-date-orientation="horizontal"
            data-date-border-color="rgba(132,204,22,0.5)"
            data-date-border-width="1px"
            data-date-capitalization="capitalize"
            data-date-border-radius="10px"
            data-event-ticket-cta-size="medium"
            data-event-custom-ticket-text=""
            data-event-ticket-text="TICKETS"
            data-event-ticket-icon="true"
            data-event-ticket-cta-text-color="rgba(0,0,0,1)"
            data-event-ticket-cta-bg-color="rgba(132,204,22,1)"
            data-event-ticket-cta-border-color="rgba(132,204,22,1)"
            data-event-ticket-cta-border-width="0px"
            data-event-ticket-cta-border-radius="9999px"
            data-sold-out-button-text-color="rgba(255,255,255,1)"
            data-sold-out-button-background-color="rgba(255,255,255,0.1)"
            data-sold-out-button-border-color="rgba(255,255,255,0.2)"
            data-sold-out-button-clickable="true"
            data-event-rsvp-position="right"
            data-event-rsvp-cta-size="medium"
            data-event-rsvp-only-show-icon="false"
            data-event-rsvp-text="RSVP"
            data-event-rsvp-icon="false"
            data-event-rsvp-cta-text-color="rgba(255,255,255,1)"
            data-event-rsvp-cta-bg-color="rgba(255,255,255,0.05)"
            data-event-rsvp-cta-border-color="rgba(132,204,22,0.5)"
            data-event-rsvp-cta-border-width="1px"
            data-event-rsvp-cta-border-radius="9999px"
            data-follow-section-position="bottom"
            data-follow-section-alignment="center"
            data-follow-section-header-text=""
            data-follow-section-cta-size="medium"
            data-follow-section-cta-text="FOLLOW"
            data-follow-section-cta-icon="false"
            data-follow-section-cta-text-color="rgba(0,0,0,1)"
            data-follow-section-cta-bg-color="rgba(132,204,22,1)"
            data-follow-section-cta-border-color="rgba(132,204,22,1)"
            data-follow-section-cta-border-width="0px"
            data-follow-section-cta-border-radius="9999px"
            data-play-my-city-position="bottom"
            data-play-my-city-alignment="center"
            data-play-my-city-header-text="Don't see a show near you?"
            data-play-my-city-cta-size="medium"
            data-play-my-city-cta-text="REQUEST A SHOW"
            data-play-my-city-cta-icon="false"
            data-play-my-city-cta-text-color="rgba(255,255,255,1)"
            data-play-my-city-cta-bg-color="rgba(255,255,255,0.1)"
            data-play-my-city-cta-border-color="rgba(132,204,22,0.5)"
            data-play-my-city-cta-border-width="1px"
            data-play-my-city-cta-border-radius="9999px"
            data-optin-font=""
            data-optin-text-color=""
            data-optin-bg-color=""
            data-optin-cta-text-color=""
            data-optin-cta-bg-color=""
            data-optin-cta-border-width=""
            data-optin-cta-border-radius=""
            data-optin-cta-border-color=""
            data-language="en"
            data-layout-breakpoint="500"
            data-app-id="f43ce00c63ee8e8597a6422af1e4be89"
            data-affil-code=""
            data-bit-logo-position="bottomRight"
            data-bit-logo-color="rgba(255,255,255,0.4)"
            data-display-local-dates="true"
            data-display-past-dates="true"
          ></a>
        </div>
      </div>
    </section>
  );
}
