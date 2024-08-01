# Property Rental App

## Overview

The Property Rental App is a modern React-based application designed for managing property rentals. It allows users to browse property listings, manage bookings, and interact with a user-friendly interface. The application is built using React and Vite, and it's styled with CSS to ensure a responsive and visually appealing experience across various devices.

You can view the live application here: [Property Rental App](https://reantalease.netlify.app/)

## Approach

### Project Structure

The project follows a component-based architecture, which is common in React applications. The key directories and files include:

- **`/src/components`**: Contains reusable components such as Navbar, Footer, and any specific UI components.
- **`/src/pages`**: Houses the main pages of the application like Home, Properties, Cart, and Login.
- **`/src/context`**: Contains context files for managing global states like authentication.
- **`/public`**: Static assets like images and the `index.html` file are located here.

### Routing

React Router is used for managing navigation within the app. The routing setup is designed to handle various user interactions such as viewing property listings, managing the cart, and logging in.

### Styling

The application uses plain CSS for styling. The CSS is structured to provide a clean and consistent look and feel. Media queries ensure responsiveness across different screen sizes.

### Build and Deployment

The project is built using Vite, a fast build tool that optimizes the development and production builds. The final build output is placed in the `dist` folder, which includes a `_redirects` file for proper client-side routing handling on Netlify.

## Tech Stack

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Vite**: A fast build tool and development server for modern web applications.
  - **CSS**: Used for styling the application.

- **Deployment**:
  - **Netlify**: A platform for deploying and hosting static sites. It handles the deployment of the `dist` folder and provides features like continuous deployment, custom domains, and SSL.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/property-rental-app.git
   cd property-rental-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Build and Deploy

To prepare the project for production:

1. **Build the Project**

   ```bash
   npm run build
   ```

   This command generates the production-ready files in the `dist` folder.

2. **Deploy to Netlify**

   - Log in to Netlify and go to your dashboard.
   - Drag and drop the `dist` folder into the Netlify deployment area.
   - Set up your domain and DNS settings if you have a custom domain.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request to merge your changes.

## Contact

For any inquiries or feedback, you can reach me at [atulkumar030303@gmail.com](mailto:atulkumar030303@gmail.com).

## Acknowledgements

- **React Documentation**: For the comprehensive guide on React.
- **Vite Documentation**: For build optimization and configuration tips.
- **Netlify Documentation**: For deployment and hosting instructions.
