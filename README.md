# Marco Dalañon Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, experience, and accomplishments.

## 🚀 Features

- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Multiple Sections**: 
  - Hero section with introduction
  - About me
  - Education history
  - Technical skills
  - Projects showcase
  - Design work
  - Work experience
  - Leadership roles
  - Events and speaking engagements
  - Achievements
  - Contact section
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Smooth Animations**: Reveal animations for engaging user experience

## 📋 Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Styling**: CSS
- **JavaScript**: ES6+ modules

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/mdalanon/Portfolio.git
cd marco-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. After making changes, commit and push to the repository:
```bash
git add .
git commit -m "Update portfolio event and achievement entries"
git push origin main
```

The site will be available at `http://localhost:5173`

## 📦 Build

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── AchievementsContact.jsx
│   ├── ContactSection.jsx
│   ├── DesignSection.jsx
│   ├── Education.jsx
│   ├── Events.jsx
│   ├── ExperienceLeadership.jsx
│   ├── Hero.jsx
│   ├── Nav.jsx
│   ├── Reveal.jsx
│   └── SkillsProjects.jsx
├── data/
│   └── portfolio.js
├── styles/
│   └── global.css
├── App.jsx
└── index.jsx
```

## 🎨 Customization

### Edit Portfolio Data
Update your portfolio information in `src/data/portfolio.js`

### Modify Styles
Global styles are in `src/styles/global.css`

### Update Components
Each component in `src/components/` can be customized to match your content and style preferences

## 🚀 Deployment

This portfolio can be easily deployed to:
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop or connect your Git repository
- **GitHub Pages**: Use GitHub Actions or manual builds

## 📝 License

This project is private and personal.

## 📧 Contact

For inquiries, please use the contact section on the portfolio website.
