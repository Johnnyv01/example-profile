# Jonathan's Portfolio

A modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **Animations**: Smooth animations powered by Framer Motion
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Sections

- **Hero**: Eye-catching introduction with gradient background
- **About**: Professional background and technical skills
- **Projects**: Showcase of featured projects with descriptions
- **Contact**: Contact form and information
- **Footer**: Social links and additional information

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portifolionextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React**: JavaScript library for building user interfaces

## Project Structure

```
portifolionextjs/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

## Customization

To customize the portfolio for your own use:

1. Update personal information in the components
2. Replace project data in `Projects.tsx`
3. Modify colors and styling in `tailwind.config.js`
4. Add your own images to the `public` folder
5. Update contact information in `Contact.tsx`

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).