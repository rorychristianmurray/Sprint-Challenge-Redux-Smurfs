1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

// Answer

Three common methods we use are map, filter, and reduce. These take take an input object and produce a new object, hence they do not produce side effects. We use higher order functions like connect to take an object and extend it's properties, returning a new function object, or the reducers to extend the store state object (clone a copy and add or modify state on new copy).

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

// Answer

Actions are objects that get dispatched from Action Creators that tell our store, based on an event (user input or internal or external change) what type of event that was and the way the data should change. The reducer reads the type of event from the action object and takes the payload data delivered to change the store based on that. The store is our central repository for application state in a Redux application and controls our UI experience, hence it is the single source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the overall single state object that controls our users experience with the application. Component state is tied to a single component, and is the interaction of a user with that component, before it is added to our Application state. We use component state when a user is only concerned with input in a single place and before it would impact the functioning of other parts of the applications

1.  What is middleware?

Middleware is software that sits between two other bits of software. It takes an input and will return an output based on it's use as an input to the ultimate destination.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

//Answer

redux-thunk is middleware that sits between our action creators and the reducers. It allows us to run asynchronous operations, and is particularly useful for API calls on the CRUD lifecycle.

1.  Which `react-redux` method links up our `components` with our `redux store`?

// Answer

We use the connect method to link our components with the redux by binding state to component props, as well as any methods we want available from our action creators on that component.
