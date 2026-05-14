# Case Study: Major Bug Fixes & Technical Improvements

This document outlines the significant technical challenges encountered during the development of the **Micrylis Biotech** platform and the solutions implemented to resolve them.

---

## 📅 February 4, 2026: Mobile Layout & Spacing Critical Fix
**Severity:** High  
**Component:** `About Us` Page / Responsive Layout

### The Issue
On mobile devices, the "About Us" section headers ("Overview", "Sustainability", "Applications", "Research and Development") were overlapping significantly with the top navigation bar. This rendered the content unreadable and the navigation unusable on smaller screens.

### Solution
- **CSS Refactoring**: Implemented a responsive spacing strategy using media queries.
- **Dynamic Padding**: Added dynamic top padding that adjusts based on the device viewport height and width.
- **Result**: Ensures clear separation between the sticky navigation header and the page content on all device sizes.

---

## 📅 February 4, 2026: Global Navigation State Fix (Scroll-to-Top)
**Severity:** Medium  
**Component:** `React Router` / Navigation

### The Issue
Users navigating between different pages (e.g., from Home to About) experienced a jarring user experience where the new page would load at the previous scroll position (bottom of the page) instead of the top.

### Solution
- **Scroll Restoration**: Implemented a `ScrollToTop` component that listens to route changes.
- **Effect Hook**: Used `useLayoutEffect` to force the window to scroll to coordinates `(0, 0)` immediately upon route transition.
- **Result**: Seamless navigation experience consistent with standard web application behavior.

---

## 📅 February 4, 2026: TypeScript Configuration Failure
**Severity:** Critical (Blocker)  
**Component:** `tsconfig.json` / Build System

### The Issue
The development environment failed to start due to misconfigured TypeScript paths and compiler options, preventing any code compilation.

### Solution
- **Configuration Audit**: Rebuilt the `tsconfig.json` to correctly align with Vite's build requirements.
- **Module Resolution**: Fixed module resolution strategies to support the latest React 19 and Vite plugins.
- **Result**: Restored the development environment and enabled strict type-checking.

---

## 📅 February 3, 2026: Production Build Failure (Vercel Deployment)
**Severity:** Critical (Blocker)  
**Component:** CI/CD Pipeline / Vercel

### The Issue
The production deployment pipeline on Vercel was failing consistently with `Exit Code 2`. The build process (`npm run build`) was crashing due to strict type errors in the production build that were suppressed in development.

### Solution
- **Strict Typing Fixes**: Audited the entire codebase to resolve implicit `any` types and interface mismatches.
- **Build Script Optimization**: Updated the build command to ensure `tsc` (TypeScript Compiler) completes successfully before Vite attempts to bundle the application.
- **Result**: Successful deployment to production environment.

---

## 📅 February 1, 2026: Data Visualization Error ("40% Carbon")
**Severity:** High  
**Component:** `App.tsx` / `Calculators.tsx`

### The Issue
Key sustainability metrics, specifically the "40% Carbon" reduction statistic, were rendering incorrectly or not appearing at all due to logical errors in the data passing between components.

### Solution
- **State Management Debugging**: traced the data flow for the statistics component.
- **Condition Fixing**: Corrected the rendering logic to ensure the statistic only displays when valid data is present.
- **Result**: Accurate display of critical environmental impact metrics.

---

## 📅 January 27, 2026: Backend Security Hardening
**Severity:** Critical  
**Component:** Authentication Infrastructure

### The Issue
Vulnerabilities were identified in the authentication system, including potential bypasses for developer accounts and insecure password storage.

### Solution
- **Bcrypt Implementation**: Migrated all password storage to use `bcrypt` for robust hashing.
- **Role-Based Access Control (RBAC)**: Enforced strict role checks for all protected routes, ensuring only authorized personnel can access sensitive dashboard features.
- **Cleanup**: Removed all developer backdoors and fallback login mechanisms.
- **Result**: A secure, production-ready authentication system.
