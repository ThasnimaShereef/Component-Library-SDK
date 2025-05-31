import React, { useState } from 'react';
import RegistrationFormPage from './pages/RegistrationFormPage';
import TicketConfirmationPage from './pages/TicketConfirmationPage';

const App: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    email: string;
    githubUsername: string;
    avatarUrl: string;
  } | null>(null);

  const handleFormSubmit = (data: {
    fullName: string;
    email: string;
    githubUsername: string;
    avatarUrl: string;
  }) => {
    setSubmittedData(data);
  };

  return (
    <>
      {!submittedData ? (
        <RegistrationFormPage onSubmit={handleFormSubmit} />
      ) : (
        <TicketConfirmationPage
          fullName={submittedData.fullName}
          email={submittedData.email}
          githubUsername={submittedData.githubUsername}
          avatarUrl={submittedData.avatarUrl}
          ticketNumber="01609"
          eventDate="Jan 31, 2025"
          eventLocation="Austin, TX"
        />
      )}
    </>
  );
};

export default App;
