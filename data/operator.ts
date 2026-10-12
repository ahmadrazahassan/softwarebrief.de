/* Angaben zum Betreiber der Website. Sie stehen im Impressum, auf der Kontaktseite und in der Datenschutzerklärung.
   Nur hier ändern. Wer die Website öffentlich betreibt, muss diese Angaben vollständig und aktuell halten (§ 5 DDG). */

export const operator = {
  /** Betreiber als natürliche Person. Wird die Website über eine Firma betrieben (zum Beispiel UG oder GmbH), müssen Firmenname, Rechtsform, Vertreter und Registernummer ergänzt werden. */
  name: "Niklas Winterfeld",
  /** Die Anschrift lautet auf eine andere Person. Hier steht sie als "c/o". Leer lassen, wenn die Post direkt an den Betreiber geht. */
  careOf: "Hanspeter Engel",
  street: "Seilerstraße 47/4",
  postalCode: "20359",
  city: "Hamburg",
  country: "Deutschland",
  phone: "+49 176 16149773",
  phoneHref: "+4917616149773",
  /** Pflichtangabe im Impressum neben der Anschrift. Erscheint auf Impressum, Kontakt, Datenschutz und im Seitenfuß. */
  email: "niklas.winterfeld@softwarebrief.de" as string | undefined,
  /** Öffentliche Adresse der Website. Eine gesetzte Umgebungsvariable NEXT_PUBLIC_SITE_URL hat Vorrang. */
  siteUrl: "https://softwarebrief.de",
  /** Umsatzsteuer Identifikationsnummer, falls vorhanden. */
  vatId: undefined as string | undefined,
  /** Zuständige Aufsichtsbehörde für den Datenschutz (Sitz des Betreibers in Hamburg). */
  supervisor: {
    name: "Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit",
    street: "Ludwig-Erhard-Straße 22",
    city: "20459 Hamburg",
    url: "https://datenschutz-hamburg.de/",
  },
  /** Hosting der Website. Anpassen, falls die Website nicht bei Cloudflare betrieben wird. */
  hosting: { name: "Cloudflare, Inc.", country: "USA", privacyUrl: "https://www.cloudflare.com/de-de/privacypolicy/" },
};

export const addressLines = () => [
  operator.name,
  ...(operator.careOf ? [`c/o ${operator.careOf}`] : []),
  operator.street,
  `${operator.postalCode} ${operator.city}`,
  operator.country,
];
