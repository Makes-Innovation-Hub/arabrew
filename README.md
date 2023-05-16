# arabrew

# harmony

## dev checklist:

### before development:

- [ ] open a new branch for each feature.
- [ ] name the branch with a similar name to the issue/task you are working on.
      for example - issue “15 add new header to login page”, branch: “15-new-header-login”

### during development

- [ ] measure your work time per task.
- [ ] files should not be longer than ~80 lines.
- [ ] use good naming for files, functions and variables
- [ ] make sure that everything is positioned logically - you expect to find fileX inside folder Y, or function A definition inside file B.
      commit and push often.
- [ ] make sure you can always answer the question: how much of your task is done (40%, 80% etc)
- [ ] frontend: check on different screen sizes that your design in not breaking

### before PR:

- [ ] make sure to remove any commented out code and unneeded comments.
- [ ] remove all console.log
- [ ] change screen size to make sure that frontend design is not breaking
- [ ] go over the task definition again and make sure you did everything.
- [ ] pull from main/dev and resolve merge conflicts
- [ ] before sending the PR in github, go over the code in the PR and make sure there are no weird stuff that don’t belong there.

.env file should be created with this environment variables:

```
MONGO_URI=<YOUR_MONGO_DB_CONNECTION_STRING>
OPEN_AI_API_KEY=<YOUR_OPEN_AI_API_KEY>
```
