import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { OrderForm } from './components/OrderForm';
import { Plan } from './types';

export default function App() {
  const [isOrderFormVisible, setOrderFormVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleOrderNow = useCallback((plan: Plan) => {
    setSelectedPlan(plan);
    setOrderFormVisible(true);
  }, []);

  const handleCloseForm = useCallback(() => {
    setOrderFormVisible(false);
    setSelectedPlan(null);
  }, []);
  
  const handleOpenFormWithoutPlan = useCallback(() => {
    setSelectedPlan(null);
    setOrderFormVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Header onOrderNow={handleOpenFormWithoutPlan} />
      <main>
        <Hero onOrderNow={handleOpenFormWithoutPlan} />
        <Benefits />
        <Portfolio />
        <Pricing onOrderNow={handleOrderNow} />
        <About />
      </main>
      <Footer />

      {isOrderFormVisible && (
        <OrderForm selectedPlan={selectedPlan} onClose={handleCloseForm} />
      )}
    </div>
  );
}
