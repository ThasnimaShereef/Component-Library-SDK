import React, { useRef, useState } from 'react';
import './AvatarUpload.css';

interface AvatarUploadProps {
  onChange: (file: File | null) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      onChange(file);
    } else {
      setFileName(null);
      onChange(null);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChangeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileName(null);
    onChange(null);
  };

  return (
    <div className="avatar-upload" onClick={handleClick}>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div>{fileName ? fileName : 'Drag and drop or click to upload'}</div>
      {fileName && (
        <div className="avatar-upload-buttons">
          <button type="button" onClick={handleChangeClick} className="change-button">
            Change
          </button>
          <button type="button" onClick={handleRemoveClick} className="remove-button">
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarUpload;
