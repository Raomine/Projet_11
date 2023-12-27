import "./index.css";
import ChatIcon from "../../asset/icon-chat.png";
import MoneyIcon from "../../asset/icon-money.png";
import SecurityIcon from "../../asset/icon-security.png";

function Hero() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

const FEATURES = [
  {
    id: 0,
    imageUrl: ChatIcon,
    title: "You are our #1 priority",
    text: `Need to talk to a representative? You can get in touch through our
    24/7 chat or through a phone call in less than 5 minutes.`,
  },
  {
    id: 1,
    imageUrl: MoneyIcon,
    title: "More savings means higher rates",
    text: `The more you save with us, the higher your interest rate will be!`,
  },
  {
    id: 2,
    imageUrl: SecurityIcon,
    title: "Security you can trust",
    text: `We use top of the line encryption to make sure your data and money
    is always safe.`,
  },
];
function Features({ imageUrl, title, text }) {
  return (
    <div className="feature-item">
      <img src={imageUrl} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {FEATURES.map((feature) => (
          <Features key={feature.id} {...feature} />
        ))}
      </section>
    </main>
  );
}

export default Index;
