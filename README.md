# Intro Component Sign Up

Small form validation component using Vitejs as a build tool.  
Goal is to add unit and e2e test into the project.

## Usage

- Install dependencies via command `npm i`.
- After running, `npm run dev`, site can be visible through `http://localhost:3000`.
- `npm test` to run unit tests.
- Before running e2e tests, local dev server should be up.

<details>

<summary>
  Things I've learned building this
</summary>

- Pseudo elements are not supported for `input` tags
- Before running commands `npx cypress open`, make sure you started your local dev server.
- See `https://typicode.github.io/husky/#/?id=create-a-hook`on how to setup pre-commit hooks.
- cypress videos and screenshot folders should be git ignored. See https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-structure
</details>
