## On Windows 10
- Download and install https://nodejs.org/dist/v13.1.0/node-v13.1.0-x64.msi
- Open `Node.js command prompt`
- Go to project directory

## In the project directory
- `npm install`
- `npm start` starts the development server.
- `npm test` starts the test runner.
- For E2E tests (Incomplete. Skip this part)
  - Linux -> Ubuntu -> `sudo apt install xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2`
  - Open 1 terminal and run the app with `npm start`
  - Open 2 terminal and run `npm run cypress:run:all`
