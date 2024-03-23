# Overview: 
#### This application intends to gather and unify the NYC community through the work of the newly arrived by consolidating artisan's location by borough, their personal story, contact info, and artisanship all at a user's easy access by web. 

[See Live Demo of this Template](https://frontend-lapiscapstone.netlify.app/)

# User Descripton
- [A user of this app is someone who works with NYC expos, pop-ups, wholesale and retail and looking for an easier way to seek artisans at hand instead of actively seeking and contacting them one by one in different ways without any outside reviews.]
- [Anyone with a business]
- [Anyone who is welcoming to newcomers trying to accustome to a place they now call home ]
- [Anyone who is looking to sponsor an organization or humanitarian cause ]

## Features
- [Authenticaton sign-in]
- [All Artisans Page]
- [Artisan Create/Edit/Del]
- [Artisan Review Create/Edit/Del]
- [Wishlist]

# React/Next.js Template
## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Deploying on Netlify](#deploying-on-netlify)
___
## Getting Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="915" alt="Screen Shot 2022-07-06 at 12 54 01 PM" src="https://user-images.githubusercontent.com/29741570/177612998-4aac9237-5a1e-4f13-8ae0-468587521564.png">

#### 2. Make sure YOUR github account is selected in the dropdown and name your project
<img width="763" alt="Screen Shot 2022-07-06 at 12 54 48 PM" src="https://user-images.githubusercontent.com/29741570/177613126-dd38f678-7553-4f27-8a4a-75680f14d71e.png">

#### 3. Clone your new repo to your local machine
#### 4. Go to the **NEXT** section

## Starting the Project
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

### If you see this, you are set to go!
<img width="450" alt="Screen Shot 2022-07-06 at 1 07 27 PM" src="https://user-images.githubusercontent.com/29741570/177615077-9b6a75bc-0260-4d29-bb88-bd95a3140687.png">


You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTES:** 
- If you see the following error, you did not follow all the setup steps correctly and failed to add your Firebase creds. Go back and do that NOW.

<img width="1043" alt="Screen Shot 2022-07-06 at 11 18 45 AM" src="https://user-images.githubusercontent.com/29741570/177612501-c2628f18-4bbd-4de9-aae6-27ffba1172d6.png">

### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Make sure there are no blank or empty files. Netlify will NOT build it! ]

## dBdiagram 
- [Link to my diagram](https://dbdiagram.io/d/capstone-65d5607dac844320aea02f05)

## Figma Wireframe
- [Link to my diagram](https://www.figma.com/file/V6ZWNoJlUrnaPktieJk1wr/LAPIS-CAPSTONE?type=whiteboard&node-id=0-1&t=d4q7udHotT5KT1cG-0) 

## Canva Presentation
- [Link to view my slides](https://www.canva.com/design/DAGAQVN3QVs/SMp2MqrMfc3kAD6Nj5UCKA/edit?utm_content=DAGAQVN3QVs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
