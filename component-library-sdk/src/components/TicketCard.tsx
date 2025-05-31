import * as React from 'react';
import './TicketCard.css';

interface TicketCardProps {
  avatarUrl: string;
  fullName: string;
  githubUsername: string;
  ticketNumber: string;
  eventDate: string;
  eventLocation: string;
}

const TicketCard: React.FC<TicketCardProps> = (props: TicketCardProps) => {
  const {
    avatarUrl,
    fullName,
    githubUsername,
    ticketNumber,
    eventDate,
    eventLocation,
  } = props;

  return (
    <div className="ticket-card">
      <div className="ticket-left">
        <div className="ticket-logo">Coding Conf</div>
        <div className="ticket-event-info">
          <span>{eventDate}</span> / <span>{eventLocation}</span>
        </div>
        <div className="ticket-user-info">
          <img src={avatarUrl} alt={`${fullName} avatar`} className="ticket-avatar" />
          <div className="ticket-user-text">
            <div className="ticket-fullname">{fullName}</div>
            <div className="ticket-github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ marginRight: '6px', verticalAlign: 'middle' }}
              >
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              @{githubUsername}
            </div>
          </div>
        </div>
      </div>
      <div className="ticket-right">
        <div className="ticket-number">#{ticketNumber}</div>
      </div>
    </div>
  );
};

export default TicketCard;
