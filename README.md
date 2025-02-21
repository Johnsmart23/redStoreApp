# RedStore App

RedStore is a React-based e-commerce web application that includes a product display, cart functionality, and account management. This project uses React Router for navigation and context for managing global state.


---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Display.jsx
│   ├── Product.jsx
│   ├── AboutUs.jsx
│   ├── CheckoutPage.jsx
│   ├── Contact.jsx
│   ├── Account.jsx
│   ├── Brand.jsx
│   ├── Testimonial.jsx
│   ├── Sponsors.jsx
│   └── CartPage.jsx
├── App.jsx
├── App.css
```


---

## Usage

### Navigation
- **Home Page**: Displays the hero section, featured products, testimonials, and sponsors.
- **Products Page**: Lists all available products with an option to add items to the cart.
- **Account Page**: Placeholder for user account features.
- **Cart Page**: Shows the items added to the cart and the total count.

### Adding to Cart
- Navigate to the **Products Page**.
- Click the "Add to Cart" button on any product.
- The cart count will update in the navigation bar.

---

## Key Files

### App.jsx
- Entry point for the app.
- Manages routing and ensures the header and footer are always displayed.

### CartContext.jsx
- Manages the global cart state using React Context API.
- Provides `addToCart` and `getCartCount` functions to all components.

### Product.jsx
- Displays a list of products.
- Integrates "Add to Cart" functionality.

### CartPage.jsx
- Displays the items added to the cart.

---


## Credits
This project was developed using:

- **React**: For building the user interface.
- **React Router**: For navigation.
- **CSS**: For styling.

