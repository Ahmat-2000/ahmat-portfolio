# Portfolio Project

This repository provides a customizable portfolio template for showcasing your skills, experiences, and projects. Built with **Next.js** and styled with **Tailwind CSS**, it includes sections for your resume, skills, and projects, with integrated Google reCAPTCHA for secure form submissions.

## Table of Contents

- [Project Setup](#project-setup)
- [Configuration](#configuration)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Customizing the Portfolio](#customizing-the-portfolio)
- [Google reCAPTCHA Setup](#google-recaptcha-setup)
- [Google App Password Setup](#google-app-password-setup)
- [Deploying on Vercel](#deploying-on-vercel)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio-project.git
   cd portfolio-project
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## Configuration

To set up the portfolio with your own data, make the following adjustments:

1. **Environment Variables**:
   - Create a `.env.local` file at the root of your project.
   - Add necessary environment variables as shown below:

   ```env
   # Google reCAPTCHA Keys
   RECAPTCHA_SECRET_KEY=###########
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=############

   # Email Credentials for NodeMailer
   MY_PASSWORD=##########
   MY_EMAIL=############
   ```

   > **Note:** For instructions on setting up Google reCAPTCHA, see [Google reCAPTCHA Setup](#google-recaptcha-setup). For using Gmail with NodeMailer, see [Google App Password Setup](#google-app-password-setup).

2. **Update Content in `/lib`**:
   - The primary data files for configuring portfolio content are located in the `/src/lib` directory:
     - **`resumeData.js`**: Contains details of your resume and experience.
     - **`featuresData.js`**: Lists features or key highlights for the portfolio.
     - **`servicesData.js`**: Specifies services or capabilities.
     - **`skillsImage.js`**: Manages skill icons shown in the skills section.
   - Edit these files to reflect your own experience, skills, and projects.

3. **Resume PDF**:
   - Add your resume in the `public` directory with the filename `resume.pdf`. This file will be accessible for download via the Resume section.

## File Structure

The main project files and directories are structured as follows:

```
.
├── public
│   ├── resume.pdf          # Place your CV here for easy access
│   └── svg/skills          # Icons for skills used in the portfolio
├── src
│   ├── app                 # Main Next.js pages and layout configuration
│   ├── components          # Reusable React components for portfolio sections
│   ├── images              # Project images and profile picture assets
│   └── lib                 # Configuration files for portfolio data and settings
└── .env.local               # Add environment variables for configuration
```

## Usage

### Running the Project

After configuring the necessary files, run the development server:
```bash
npm run dev
```
For production, build and start the project with:
```bash
npm run build
npm start
```

### Customizing the Portfolio

- **Update the content**: Edit the files under `/lib` to modify experience, projects, skills, and contact information.
- **Images**: Replace images in `/public/images` and SVGs in `/public/svg/skills` for custom icons or visuals.
- **Styling**: Adjust the styles in `globals.css` and `tailwind.config.js` if you need custom colors, fonts, or other styles.

## Google reCAPTCHA Setup

To secure your contact form, this project uses Google reCAPTCHA. Follow these steps to configure it:

1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create) and sign in with your Google account.
2. Register a new site by filling in the details:
   - **Label**: A name to identify your reCAPTCHA project.
   - **reCAPTCHA Type**: Choose "reCAPTCHA v2" (recommended) or "reCAPTCHA v3".
   - **Domains**: Add the domain where your site will be hosted, or `localhost` for local testing.
3. Once registered, you’ll receive two keys:
   - **Site Key** (public) and **Secret Key** (server-side).
4. Add these keys to your `.env.local` file:

   ```env
   RECAPTCHA_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   ```

   These variables are referenced in your contact form and API routes for verification.

## Google App Password Setup

To use Google as an email provider with NodeMailer securely, you’ll need to generate an **App Password** if you have **2-Step Verification** enabled on your Google account.

1. Go to your **Google Account** [Security Page](https://myaccount.google.com/security).
2. Under **"Signing in to Google,"** ensure **2-Step Verification** is turned on.
3. Once 2-Step Verification is enabled, go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Choose **Mail** as the app and **Other** (or **Custom**) for the device name, and name it accordingly.
5. Google will generate a 16-character App Password. Copy this password.

Add the App Password to your `.env.local` file as follows:

   ```env
   MY_PASSWORD=your_app_password_here
   MY_EMAIL=your_email@gmail.com
   ```

> **Note**: Never commit your `.env.local` file to version control to keep your credentials secure.

## Deploying on Vercel

This portfolio project is optimized for deployment on **Vercel**, which provides seamless integration with Next.js.

1. **Sign Up or Log In to Vercel**:
   - Go to [Vercel](https://vercel.com/) and create an account or log in if you already have one.

2. **Import Your Repository**:
   - From your Vercel dashboard, click **New Project** and select **Import Git Repository**.
   - Choose your portfolio project repository from GitHub, GitLab, or Bitbucket.

3. **Configure Environment Variables**:
   - Once the repository is connected, Vercel will prompt you to set up environment variables.
   - Add the same environment variables as in your `.env.local` file, including `RECAPTCHA_SECRET_KEY`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `MY_PASSWORD`, and `MY_EMAIL`.

4. **Deploy**:
   - Click **Deploy** to build and deploy your portfolio. Vercel will automatically handle updates each time you push changes to your Git repository.

5. **Custom Domain (Optional)**:
   - To use a custom domain, go to your project’s settings on Vercel and add a custom domain under the **Domains** section.

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **NodeMailer**: For managing contact form submissions.
- **Google reCAPTCHA**: Protects forms from spam and abuse.
- **Vercel**: Deployment platform optimized for Next.js applications.

## License

This project is open-source and available under the MIT License. Feel free to use and modify this project for personal or commercial use.
