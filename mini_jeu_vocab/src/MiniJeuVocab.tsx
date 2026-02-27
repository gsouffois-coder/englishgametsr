import React, { useMemo } from "react";
import { Sparkles, Rocket, Globe2, ShieldCheck, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Ultra rapide",
    description: "Une architecture moderne qui charge vos pages en un clin d'œil.",
  },
  {
    icon: Globe2,
    title: "Pensé pour le monde",
    description: "Design responsive, accessible et multilingue pour toucher plus de clients.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurisé",
    description: "Bonnes pratiques intégrées pour protéger les données et la confiance.",
  },
];

const plans = [
  { name: "Starter", price: "49€", detail: "Parfait pour lancer un projet" },
  { name: "Pro", price: "99€", detail: "Idéal pour accélérer votre business" },
  { name: "Scale", price: "199€", detail: "Pour les équipes ambitieuses" },
];

export default function MiniJeuVocabFREN() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="site-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <Sparkles size={20} />
            NovaWave
          </div>
          <div className="menu">
            <a href="#features">Fonctionnalités</a>
            <a href="#plans">Tarifs</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="btn btn-ghost">Démo</button>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Site web stylé • Moderne • Complet</p>
          <h1>Crée une présence en ligne qui impressionne dès la première seconde.</h1>
          <p className="subtitle">
            Une landing page premium avec sections clés, branding soigné et expérience fluide.
          </p>
          <div className="actions">
            <button className="btn btn-primary">
              Commencer maintenant <ArrowRight size={16} />
            </button>
            <button className="btn btn-ghost">Voir les exemples</button>
          </div>
        </div>
      </header>

      <main>
        <section className="features" id="features">
          <h2>Fonctionnalités qui font la différence</h2>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <article className="card" key={title}>
                <div className="icon-wrap">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase">
          <div>
            <h2>Un design premium, prêt à convertir</h2>
            <ul>
              <li>
                <CheckCircle2 size={18} /> Sections optimisées pour raconter votre histoire
              </li>
              <li>
                <CheckCircle2 size={18} /> Call-to-actions clairs pour générer des leads
              </li>
              <li>
                <CheckCircle2 size={18} /> Expérience mobile irréprochable
              </li>
            </ul>
          </div>
          <div className="stats-card">
            <p className="stat-number">+142%</p>
            <p>de conversions observées sur des interfaces bien structurées.</p>
          </div>
        </section>

        <section className="plans" id="plans">
          <h2>Des offres simples</h2>
          <div className="plan-grid">
            {plans.map((plan) => (
              <article className="plan-card" key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p>{plan.detail}</p>
                <button className="btn btn-primary">Choisir</button>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Parlons de votre projet</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Email
              <div className="input-wrap">
                <Mail size={16} />
                <input type="email" placeholder="vous@exemple.com" required />
              </div>
            </label>
            <label>
              Message
              <textarea placeholder="Décris ton besoin..." rows={4} />
            </label>
            <button className="btn btn-primary" type="submit">
              Envoyer
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">© {year} NovaWave — Tous droits réservés.</footer>
    </div>
  );
}
