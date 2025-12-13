'use client';

import { useState } from 'react';

interface PricingCalculatorProps {
  skuPrefix: string;
}

export default function PricingCalculator({ skuPrefix }: PricingCalculatorProps) {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  
  // This is a simplified version - you'll need to integrate with your actual
  // pricing data from Dataverse or a pricing API
  
  const plans = {
    'ASS-': [
      { id: 'basic', name: 'Basic', price: 25, unit: 'property/month' },
      { id: 'standard', name: 'Standard', price: 45, unit: 'property/month' },
      { id: 'premium', name: 'Premium', price: 75, unit: 'property/month' },
    ],
    'DEALS-': [
      { id: 'agent', name: 'Agent', price: 35, unit: 'user/month' },
      { id: 'team', name: 'Team', price: 30, unit: 'user/month' },
      { id: 'brokerage', name: 'Brokerage', price: 'Custom', unit: '' },
    ],
    'OPS-': [
      { id: 'starter', name: 'Starter', price: 50, unit: 'property/month' },
      { id: 'professional', name: 'Professional', price: 85, unit: 'property/month' },
      { id: 'enterprise', name: 'Enterprise', price: 'Custom', unit: '' },
    ],
  };

  const currentPlans = plans[skuPrefix as keyof typeof plans] || plans['OPS-'];

  return (
    <div className="cal-pricing-calculator">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '24px',
        maxWidth: '900px',
        margin: '0 auto 48px'
      }}>
        {currentPlans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            style={{
              padding: '32px 24px',
              border: selectedPlan === plan.id ? '2px solid #F6C1D9' : '1px solid rgba(0,0,0,0.08)',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              background: selectedPlan === plan.id ? '#fafafa' : '#ffffff',
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '500', margin: '0 0 12px 0' }}>
              {plan.name}
            </h3>
            <div style={{ fontSize: '36px', fontWeight: '300', margin: '12px 0' }}>
              {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
            </div>
            {plan.unit && (
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                {plan.unit}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <a
          href={`/marketplace/configure?sku=${skuPrefix}${selectedPlan}`}
          className="cal-btn cal-btn-accent cal-btn-large"
        >
          Start your free 14 day trial
        </a>
      </div>
    </div>
  );
}
