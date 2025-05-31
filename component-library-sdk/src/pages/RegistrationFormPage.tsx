import React, { useState } from 'react';
import { Button, InputField, AvatarUpload, Typography } from '../components';
import './RegistrationFormPage.css';

interface RegistrationFormPageProps {
  onSubmit: (data: {
    fullName: string;
    email: string;
    githubUsername: string;
    avatarUrl: string;
  }) => void;
}

const RegistrationFormPage: React.FC<RegistrationFormPageProps> = ({ onSubmit }) => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [githubUsername, setGithubUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (avatar) {
      const avatarUrl = URL.createObjectURL(avatar);
      onSubmit({ fullName, email, githubUsername, avatarUrl });
    } else {
      onSubmit({ fullName, email, githubUsername, avatarUrl: '' });
    }
  };

  return (
    <div className="registration-page">
      <div className="form-container">
        <div className="logo">Coding Conf</div>
        <Typography variant="h1" className="title">
          Your Journey to Coding Conf 2025 Starts Here!
        </Typography>
        <Typography variant="body" className="subtitle">
          Secure your spot at next year’s biggest coding conference.
        </Typography>

        <form onSubmit={handleSubmit} className="registration-form">
          <label className="upload-label">Upload Avatar</label>
          <AvatarUpload onChange={setAvatar} />
          <Typography variant="caption" className="upload-instruction">
            Upload your photo (JPG or PNG, max size: 500KB).
          </Typography>

          <InputField
            label="Full Name"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <InputField
            label="Email Address"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            label="GitHub Username"
            placeholder="@yourusername"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            required
          />

          <Button type="submit" className="submit-button">
            Generate My Ticket
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormPage;
