## Start the project at local
  npm start
## Section 1 notes
### Component
  A component -> Function or Class -> produces Html (using JSX) -> handles feedback from user (using event handlers)

## Section 2 notes (Building content with JSX)

### What is JSX
  Before ESX actually gets sent down to a user's browser, it gets converted into normal looking JavaScript code -> Bable covert jsx to javascript --> technically Javascript!!

### Converting HTML - JSX
  JSX VS HTNL:
  Add custom styling to an element uses different syntax
  Add a class to an element uses different syntax
  JSX can reference JS variables

  html: <div style='background-color: blue;'></div>
  jsx: <div style={{backgroundColor: "blue"}}></div>

  outer { indicates that we want to reference a Javascript variable inside jsx

  second { indicates a javascript object
### Class vs Classname
  we are not supposed to use a class inside of a jsx element -> use classname

