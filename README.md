# Relak

A mental wellness and mood journal app for Singaporeans, by Singaporeans.

![App Screenshot](/readme_images/app.png)

# Why the name "Relak"?

Relak is often used in Singlish context, as a bastardisation of the English word "Relax". We thought it fitting and unique to use the word "Relak" to name our app, due to it being tailored specifically to Singaporeans.

# Technologies

## Front-end

* React
* ant.design CSS
* React Router
* Recharts
    * for graphing
* Styled components
* react-responsive-carousel
    * for the front page
* react-awesome-button
    * animated buttons on the site
* moment.js
    * date/time conversion for journals
* react-media-hook
* react-router-transition
* react-howler
    * sound component for the 'listen' page
* framer-motion
    * animated logo
* react-query
* react-markdown
* react-parallax-tilt
* react-dom
* react-router-transition
* jwt-decode

## Back-end

* Django

## Deployment

* Vercel - front-end
* Heroku - back-end

# General Approach

We began by deciding on the direction we should take our app. We eventually settled on something for mental wellness, and quickly wireframed on Figma. 

We then decided on the languages and frameworks we were supposed to use. We wanted to test our skills and hence settled on Python with Django as our backend.

We then set up two GitHub repositories, one for the front-end, and one for the back-end - and began coding based on the wireframes and technologies we set out to do. Over time, we noticed that certain features required better technologies, and added them in after some discussion.

# Installation

1. Clone this repository with `git clone`.
2. `cd` into the repo folder
3. In terminal, run `npm i` to install all dependencies. This may take awhile.
4. Run app with `npm run start`.
5. Head over to [Lepak](https://github.com/chocomeowy/lepak), our backend repository, and follow the instructions in the `readme.md` there to set up the backend. If our backend on Heroku is down, most features of this app will not work properly.

# User Stories

1. The user should be greeted with a home page with calming images, along with immediate links to the Breathe and Listen pages, even without logging in.
2. Once logging in, the user should be presented with the options to view their profile, as well as the option to add a new journal entry.
3. The user should be able to find emergency hotlines and be directed to professional help by pressing/clicking on the option in the navigation bar.
4. In the Breathe page, the user should be given the option to switch between different breathing patterns, including finding out more information about Mindfulness, Proper Sleep, and the rationale of breathing. The user should also be able to gain access to a guided YouTube video on breathing, via a modal dialog.
5. In the Listen page, the user should be able to simultaneously trigger sounds by pressing on the different Play buttons, and the sounds should start almost immediately, with the only delay lying with the latency of the database.
6. In the Journal page, the user should be able to create a journal entry, with name, title, and mood ranking.
7. In the Profile page, the user should be able to view their existing journal entries, as well as their moods visualised in a graph. The user should also be able to edit and delete their journal entries.
8. Lastly, in the About page, the user should be able to see a description of the app.

# Wireframes

Please see full wireframes on our [Figma](https://www.figma.com/file/L4M9PyAf2GHkNlX4AFFa8t/relak?node-id=0%3A1) page.

![Page Flow](/readme_images/wireframe1.png)
![Page Overview](/readme_images/wireframe2.png)
![Data Structure](/readme_images/wireframe3.png)

# Unsolved problems / challenges

* JWT Refresh Token
* React Redux