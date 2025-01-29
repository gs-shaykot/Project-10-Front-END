# [🌍 Crowdcube: A Crowdfunding Application](https://assignment-10-ed8bf.web.app)

## 🗞️ Description
**Crowdcube** is a crowdfunding platform designed to empower users to raise funds for diverse projects, ideas, or causes by inviting others to contribute financially. From personal needs to startups and creative ideas, **Crowdcube** connects contributors with campaigners in a user-friendly and secure environment.

The platform allows users to:
- Browse all ongoing and user-specific campaigns.
- Create, update, and delete campaigns through an intuitive interface.
- Donate to active campaigns and track contributions.

Key features include:
- **Campaign Management**: Add new campaigns with details like type, description, and deadlines.
- **Real-time Feedback**: Toast messages for confirmations and error handling.
- **Authentication**: Secure login/registration system, with Google social login.
- **Personalized Dashboards**: Users can view and manage their campaigns and donations.
- **Unique Design**: An eye-catching, responsive design adaptable to any device.

## ⚙️ Technologies Used
- **React.js** for building the user interface.
- **Firebase Authentication** for managing user login and registration.
- **Firebase Hosting** and **Vercel** for deployment.
- **MongoDB** for database management.
- **Node.js** and **Express.js** for API creation and backend logic.
- **React Hooks** (`useState`, `useEffect`, `useContext`, `useNavigate`, `useLocation`) for managing state and side effects.
- **React-Router** for routing.
- **React-Toastify** for toast notifications.
- **DaisyUI** and **Tailwind CSS** for styling.
- **Swiper** for implementing dynamic sliders.
- Additional libraries for animations: **Lottie React**, **React Awesome Reveal**.

## ⭐ Key Features

1. **Home Page**:
   - A dynamic banner with a minimum of three meaningful slides.
   - Running Campaigns Section: Displays at least six active campaigns fetched from the database. Each campaign card includes a "See More" button leading to the campaign details page.
   - Two extra sections with relevant content about the platform’s mission and user testimonials.

2. **Campaign Management**:
   - Add new campaigns via a secure form, including fields for title, type, description, and deadline.
   - Update campaigns with a dedicated form or modal.
   - Delete campaigns with confirmation prompts.
   - View all campaigns in a tabular format with sorting options for "Minimum Donation Amount".

3. **Donation System**:
   - Users can donate to active campaigns from the campaign details page.
   - Donations are stored in the database with user-specific details.
   - Prevent donations to expired campaigns with meaningful feedback messages.

4. **Authentication & User Dashboard**:
   - Register and login with email, password, and Google authentication.
   - Secure private routes for managing personal campaigns and donations.
   - Display user profile photo and name in the navbar.

5. **Responsive Design**:
   - Fully responsive across mobile, tablet, and desktop devices.
   - A light/dark theme toggle on the homepage.

6. **Additional Features**:
   - 404 Not Found Page: A custom-designed page to guide users back to the homepage.
   - Loading Spinner: Displays during data fetch or form submission.
   - Integrations with **React Simple Typewriter** and **React Tooltip** for enhanced UI.

## 🚀 Live Link
- [Crowdcube: A Crowdfunding Application](https://assignment-10-ed8bf.web.app)

## 🔧 Development Practices
- **GitHub Commits**: Maintained a structured commit history with 15+ commits on the client side and 8+ on the server side.
- **Environment Variables**: Secured sensitive keys (Firebase config, MongoDB credentials) using `.env` files.
- **Error Handling**: Used toast notifications and modals for user feedback instead of default alerts.
- **Hosting**: Deployed the client side on Firebase Hosting and the server side on Vercel, ensuring smooth route handling on reload.
- **Database Management**: Implemented MongoDB query filters to limit and sort data efficiently.
