// Power Automate webhook integration
// These webhooks connect to your Power Automate flows in Calisto One

export interface FormSubmission {
  formType: 'trial' | 'contact' | 'collection-application' | 'demo';
  data: Record<string, any>;
}

export async function submitToPowerAutomate(submission: FormSubmission): Promise<boolean> {
  // Map form types to webhook URLs (set these in .env.local)
  const webhookUrls: Record<string, string> = {
    'trial': process.env.NEXT_PUBLIC_WEBHOOK_TRIAL || '',
    'contact': process.env.NEXT_PUBLIC_WEBHOOK_CONTACT || '',
    'collection-application': process.env.NEXT_PUBLIC_WEBHOOK_COLLECTION || '',
    'demo': process.env.NEXT_PUBLIC_WEBHOOK_DEMO || '',
  };

  const webhookUrl = webhookUrls[submission.formType];

  if (!webhookUrl) {
    console.error(`No webhook URL configured for form type: ${submission.formType}`);
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType: submission.formType,
        submittedAt: new Date().toISOString(),
        ...submission.data,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error submitting to Power Automate:', error);
    return false;
  }
}

// Example usage in a form component:
/*
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  
  const success = await submitToPowerAutomate({
    formType: 'trial',
    data: {
      email: email,
      company: company,
      product: 'calisto-ops',
      // ... other form fields
    },
  });

  if (success) {
    // Show success message
  } else {
    // Show error message
  }
};
*/
