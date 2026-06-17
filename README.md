# FL Research Lab Website

This is the official website for the Federated Learning & Intelligent Systems Research Lab at the University of Texas Rio Grande Valley (UTRGV). Built with Astro and Tailwind CSS.

## Quick Start

This is a content-driven website. All lab information (team members, projects, publications, news) is stored as Markdown files in the `src/content/` folder. No coding is required to update information—just create or edit Markdown files.

## Folder Structure

```text
.
├── public/                     # Static assets directory (copied directly to build)
│   ├── avatars/                # Profile photos for lab team members
│   └── cvs/                    # Curriculum Vitae (CV) PDF documents
│
├── src/
│   ├── content/                # All lab data (Markdown files)
│   │   ├── news/               # Lab news and announcements
│   │   ├── people/             # Team members
│   │   ├── projects/           # Current research projects
│   │   └── publications/       # Research publications
│   │
│   ├── layouts/                # Reusable page templates
│   │   └── BaseLayout.astro    # Main layout with navigation
│   │
│   ├── pages/                  # Website pages (automatically routed)
│   │   ├── index.md            # Home page
│   │   ├── news.astro          # News listing page
│   │   ├── people.astro        # Team members page
│   │   ├── projects.astro      # Projects listing page
│   │   └── publications.astro  # Publications listing page
│   │
│   └── styles/                 # CSS styling
│       └── global.css          # Tailwind CSS & custom styles
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
│
├── astro.config.mjs
├── package.json
└── README.md
```

## How to Update Lab Information

### Adding a New Team Member

1. Upload profile assets:

   * If adding a profile photo, upload the image to `public/avatars/`.
   * If adding a resume or CV, upload the PDF document to `public/cvs/`.

2. Go to `src/content/people/`.

3. Create a new Markdown file with the member's name (e.g., `dr-john-smith.md`).

4. Add the following template, filling out any fields you wish to include:

```yaml
---
name: "Dr. John Smith"
role: "Research Scientist"
bio: "Brief bio about the researcher and their focus areas."
email: "john.smith@utrgv.edu"
website: "https://example.com"
scholar: "https://scholar.google.com/citations?user=example"
linkedin: "https://www.linkedin.com/in/username"
github: "github-handle"
avatar: "/avatars/your-uploaded-image.jpg"
cv: "/cvs/your-uploaded-resume.pdf"
---
```

**Note:** All contact and profile links are optional. If a field is omitted from the frontmatter, its corresponding icon will automatically be hidden from the website interface. Ensure that image and CV paths begin with a leading slash (e.g., `/avatars/...` or `/cvs/...`).

5. Save the file. It will automatically appear on the People page.

---

### Adding a New Project

1. Go to `src/content/projects/`.

2. Create a new Markdown file (e.g., `my-project.md`).

3. Add the following template:

```yaml
---
title: "Project Title"
status: "Active" # or "Completed", "Planning"
summary: "Brief description of the project, its goals, and current status."
---
```

4. Save the file. It will automatically appear on the Projects page.

---

### Adding a New Publication

1. Go to `src/content/publications/`.

2. Create a new Markdown file (e.g., `my-paper.md`).

3. Add the following template:

```yaml
---
title: "Paper Title"
date: "2026-06-06"
summary: "Abstract or brief summary of the publication."
authors: [] # Optional: list author references if needed
link: "https://doi.org/example" # Optional: link to paper
selected: true # Optional: list this paper under Selected Research
selected_order: 1 # Optional: order of appearance in Selected Research
---
```

4. Save the file. It will automatically appear on the Publications page.

**About Selected Research & Author Mapping:**
* **Author Mapping:** Any publication where a lab member's name appears in the `authors` array will automatically be displayed on that member's personal profile page.
* **Selected Research:** To highlight specific major publications on a member's profile, you can set `selected: true` and specify a `selected_order`. If a member has at least one selected publication, their profile will display a prominent "Selected Research" section for those specific papers, with their remaining publications tucked neatly behind a "Show all publications" toggle button.
* **Fallback Logic:** If a member has publications but *none* of them are marked as `selected`, their profile will automatically adapt to show a simple, flat "Publications" list without any toggles.

---

### Adding a News Update

1. Go to `src/content/news/`.

2. Create a new Markdown file (e.g., `my-announcement.md`).

3. Add the following template:

```yaml
---
title: "News Title"
date: "2026-06-06"
summary: "Brief news announcement or milestone update."
link: "https://example.com" # Optional: link to full article
---
```

4. Save the file. It will automatically appear on the News page.

## Development

### Prerequisites

* Node.js 20+ installed
* npm or yarn package manager

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

## Deployment

This site is deployed to GitHub Pages at:

https://angelperedo97.github.io/FL-Research-Lab/

Changes are automatically deployed when pushed to the `main` branch via GitHub Actions (see `.github/workflows/deploy.yml`).

### To Deploy

Simply push your changes to GitHub:

```bash
git add .
git commit -m "Add/update content"
git push
```

The GitHub Actions workflow will automatically build and deploy your changes.

## Customization

* **Colors & Styling:** Edit `src/styles/global.css` to modify Tailwind CSS classes and custom styles.
* **Layout & Navigation:** Edit `src/layouts/BaseLayout.astro` to change the site header, footer, or navigation.
* **Page Content:** Edit Markdown files in `src/content/` to update lab information.

## Contributing

All lab members can contribute by:

1. Creating new content files (as described above)
2. Editing existing files to update information
3. Pushing changes to the repository

Before publishing changes, test locally with:

```bash
npm run dev
```

to ensure everything looks correct.

## License

This project is maintained by the FL Research Lab at UTRGV.
