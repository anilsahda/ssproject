import React from "react";

function SSInterns() {
  const links = [
    "https://www.elementalrealty.in/",
    "https://vasavibhuvi.com/",
    "https://cmnhousing.com/",
    "https://propertyadviser.in/",
    "https://gowragreendale.com/",
    "https://www.pragathidevelopers.in/",
    "https://www.hindustantownships.com",
    "https://nslinfratech.com/",
    "https://janapriyaupscale.com/",
    "https://prrdevelopers.in",
    "https://ark-kushak.com/",
    "https://wavebyraghava.com/",
    "https://www.myhomeconstructions.com/",
    "https://www.onthemarket.co.in/",
    "https://www.realestateindia.com/",
    "https://www.hexahome.in/",
    "https://www.gjkediahomes.com/",
    "https://grenstone.in/",
    "https://liostukkuguda.com/",
    "https://www.krishepearl.com/",
    "https://anvayavillas.com/",
    "https://greenwich.pranavagroup.com/",
    "https://www.eauctionsindia.com/",
    "https://myhomelandowners.in/",
    "https://bluefinconstructions.com/",
    "https://sattvalago.in/",
    "https://ridgehomes.in/",
    "https://cozyessence.com/",
    "https://sreenivasaminfra.com/",
    "https://candeurtwins.com",
    "https://hubplots.aliensgroup.in/",
    "https://aliensgroup.in/",
    "https://marquise.in/",
    "https://vaishnaoigroup.com/",
    "https://srrhillscape.com/",
    "https://pinnacle-stj-group.sales-office.in/",
    "https://www.homeonline.com/",
    "https://www.dhanbhumi.com/",
    "https://www.malhirealestate.in/",
    "https://mrhomez.com/",
    "https://globalprimerealty.com/",
    "https://www.sothebysrealty.com/",
    "https://www.letsrentz.com/",
    "https://waveestatemohali.com/",
    "https://earthproperties.co.in/",
    "https://projects.growinfinityrealtors.in/",
    "https://expresszenith-noida.com/",
    "https://www.kalpataru.com/",
    "https://www.360realtors.com/",
    "https://greenbeautyfarmsnoida.in/",
    "https://aurariserealty.com/",
    "https://www.eldecogroup.com/",
    "https://www.reeltor.com/",
    "https://property.sulekha.com/",
    "https://www.nobroker.in/",
    "https://www.magicbricks.com/",
    "https://www.99acres.com/",
    "https://www.olx.in/",
    "https://www.squareyards.com/",
    "https://housing.com/",
  ];

  return (
    <div className="container py-4">
      <h1 className="mb-4">SS Interns</h1>

      <ul className="list-group">
        {links.map((link, index) => (
          <li key={index} className="list-group-item">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SSInterns;