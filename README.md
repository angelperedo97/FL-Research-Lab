# FL Research Lab Website

This is the official website for the Federated Learning & Intelligent Systems Research Lab at the University of Texas Rio Grande Valley (UTRGV). Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Quick Start

This is a content-driven website. All lab information (team members, projects, publications, news) is stored as Markdown files in the `src/content/` folder. **No coding required** to update information—just create or edit Markdown files.

## 📁 Folder Structure

```
src/
├── content/              # All lab data (Markdown files)
│   ├── news/            # Lab news and announcements
│   ├── people/          # Team members
│   ├── projects/        # Current research projects
│   └── publications/    # Research publications
│
├── layouts/             # Reusable page templates
│   └── BaseLayout.astro # Main layout with navigation
│
├── pages/               # Website pages (automatically routed)
│   ├── index.md         # Home page
│   ├── news.astro       # News listing page
│   ├── people.astro     # Team members page
│   ├── projects.astro   # Projects listing page
│   └── publications.astro # Publications listing page
│
└── styles/              # CSS styling
    └── global.css       # Tailwind CSS & custom styles
```

## 📝 How to Update Lab Information

### Adding a New Team Member

1. Go to `src/content/people/`
2. Create a new Markdown file with the member's name (e.g., `dr-john-smith.md`)
3. Add the following template:

```markdown
---
name: "Dr. John Smith"
role: "Research Scientist"
bio: "Brief bio about the researcher and their focus areas."
website: "https://example.com" # Optional
---
```

4. Save the file. It will automatically appear on the **People** page.

### Adding a New Project

1. Go to `src/content/projects/`
2. Create a new Markdown file (e.g., `my-project.md`)
3. Add the following template:

```markdown
---
title: "Project Title"
status: "Active" # or "Completed", "Planning"
summary: "Brief description of the project, its goals, and current status."
---
```

4. Save the file. It will automatically appear on the **Projects** page.

### Adding a New Publication

1. Go to `src/content/publications/`
2. Create a new Markdown file (e.g., `my-paper.md`)
3. Add the following template:

```markdown
---
title: "Paper Title"
date: "2026-06-06" # Publication date
summary: "Abstract or brief summary of the publication."
authors: [] # Optional: list author references if needed
link: "https://doi.org/example" # Optional: link to paper
---
```

4. Save the file. It will automatically appear on the **Publications** page.

### Adding a News Update

1. Go to `src/content/news/`
2. Create a new Markdown file (e.g., `my-announcement.md`)
3. Add the following template:

```markdown
---
title: "News Title"
date: "2026-06-06"
summary: "Brief news announcement or milestone update."
link: "https://example.com" # Optional: link to full article
---
```

4. Save the file. It will automatically appear on the **News** page.

## 🔧 Development

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This site is deployed to GitHub Pages at `https://angelperedo97.github.io/FL-Research-Lab/`. 

Changes are automatically deployed when pushed to the `main` branch via GitHub Actions (see `.github/workflows/deploy.yml`).

### To Deploy
Simply push your changes to GitHub:

```bash
git add .
git commit -m "Add/update content"
git push
```

The GitHub Actions workflow will automatically build and deploy your changes.

## 🎨 Customization

- **Colors & Styling**: Edit `src/styles/global.css` to modify Tailwind CSS classes
- **Layout & Navigation**: Edit `src/layouts/BaseLayout.astro` to change the site header/footer
- **Page Content**: Edit Markdown files in `src/content/` to update text

## 👥 Contributing

All lab members can contribute by:
1. Creating new content files (as described above)
2. Editing existing files to update information
3. Pushing changes to the repository

**Before publishing changes**, test locally with `npm run dev` to ensure everything looks correct.

## 📄 License

This project is maintained by the FL Research Lab at UTRGV.

