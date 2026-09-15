import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import WelcomeBanner from "./components/WelcomeBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <WelcomeBanner />

        <Hero />

        <section id="features">
          <h2>Our Features</h2>

          <div className="feature-container">
            <FeatureCard
              icon="⚡"
              title="Fast"
              description="Build fast and responsive web applications."
            />

            <FeatureCard
              icon="♻️"
              title="Reusable"
              description="Create reusable components to keep your code clean."
            />

            <FeatureCard
              icon="🚀"
              title="Modern"
              description="Use modern React concepts to build better interfaces."
            />
          </div>
        </section>

        <section id="about">
          <h2>About ReactStart</h2>

          <p>
            ReactStart is a simple landing page created to practice
            React components, JSX, props and composition.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;