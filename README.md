# arabrew

Arabrew is a chat website mobile firstf approach that should connect different cultures and should translate into the language of each user, with the help of open ai api

link to the figma design: https://www.figma.com/file/LG30Hg5hTIO1spIHvzjYir/Arabrew?type=design&node-id=126-1592&mode=design&t=cFAwCtUZKqxUmXBY-0

link to website: https://replace.with.our.aws.deploy.com

```
git clone https://github.com/Makes-Innovation-Hub/arabrew.git
```

.env setup:
```
cd arabrew
npm run generate-env
```

follow this steps:
PORT: 5050
NODE_ENVIRONMENT: development
MONGO_URI_DEVELOPMENT:
* sign in to mongodb website: https://www.mongodb.com/
* press "+ New Project" button
* give project name
* press "Create Project" button
* press "Add Current IP Address" button
* press green "+ Create" button
* check M0 free option
* check aws
* pick closest region
* give cluster development name
* press green "Create" button
* check "Username and Password"
* give Username and Password
* press green "Create User" button
* check "Cloud Environment"
* IP Address: 0.0.0.0/0
* Description: open for all
* press "Add Entry" button
* press "Finish and Close" button

MONGO_URI_PRODUCTION:
* sign in to mongodb website: https://www.mongodb.com/
* press "+ New Project" button
* give project name
* press "Create Project" button
* press "Add Current IP Address" button
* press green "+ Create" button
* check M0 free option
* check aws
* pick closest region
* give cluster production name
* press green "Create" button
* check "Username and Password"
* give Username and Password
* press green "Create User" button
* check "Cloud Environment"
* IP Address: 0.0.0.0/0
* Description: open for all
* press "Add Entry" button
* press "Finish and Close" button

OPEN_AI_API_KEY:
* open ai website: https://openai.com/
* goto menu > signin
* press API box
* upper menu right side, press "Personal"
* press "View API keys"
* press "+ Create new secret key" button

make .env file:
```
cd arabrew/client
touch .env
```
VITE_SERVER_BASE_URL=http://localhost
VITE_SERVER_PORT=5050
VITE_AUTH0_DOMAIN=
* goto https://auth0.com/
* press login
* press "Create Application"
* give name
* choose "Single Page Web Applications"
* press "Create"
* press react logo
* press "Settings" tab

VITE_AUTH0_CLIENT_ID=
* goto https://auth0.com/
* press login
* press "Create Application"
* give name
* choose "Single Page Web Applications"
* press "Create"
* press react logo
* press "Settings" tab

install dependencies:
```
cd arabrew
npm run install-all
npm run build-client
```
run server:
```
cd arabrew
npm run dev
```
run client:
```
cd arabrew/client
npm run dev
```
