# Component Library SDK

## Overview
This project contains a simple React component library/SDK built with TypeScript and CSS classes for styling. It includes reusable components and two demo pages showcasing their usage.

## Components
- Button
- InputField
- AvatarUpload
- TicketCard
- Typography

## Folder Structure
- `/src/components` - Component library source code
- `/src/pages` - Demo pages using the component library

## How to Use the Components
Import components from the `/src/components` folder and use them in your React application.

Example:
```tsx
import { Button, InputField } from './components';

function App() {
  return (
    <div>
      <InputField label="Full Name" />
      <Button>Submit</Button>
    </div>
  );
}
```

## How to Run the Demo
1. Install dependencies:
```bash
npm install
```
2. Start the development server:
```bash
npm run dev
```
3. Open your browser at `http://localhost:3000` to view the demo pages.


## Scripts
- `npm run dev` - Starts the development server.
- `npm run build` - Builds the production bundle.
- `npm run preview` - Previews the production build.
