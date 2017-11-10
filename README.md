# KANYE KARAOKE READ ME
Live site: http://kanyekaraoke.surge.sh/

## Objective:

Our project this week was to build a simple web app (ideally just a single page). We had to query at least two APIs and use the results to update our DOM.

- [x] Your app queries at least two APIs using the XMLHttpRequest method
- [x] Your app features some dynamic content
- [x] A clearly defined user journey, documented in your readme.
- [ ] A well-considered architecture for your app - think back to the workshops from the beginning of this week. Try to modularise your code, or break it down into separate files. Document any key decisions about how you structure your code in your readme!
- [x] Code: break your JavaScript down into small functions with a clear input and output; this will make it easy to write tests
- [x] Tests: you must write tests!
- [ ] Design: aim for a responsive, mobile-first design
- [ ] Accessibility: same as always, we'll be running your code through accessibility checkers
- [x] Take appropriate measures when it comes to concealing private information (i.e. your API key!)

### The APIs we worked with:
1. [YouTube API](https://developers.google.com/youtube/)
2.  [Kanye Rest](http://www.kanyerest.xyz/) - a student hack project.

### What problem were you addressing?
We were addressing the issue that you can never find the lyrics to your favourite songs while watching the official video.

### User Stories:
* I want to be able to search, aquire and play any official Kanye West YouTube video
* I want to have the lyrics displayed alongside it so that I can sing along
* If it exists, I want the video and the lyrics to display at the same time
* If it doesn't exist, I want to receive an error message

### How did you split up the work?
We went through the whole build of the site and wrote out each function and element that needed to be created. Programming pairs were swapped daily and we rotated to ensure that everyone had a go at each task.

![](https://i.imgur.com/4ADvZ0N.jpg =400x)
![](https://i.imgur.com/Tp6AGBk.jpg =400x)

![](https://i.imgur.com/GkMU7Ub.jpg =400x)


### How can I set up the project locally?
Our project can be set up locally via [GitHub.](https://github.com/fac-12/KanyeKaraoke)

Our project does not require node modules, although we have created a package.Json file if you would like to add them.

### Difficulties we faced:
* Finding APIs that were reliable to work with
* No CORS with the Kanye Rest API
* YouTube can only retrieve the first video which doesn't guarantee that the user gets the right video

### What did you learn?
* Don't work with unreliable APIs
* Be aware of CORS issues
* Understanding the purpose of callback functions
* How parallel functions work

### Why we didn't use multiple files
As the project was quite small and we could acquire the result we wanted through a parallel function, we decided to just use one file to access our dom and js.

### What tests did we use?
As we only had one file dealing with our js and dom, we had to use QUnit tests. This is a browser-based test from an imported JS library which allowed us to test dom manipulations as well as regular functions.
