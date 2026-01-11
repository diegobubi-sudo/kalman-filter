# BioSignal Labs Website

## Overview

BioSignal Labs is a MedTech marketing website for an early-stage software platform focused on clinical-grade biosignal processing. The platform emphasizes advanced signal processing (Kalman filtering), AI-assisted analysis, and medical data processing. The website serves as a lead generation tool targeting clinicians, researchers, MedTech partners, and investors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing with 5 main pages (Home, Solution, Product, About, Contact)
- **Styling**: Tailwind CSS with custom design tokens, dark mode default theme using HSL color variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll-triggered animations
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints defined in shared/routes.ts with Zod schemas for type-safe validation
- **Development**: Vite dev server with HMR proxied through Express

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: shared/schema.ts with drizzle-zod for automatic schema-to-validation generation
- **Migrations**: Drizzle Kit with migrations output to ./migrations directory
- **Current Schema**: Single `contact_requests` table for lead capture

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API endpoint handlers
  storage.ts      # Database access layer
  db.ts           # Drizzle database connection
shared/           # Shared types and schemas
  schema.ts       # Drizzle table definitions
  routes.ts       # API contract definitions
```

### Build System
- **Development**: `tsx` for running TypeScript directly
- **Production Build**: esbuild for server bundling, Vite for client bundling
- **Output**: Server bundle to dist/index.cjs, client assets to dist/public

## External Dependencies

### Database
- PostgreSQL database (connection via DATABASE_URL environment variable)
- connect-pg-simple for session storage capability

### UI/Component Libraries
- Radix UI primitives (full component set)
- Embla Carousel for carousel functionality
- cmdk for command palette components
- vaul for drawer components
- react-day-picker for calendar
- recharts for charting
- input-otp for OTP input
- react-resizable-panels for resizable layouts

### Fonts
- Inter (body text)
- Space Grotesk (display/headings)
- Google Fonts CDN delivery

### Development Tools
- @replit/vite-plugin-runtime-error-modal for error display
- @replit/vite-plugin-cartographer for development tooling
- @replit/vite-plugin-dev-banner for development banner