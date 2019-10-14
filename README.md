This application is a redesign of [Hacker News Website](https://news.ycombinator.com/) using the official [Hacker News API](https://github.com/HackerNews/API).

A fresh new look is given to the website including the change of theme.
The application is built using Angular 8 and Angular Material is used for the styling.

The original website is overly crowded and not user-friendly. Links like the comments and points do not appear as links.

For the new version, I have tried to reduce the clutter and make it look minimalistic. Standard icons have been utilized to make it more appealing. The usage of icons instead of text, especially for items like comments and points, helps translate the functionality to users in an efficient manner.

### Run the app

`cd hacker-news`
To run the application in development mode:

using npm scripts run command `npm start`

or using angular-cli

run command `ng server --open`

### Improvements:
An API wrapper can be created around the Hacker News API to improve performance and reduce the N + 1 calls made to get the stories.