# **FinTrack Frontend Roadmap**

This roadmap focuses on the frontend development of **FinTrack**, a web app for tracking monthly income and expenses. The project is divided into phases, from initial setup to advanced UI features and optimization.

---

## **Phase 1: Initial Setup**

### 1.1 - **Project Setup**
- [x] Set up the frontend environment using **React.js** and **Vite**.
- [x] Integrate **Chakra UI** for the design system, including custom themes and global styles.
- [x] Set up **TypeScript** for type safety and **ESLint** for code quality.


### 1.2 - **Basic Layout & Navigation**
- [ ] Create the main layout (header, footer, and navigation).
- [ ] Implement responsive navigation using Chakra UI components (mobile menu, desktop menu).
- [ ] Set up basic pages:
  - Home (landing page)
  - Dashboard (protected route)
  - Authentication (sign-up, login, logout)

---

## **Phase 2: Authentication and User Flow**

### 2.1 - **User Authentication UI**
- [ ] Create **login** and **sign-up** forms using Chakra UI forms.
- [ ] Implement authentication flow with JWT tokens for protected routes (use Next.js API routes for handling authentication logic).
- [ ] Show success/error notifications for login and signup (use Chakra UI’s `useToast`).

### 2.2 - **Protected Routes**
- [ ] Implement route protection for authenticated users (redirect users to the login page if they try to access protected routes).
- [ ] Build a dashboard page that users are redirected to after login.

---

## **Phase 3: Income & Expense Tracking (MVP)**

### 3.1 - **Transaction Form**
- [ ] Create a form for adding **income** and **expense** transactions.
- [ ] Use Chakra UI’s `FormControl` components for input validation and feedback.
- [ ] Add fields:
  - Amount
  - Category (use a dropdown or select component)
  - Description
  - Date
- [ ] Submit form data to the backend via API (using `fetch` or Axios).

### 3.2 - **Transaction List**
- [ ] Display a list of all transactions in a **table** format on the dashboard.
- [ ] Use Chakra UI’s `Table` component for building the transaction history.
- [ ] Implement sorting by date and filtering by category.

### 3.3 - **UX/UI Enhancements**
- [ ] Add hover effects, transitions, and feedback to buttons and form inputs.
- [ ] Use icons for categories (e.g., `FiDollarSign` for income, `FiShoppingBag` for expenses).
- [ ] Provide feedback on successful form submissions (e.g., toast notifications).

---

## **Phase 4: Reporting & Visualizations**

### 4.1 - **Monthly Summary**
- [ ] Build a **summary section** on the dashboard to show:
  - Total income for the month
  - Total expenses for the month
  - Net balance
- [ ] Style this section with Chakra’s `Box`, `Flex`, and `Text` components.

### 4.2 - **Charts & Visualizations**
- [ ] Integrate a charting library like **recharts** or **Chart.js** to visualize the data.
- [ ] Create:
  - **Bar charts** or **pie charts** for income/expense breakdown by category.
  - **Line chart** for income and expense trends over time.

---

## **Phase 5: UI/UX Refinements**

### 5.1 - **Responsive Design**
- [ ] Ensure the UI is fully responsive for **mobile**, **tablet**, and **desktop**.
- [ ] Adjust the layout using Chakra’s `useMediaQuery` and responsive utilities (e.g., `Stack`, `Grid`).

### 5.2 - **Dark Mode Support**
- [ ] Implement **dark mode** support using Chakra UI’s built-in color mode features.
- [ ] Ensure that colors and component styles adjust properly between light and dark modes.

### 5.3 - **Accessibility Improvements**
- [ ] Follow accessibility best practices by ensuring all components are keyboard-accessible.
- [ ] Add ARIA attributes where necessary (Chakra UI has good default support for accessibility).

---

## **Phase 6: Advanced Features**

### 6.1 - **Filtering and Categorization**
- [ ] Add functionality for users to **filter** transactions by category, date, or type (income vs. expense).
- [ ] Allow users to create and manage custom categories (optional feature).

### 6.2 - **Recurring Transactions**
- [ ] Build UI for adding **recurring transactions** (e.g., monthly salary, rent).
- [ ] Use Chakra UI’s form components to capture recurring transaction details (e.g., frequency, start/end dates).

### 6.3 - **Budget Tracking**
- [ ] Implement a budgeting feature where users can set spending limits for different categories.
- [ ] Show visual indicators (e.g., progress bars) when users approach or exceed their budget limits.

---

## **Phase 7: Performance and Optimization**

### 7.1 - **Code Splitting and Lazy Loading**
- [ ] Implement code-splitting and lazy loading using **Next.js dynamic imports** to optimize page load performance.

### 7.2 - **API Caching and Optimizations**
- [ ] Use SWR (stale-while-revalidate) or React Query to fetch and cache transaction data efficiently on the client side.

### 7.3 - **Final Performance Audits**
- [ ] Run performance audits using tools like **Lighthouse** or **Web Vitals**.
- [ ] Optimize image loading and font performance (using Next.js’s built-in optimizations).

---

## **Phase 8: Deployment**

### 8.1 - **Frontend Deployment**
- [ ] Deploy the frontend to **Vercel** or **Netlify**.
- [ ] Set up environment variables for API URLs and other sensitive data.

### 8.2 - **Continuous Integration/Deployment (CI/CD)**
- [ ] Integrate automated tests and linting with the CI/CD pipeline.
- [ ] Ensure the app is automatically deployed after successful tests.

---

This roadmap focuses on the frontend development of **FinTrack**, helping to deliver a polished, user-friendly interface for managing personal finances.
