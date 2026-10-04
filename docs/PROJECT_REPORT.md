# PROJECT REPORT

## Visualize Workflow with Kanban to Track Project Progress and Identify Bottlenecks

### 1. Abstract
This project presents a simple DevOps workflow visualization system based on the Kanban methodology. The system displays software-development tasks across Backlog, To Do, In Progress, Code Review, Testing, Blocked, and Done stages. Work-in-progress limits are used to prevent excessive task accumulation. The dashboard highlights stages that reach their WIP limit, helping the team identify possible bottlenecks and take corrective action.

### 2. Problem Statement
Traditional task lists do not clearly show where work is accumulating. A Kanban board makes the workflow visible and helps a team understand the current state of every task.

### 3. Objectives
- Visualize the software development workflow.
- Track project progress.
- Limit work in progress.
- Identify possible bottlenecks.
- Demonstrate a DevOps-friendly Git and Jenkins workflow.

### 4. Technologies
HTML5, CSS3, JavaScript, Git, GitHub, Jenkins.

### 5. Workflow
Backlog -> To Do -> In Progress -> Code Review -> Testing -> Done.
Blocked is used when work cannot continue.

### 6. WIP Limits
In Progress: 3
Code Review: 2
Testing: 2

A task cannot be moved into a stage when its WIP limit is already reached. This encourages the team to complete existing work before starting additional work.

### 7. Bottleneck Identification
A stage is flagged when its WIP limit is reached. For example, if Code Review contains two tasks while its limit is two, the dashboard reports a possible bottleneck. The team can respond by reviewing pending changes before starting more development work.

### 8. Implementation
The browser application is contained in `app/`. It uses JavaScript state to manage tasks, HTML for structure, and CSS for the Kanban layout.

### 9. DevOps Integration
Git is used for version control. GitHub can host the repository and manage Issues/Pull Requests. Jenkins can validate and package the application through the supplied Jenkinsfile.

### 10. Expected Result
The final board provides a visual representation of task flow, completed work, blocked work, and WIP pressure. It supports simple discussion of bottlenecks during a team stand-up.

### 11. Advantages
- Easy visual tracking.
- Simple bottleneck identification.
- WIP control.
- Useful for team discussions.
- Can be connected to GitHub and Jenkins.

### 12. Future Scope
- Database-backed task storage.
- User login and role management.
- Real GitHub Projects API integration.
- Jenkins webhook integration.
- Lead-time and cycle-time charts.
- Deployment to a cloud platform.

### 13. Conclusion
The project demonstrates how Kanban can be used in a DevOps workflow to visualize work, control WIP, monitor progress, and identify stages where work may be accumulating.
