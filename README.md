# DevOps Kanban Workflow Visualization

## Project Title
Visualize Workflow with Kanban to Track Project Progress and Identify Bottlenecks

## Objective
This project demonstrates how a DevOps team can use a Kanban board to visualize work, control Work In Progress (WIP), track progress, and identify bottlenecks.

## Technologies
- HTML5
- CSS3
- JavaScript
- Git/GitHub
- Jenkins
- Kanban workflow

## Workflow
Backlog -> To Do -> In Progress -> Code Review -> Testing -> Done
A separate Blocked state is provided for tasks that cannot move forward.

## Features
- Kanban board with seven workflow columns
- Add new tasks
- Move tasks between stages
- WIP limits for active stages
- Automatic bottleneck detection
- Progress percentage
- Work item counts
- Blocked-task count
- Reset demo data
- Responsive design

## Run
Open `app/index.html` in a browser.

Or from the project folder run a simple local server:

```bash
cd app
python -m http.server 8000
```

Then open:
`http://localhost:8000`

## Jenkins
The included `Jenkinsfile` demonstrates a basic CI pipeline:
1. Checkout
2. Validate project files
3. Run a simple HTML/JS smoke check
4. Package the application

## Git workflow
```bash
git init
git add .
git commit -m "Initial Kanban DevOps project"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Suggested GitHub Project columns
Backlog, To Do, In Progress, Code Review, Testing, Blocked, Done.

## Bottleneck example
If Code Review contains more work than its WIP limit, the dashboard marks it as a bottleneck. The team can then reduce new development work and increase review capacity.

## Academic deliverables
See:
- `docs/PROJECT_REPORT.md`
- `docs/VIVA_QUESTIONS.md`
- `jenkins/Jenkinsfile`
