export default function UserPage() {
    const destinations = [
        {
            navn: "Paris, Frankrig",
            beskrivelse: "Oplev romantikken i Paris, hjemsted for Eiffeltårnet, kunst og fantastisk mad.",
            billede: "https://cdn.pixabay.com/photo/2013/07/13/11/49/paris-158753_1280.png"
        },
        {
            navn: "Kyoto, Japan",
            beskrivelse: "Tradition møder moderne kultur i Kyoto, kendt for sine templer og smukke haver.",
            billede: "https://cdn.pixabay.com/photo/2013/07/13/11/49/paris-158753_1280.png"
        },
        {
            navn: "Santorini, Grækenland",
            beskrivelse: "Hvidkalkede huse med blå tage og fantastiske solnedgange gør Santorini uforglemmelig.",
            billede: "https://cdn.pixabay.com/photo/2013/07/13/11/49/paris-158753_1280.png"
        },
        {
            navn: "New York, USA",
            beskrivelse: "Pulserende liv, imponerende skyskrabere og verdenskendte seværdigheder.",
            billede: "https://cdn.pixabay.com/photo/2013/07/13/11/49/paris-158753_1280.png"
        }
    ];

    return (
        <div className="destinations-container">
            {destinations.map((destination, index) => (
                <div key={index} className="destination-card">
                    <img src={destination.billede} alt={destination.navn} className="destination-image"/>
                    <h3>{destination.navn}</h3>
                    <p>{destination.beskrivelse}</p>
                </div>
            ))}
        </div>
    );
}
