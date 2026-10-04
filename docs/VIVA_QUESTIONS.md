# Viva Questions and Answers

1. What is Kanban?
Kanban is a visual workflow management method used to visualize work and control work in progress.

2. What is WIP?
WIP means Work In Progress. A WIP limit restricts how many items can be active in a workflow stage.

3. What is a bottleneck?
A bottleneck is a workflow stage where work accumulates because the stage cannot process work as quickly as work arrives.

4. Why use Kanban in DevOps?
It makes work visible, supports continuous flow, and helps teams identify process problems.

5. What is Git?
Git is a distributed version-control system.

6. What is GitHub?
GitHub is a platform for hosting Git repositories and collaborating through issues, pull requests, and project management.

7. What is Jenkins?
Jenkins is an automation server commonly used for CI/CD pipelines.

8. What is CI?
Continuous Integration is the practice of frequently integrating code and automatically validating it.

9. What is CD?
Continuous Delivery/Deployment automates the process of preparing or releasing software.

10. Why is Code Review a possible bottleneck?
If development produces changes faster than reviewers can process them, tasks accumulate in Code Review.

11. How does this project detect a bottleneck?
It compares the number of tasks in active stages with the configured WIP limit and highlights a stage when its limit is reached.

12. What happens when a WIP limit is reached?
The application prevents another task from entering that stage and displays a warning.

13. What is the purpose of the Blocked column?
It explicitly shows work that cannot currently proceed because of a dependency or problem.

14. What is the main result of the project?
A visual workflow that helps a team track progress and identify possible bottlenecks.
