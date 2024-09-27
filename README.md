# Campers Shop

## Project Overview

Campers Shop provides a streamlined shopping experience for camping enthusiasts, offering a variety of products essential for outdoor adventures. The site is designed with a modern, user-friendly interface and includes key e-commerce features like product management, search, filtering, and cart functionality.

### Live URL

[Campers Shop Frontend Live Site](#) _(https://campers-shop-sepia.vercel.app)_
[Campers Shop Backend Live Site](#) _(https://campers-shop-backend-gules.vercel.app)_

## Features

### Core Features

- **Homepage**: Includes hero section, best-selling products, categories, and featured products.
- **Product Listings**: Display all products with filtering by categories, price range, and sorting options.
- **Product Details Page**: Show product information including name, price, stock quantity, description, and category.
- **Cart Functionality**: Add products to the cart, adjust quantities, and see dynamic pricing updates.
- **Checkout**: Collect user details, support for Cash on Delivery, and (optional) Stripe payments.
- **About Us**: Mission statement, contact information, and team details.

### Backend Features

- **Product Management**: CRUD operations for products (Create, Read, Update, Delete), along with product filtering.
- **Error Handling**: Custom middleware and utility functions for standardized error handling.
- **Zod Validation**: Zod schema validation is integrated for ensuring data integrity during product operations.

## Technologies Used

### Frontend:

- **React**: Component-based UI library for building interactive web interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Redux**: For state management and handling global application state.
- **TypeScript**: Ensures type safety and code scalability.

### Backend:

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for product and user data.
- **Mongoose**: ODM library for MongoDB and Node.js, handling schema definitions and interactions.
- **TypeScript**: Type-safe programming language used for server-side code.
- **Zod**: Library for schema validation, used for validating product data.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ShahinAlomShuvo/Campers-Shop-Backend.git
   cd Campers-Shop-Backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables. Create a .env file in the backend directory with the following variables:
   ```bash
   NODE_ENV = 'development'
   PORT=5000
   DB_URI= Your Mongo Uri
   ```
4. Start the backend server:
   ```bash
   npm run start:dev
   ```
