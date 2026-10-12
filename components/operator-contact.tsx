import { Fragment } from "react";
import { addressLines, operator } from "@/data/operator";

/** Anschrift des Betreibers als Block. */
export function OperatorAddress() {
  const lines = addressLines();
  return <address className="legal-address">{lines.map((line, i) => <Fragment key={line}>{line}{i < lines.length - 1 && <br />}</Fragment>)}</address>;
}

/** Telefon und, sobald hinterlegt, E-Mail als anklickbare Zeilen. */
export function OperatorContact() {
  return (
    <ul className="legal-contact">
      <li><span>Telefon</span><a href={`tel:${operator.phoneHref}`}>{operator.phone}</a></li>
      {operator.email && <li><span>E-Mail</span><a href={`mailto:${operator.email}`}>{operator.email}</a></li>}
    </ul>
  );
}
