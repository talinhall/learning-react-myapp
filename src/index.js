////////Import the React and ReactDOM libraries/////////////
//use import for ES2015 modules and require for CommonJS Modules
//these dependencies react react-dom are in node-modules
import React from 'react';
import ReactDOM from 'react-dom';
////////////Create a react component///////////////
//a react component is a function or a class 
//purpose of compennent is to produce HTML that used by user
//this is using JSX (kind of looks like HTML)
//second purpose to handle feedback from user.(Event Handlers) 

/*const App = function(){
    return <div>Hi There!</div>; //JSX
};
the JSX gets converted to javascript with the babel compiler
*/
//this arrow function
/*const App = () => {
    return <div>Hi there!</div>;
};
*/
/* below is HTML didnt work afteer that show it is JSX syntax
const App= () =>{
    return(
        <div>
            <label class ='label' for='name'>Enter name:</label>
            <input id="name" type = "text"/>
            <button style="background-color: blue; color: white;">Submit</button>
        </div>
    );
};
*/
//style is now a javascript object
//class is a javascript keyword so cant use to avoid collisions.
//JSX can reference JS variables
const App= () =>{
    const buttonText = {text: 'Click me'};
    const labelText = 'Enter name:';
    return(
        <div>
            <label className ='label' htmlFor='name'>
                {labelText}
            </label>
            <input id="name" type = "text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
            </button>
        </div>
    );
};

////////Take the react component and show it on the screen ///////////
//when someone goes to this locol host they get sent to 
//index.html which is in public folder. inside body there is 
//a div with id of root when create componet want to render it
//or display it in that div so that is what the second argument 
//does.gets refernce to that div with id root
ReactDOM.render(
    <App />, //componet we just created above
    document.querySelector('#root')
);