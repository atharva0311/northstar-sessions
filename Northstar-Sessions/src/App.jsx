import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main className="container" id="main" tabIndex={-1}>
        <Hero />
        <Features />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
