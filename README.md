# Dr. Khalid Khan Zadran — Portfolio Website

A responsive React + Vite portfolio concept for a Consultant Neurosurgeon and Brain & Spine Specialist at Rifah Medical Complex, Kabul, Afghanistan.

## Features
- Responsive navigation and mobile menu
- Hero, About, Services, and Contact sections
- Supplied operating-room image used in the About section
- Service cards with Lucide React icons
- Appointment request form with controlled React state, basic browser validation, and demo-only success feedback
- Light/dark theme toggle
- Responsive Tailwind CSS styling and reduced-motion support

## Important notes
- The appointment form is a frontend demonstration only. It does not send, store, or transmit patient information. Contact the clinic directly to request a real appointment.
- The phone number and clinic location follow the supplied assignment PDF.
- The PDF did not provide qualifications, memberships, social media URLs, or clinic hours, so these are not invented in this version.
- The supplied operating-room image is displayed in the About section as requested. Confirm that the client has permission to publish it.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
npm run preview
```

Deploy the project with Vercel or Netlify. Do not upload `node_modules`; the deployment platform installs dependencies from `package.json`.
