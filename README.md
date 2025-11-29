# Ashish Kumar Panda - Developer Portfolio

This is the source code for my personal developer portfolio, showcasing my skills, projects, and professional experience. The portfolio is built with modern web technologies and is designed to be clean, responsive, and performant.

## ✨ Features

- **Responsive Design:** Fully functional and visually appealing on all devices, from mobile phones to desktops.
- **Interactive UI:** Smooth animations and transitions to enhance user experience.
- **Dynamic Content:** Sections for showcasing projects, skills, experience, and contact information.
- **Contact Form:** Integrated with EmailJS to send messages directly to my inbox.

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/) via [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Email Service:** [EmailJS](https://www.emailjs.com/)
- **Deployment:** (You can add your hosting provider here, e.g., Vercel, Netlify)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Development Server

To view the project in your browser, run the following command:

```sh
npm run dev
```

This will start the development server, and you can view the portfolio at `http://localhost:5173` (or another port if 5173 is in use).

## ⚙️ Configuration

The contact form uses **EmailJS** to handle email sending. To make it work, you need to add your own EmailJS credentials.

1.  Sign up for a free account at [EmailJS.com](https://www.emailjs.com/).
2.  Get your **Service ID**, **Template ID**, and **Public Key**.
3.  Open `src/components/Contact.tsx` and replace the placeholder values with your credentials.

```typescript
// src/components/Contact.tsx

emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
)
```

## 🤝 Contributing

This is a personal project, but I'm open to suggestions and feedback! If you have any ideas for improvement, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

_This README was generated with assistance from an AI tool._
