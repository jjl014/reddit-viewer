# Reddit Viewer
by: Jimmy Li

## Running the App
Within the app directory, type in:

* `npm install`
* `npm start`

  or
* `npm install`
* `webpack -w`
* In a new terminal run `open index.html` or copy the full path for index.html and paste it into the browser or open index.html from the directory

## Challenge Overview
* Display posts from the selected subreddits (have news by default)
* App should update accordingly depending when adding or removing subreddits

## Functionality
* Search subreddits
* Add/remove subreddits
* Clicking on a post will link you to it

## Component Hierarchy
* Root
  * App
    * Search
    * SubredditList
      * SubredditListItem
    * PostList
      * PostListItem

## Tools
* React / ReactDOM
* Redux / React-Redux
* Redux Logger
* Redux Thunk
* Webpack / Webpack Dev Server
* JavaScript
* Babel

## Notes
### Design
For the design of the app, I used Redux to keep track of a global state. Components who are subscribed to the store will receive updates and re-render accordingly.

For the subreddits section of the app, I laid it out like tags. In my opinion it makes  adding and removing tags (i.e. subreddits) easy and intuitive.

I also restricted the input field. The input field will only allow the user to add a subreddit if it exists and will show an error if it doesn't.

For the list of posts, I tried to keep it simple and only displayed the main information. (i.e. author, title, score and subreddit)

Flexbox was also used liberally to space things out and make the UI look intuitive and pretty.

## Debugging and Testing
For debugging and testing, I made use of the React Dev Tools chrome extension that was available while using the debugger and logging to the console if needed. Redux-Logger also helped with keeping track of the current state of the store.

## Challenges
One of the main challenges was figuring out how the reddit API works. It was a bit weird since the documentation didn't really match up with what it said it does. Had to do a good amount of research and trial and error.

### Future Directions
* Add ability to display comments for each post
* Add ability to view the post within the SPA
* Implement pagination
