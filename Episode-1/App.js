const heading = React.createElement('h1', {
    id: 'heading',
    class: 'im-heading',
}, 'Hello world from React'); //creating an element in react
// {} in this we could give attributes, like class and id

console.log(heading); //object
//creating root

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

/**
 * How do we create a nested Element inside React like this
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child"},
    React.createElement("h1", {},"I'm an h1 tag" ))
);

root.render(parent);


/**
 * How do we create siblings inside a nested Element inside React like this
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * 
 * We need to pass the third argument inside an array
 */

const parent2 = React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child"},
    [React.createElement("h1", {},"I'm an h1 tag" ),
        React.createElement("h2", {},"I'm an h2 tag" )
    ])
);

root.render(parent2);

/**
 * How do we create two childs inside a nested Element inside React like this
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h1 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h1 tag</h2>
 *      </div>
 * </div>
 * 
 * We need to pass the array argument second argument
 */
const parent3 = React.createElement("div", {id:"parent"},
    [
        React.createElement("div", {id:"child"},
        [React.createElement("h1", {},"I'm an h1 tag" ),
            React.createElement("h2", {},"I'm an h2 tag" )
        ]),
        React.createElement("div", {id:"child2"},
        [React.createElement("h1", {},"I'm an h1 tag" ),
            React.createElement("h2", {},"I'm an h2 tag" )
        ]),
    ]
);

//JSX
 
root.render(parent3);