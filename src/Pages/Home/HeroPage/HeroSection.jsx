import woman from "../../../assets/images/download.png";
import "./Hero.css";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Laura Walsh Morgan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Crypto Trading Expert
            </span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            I am a crypto trading expert who possess a deep understanding on
            different cryptocurrencies, market dynamics, technical analysis,
            risk management, and trading strategies.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={woman} alt="Hero Section" />
      </div>
    </section>
  );
}
