# Material UI Demo

This application is a demonstration of how to use Material UI in React. We'll cover installation, setup, and use of MUI components, as well as discussing use of MUI with other CSS techniques.

## Installation

Getting started with MUI is pretty straight forward. After you've created your new React App by running `npx create-react-app "my-app-name"`, where "my-app-name" is the name of your new React app, you're going to need to install MUI in your application. You can do this by running `npm install @mui/material @emotion/react @emotion/styled` if you use npm or running `yarn add @mui/material @emotion/react @emotion/styled` if you use yarn. For more on installation options, you can view <a href="https://mui.com/material-ui/getting-started/installation/">MUI's page on installation</a>.

We're also going to install <a href="https://mui.com/material-ui/material-icons/">MUI Icons</a>, which you can use to quickly add some common and useful icons to your styling. Run `npm install @mui/icons-material` to gain access to all of MUI's Icons.

Once you've run these commands, you should see that `@mui/material`, `@emotion/react`, `@emotion/styled`, and `@mui/icons-material` have all been added to your `package.json` as dependencies. You're now ready to start using Material UI!

## Basic Setup

### Importing Roboto
MUI notes on its installation page that it was designed with the Roboto font in mind. So, in order for us to work seamlessly with MUI's library, we're going to want to make sure we include the Roboto font in our application. We can do this by including the link tag provided by MUI on its installation page -  `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>` - in the `head` section of our `index.html` file, which is stored within our `public` folder within our React app. This imports the Roboto font from Google fonts and allows you to use it throughout your application.

### Setting Default Styles

We're going to want to set up some default styles to ensure that MUI's library of components works correctly. It's likely a good idea to set up default styles like this regardless of whether or not you're working with a CSS library, as it will make styling easier and allow you to set some basic themes for your webpage.

First, we're going to want to clear away all of the CSS styles in `App.css` and `index.css` that were created when we ran `create-react-app`. Then, we're going to want to add our default styles in index.css that will apply to every JSX element in our application. We can do this by using the universal selector `*`. Here are the following styles we'll want to set:

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
}
```

(Note: setting the font-family to Roboto is specific to using MUI only, not to setting up any React app. If you have a different default font you want to use, make sure to <a href="https://fonts.google.com/">import it</a> into your app and set its font family here.)

Setting these global default styles will remove default margin and padding from any JSX element, which will make styling easier and more straightforward. It also sets the `box-sizing` attribute to `border-box`, as opposed to the default `content-box`, which is discussed <a href="https://github.com/Matt-Eva/intro-css-demo">here</a>.

## Using MUI Components

You can use MUI to handle all styling aspects of your webpage, but you may not find this to be the best approach. If you're ever in a situation where you feel like you're fighting a CSS Library in order to implement the styles you want, that may be a good indicator that you're relying too heavily on the library, which has an inherently limited scope (or you just need to get better at using the library itself - regardless, it's good to have a solid foundation in CSS itself before trying to rely exclusively on a CSS library). 

Combining CSS or styled-components with MUI will give you more design flexiblity and control over the structure of your webpage while still allowing you to call upon the full power of MUI's component library. There are a variety of great components that MUI offers that will allow you to set up advanced, dynamic functionality without having to go through the arduous process of creating it yourself. My personal approach is to use MUI and other CSS libraries as needed, and primarily rely on custom CSS or custom <a href="https://styled-components.com/">styled-components</a>.

Since MUI offers so many components, we're going to cover a few helpful ones that you can use to give your webpage a much more polished aesthetic.

#### A Note on Importing

Before we move on to the components themselves, let's briefly touch upon importing components.
We'll use a standard Button component as an example.

There are two ways we can import components from MUI into our React components:
```
import Button from "@mui/material/Button"
or
import { Button } from "@mui/material"
```

The first method is preferred, even though the second method is more convenient once you start importing multiple components from MUI into the same React component. 

The first method is preferred because it doesn't pull in in every module from the MUI library, then select resources from that library, which is what the second method does. Instead, it selects a specific subset of the MUI library (Button) and extracts the resource that specific subset contains. This is much more efficient, and will improve performance.

Check out MUI's <a href="https://mui.com/material-ui/guides/minimizing-bundle-size/">documentation</a> to learn more.

## Using Components

This example application uses a variety of different MUI components to implement common webpage features - modals, dropdown menus, text fields, hidden sidebars, and more. Some of these components require some setup to get working. I'll be discussing what goes into setting up each component. Different components require different kinds of setup, but getting familiar with a few basic components will make setting up unfamiliar components that much easier.

### Modals

You may not be familiar with the term 'modal', but you've certainly encountered them before. A modal refers to a pop-up window that appears as an overlay over the rest of your webpage. If you've already forked, cloned, and installed this application, go ahead and start it up by running `npm start`. Clicking on the blue 'login' button in the upper right-hand corner will open up a login modal.

Modals offer a great way to show specific components without redirecting your user to an entirely new webpage. While there are certainly times where a redirect is appropriate, using modals gives you a powerful UI tool that makes your user experience easier and more streamlined.

The modal in this application is created in the `MyModal` component, which is in the `Header` folder under `components`. There's a lot more going on in here than is required to set up a basic modal, but for the time being let's just focus on how we're getting this modal up and running.

The first step in getting our modal up and running is, of course, importing it from MUI: `import Modal from '@mui/material/Modal'`. 

To use our modal in our component, we simply reference it: `<Modal></Modal`. (Note that we capitalize Modal and give it an opening and a closing tag.)

Because modals are dynamic - they can be toggled to either appear or disappear - we're also going to need our useState hook to create some state that determines whether or not our modal is open or closed. In the example, I've created a stateful variable called `open`, with an initial value `false`.

Modals receive a prop, `open`, which determines whether or not the modal is visible or hidden. If `open` receives a value of `false`, the modal is hidden - if `true`, it's visible. That's why we set the initial state of our `open` state variable to `false` - we want our modal to be invisible upon pageload. Let's pass our `open` state to our modal's `open` prop:

```
function MyComponent(){
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Modal open={open}>
            </Modal>
        </div>
    )
}
```

Read more about Modals <a href="https://mui.com/material-ui/react-modal/">Here</a>.

#### Drawer (Collapsable Menu)

Read more about Drawers <a href="https://mui.com/material-ui/react-drawer/">Here</a>.


## Advanced Components - MUI X

Material UI offers a few more advanced components - specifically <a href="https://mui.com/x/react-data-grid/">data-grids</a> and <a href="https://mui.com/x/react-date-pickers/date-picker/">date-time pickers</a> - via its MUI X library. We've included a date-time picker in this application.

### Date-Time Picker

Using components from the MUI X library requires a few additional installations. First and foremost, to use the date-time picker, we have to run `npm install @mui/x-date-pickers`, which contains the components we'll actually be using. However, we also have to install an adapter package for the date library that we want to use in our MUI components. MUI lists <a href="https://mui.com/x/react-date-pickers/getting-started/">which adapater packages it can work with</a> - we've chosen to use datefns in this example. For that reason, we'll be running `npm install date-fns @date-io/date-fns`. If you choose a different option, you can consult MUI docs regarding which install statement you should use.



## Resources

List of <a href="https://mui.com/material-ui/material-icons/">MUI Icons</a>
