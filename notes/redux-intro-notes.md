# Redux without React Project
## Adam Specker
## April 2018 GWU Bootcamp

### Initial Concepts 
* entire state (state-tree) is kept in one javascript object
* cannot modify or write to state tree
* actions are objects that describe the change
    * actions are needed for every change in the state tree

* pure vs. impure functions
    * pure - return value is based entirely on their arguments
        * each time it's called you will get the same return value
        * do not modify values passed to them
    * impure - network or database interaction
        * side effects and possible override of values passed
    * **some functions need to be pure**

* reducer functions - take state tree and action and return next state
    * pure function - does not modify state but returns new state object
    * accepts state and action as arguments, returns next state
    * if reducer receives undefined as an argument it should return the default state

* ```use npm or and webpack/browserify```

### Avoiding Array Mutations
* ```expect for assertions, deep freeze to prevent mutations```
* instead of push use concat and ...spread
* instead of splice use slice and spread
    




### Resources Used

#### Boilerplate from react/redux workshop
* https://github.com/penmon/react-workshop/tree/master/react-workshop-start

* Dave Abramov tutorials
    * https://egghead.io/courses/getting-started-with-redux
* Talk Kol tutorials
    * https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092
* Dave Ceddia redux starter guide
    * https://daveceddia.com/how-does-redux-work/
* Medium React Beginner guide
    * https://medium.com/netscape/beginners-guide-to-react-redux-how-to-start-learning-and-not-be-overwhelmed-af04353101e



### Example Projects
* Mastermind react/redux
    * https://github.com/salsita/mastermind