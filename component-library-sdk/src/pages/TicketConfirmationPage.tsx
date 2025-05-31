import React from 'react';
import { Typography, TicketCard } from '../components';
import './TicketConfirmationPage.css';

interface TicketConfirmationPageProps {
  fullName: string;
  email: string;
  githubUsername: string;
  avatarUrl: string;
  ticketNumber: string;
  eventDate: string;
  eventLocation: string;
}

const TicketConfirmationPage: React.FC<TicketConfirmationPageProps> = ({
  fullName,
  email,
  githubUsername,
  avatarUrl,
  ticketNumber,
  eventDate,
  eventLocation,
}) => {
  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="logo">Coding Conf</div>
        <Typography variant="h1" className="congrats-text">
          Congrats, <span className="highlight">{fullName}</span>! Your ticket is ready.
        </Typography>
        <Typography variant="body" className="email-text">
          We've emailed your ticket to <span className="highlight">{email}</span> and will send updates in the run up to the event.
        </Typography>

        <TicketCard
          avatarUrl={avatarUrl}
          fullName={fullName}
          githubUsername={githubUsername}
          ticketNumber={ticketNumber}
          eventDate={eventDate}
          eventLocation={eventLocation}
        />
      </div>
    </div>
  );
};

export default TicketConfirmationPage;
