# DigiLearn React Native Assignment

## Description
This repository contains the code for The DigiLearn React Native Assignment. The assignment involves creating a mobile app using React Native, that allows users to log in and out, view the learning modules list, and Library that shows tabs key resources, and saved notes. 

### Installing

```bash
git clone https://github.com/Riser17/DigiLearnApp.git
cd DigiLearnApp App
npm install
```

## Step 1: Start your Application

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```
## Preview 
![Screenshot_1716373170](https://github.com/Riser17/DigiLearnApp/assets/91198103/dbdd80e3-19cf-4636-b82f-f75ffa3f8b2e)
![Screenshot_1716373146](https://github.com/Riser17/DigiLearnApp/assets/91198103/3192bdf0-cc49-4ebf-b6ac-e327bbd94576)
![Screenshot_1716373140](https://github.com/Riser17/DigiLearnApp/assets/91198103/a1b6ca5a-228c-43e1-b3e9-4217ebef4acb)
![Screenshot_1716373136](https://github.com/Riser17/DigiLearnApp/assets/91198103/eb55f141-0a0c-4504-bd42-3bc794089484)
![Screenshot_1716373129](https://github.com/Riser17/DigiLearnApp/assets/91198103/2bf2d8b4-707a-4632-aeb6-d55dfd3b1d8d)



## Screens of the App
The app consists of the following screens:

### 1. Login Screen
-  Allows users to log in with email and password using Redux as global state management.
-  Use users.json for dummy user credentials to log in
### 2. Drawer Navigation Header
-  Show drawer with hamburger menu, title, and two icons  fo notification nd user profile
-  On clicking on the menu display a slider(drawer) that shows a list of screens.
### 3. Learning Hub Screen
- Show In Progress modules in a horizontal list
- Show Recently completed and Upcoming modules in the list.
### 4. Library Screen
- Shows two tabs for key resources list and saved notes details list.
### 5. User Profile Screen
- User Profile screen to simply log out the user using redux.

