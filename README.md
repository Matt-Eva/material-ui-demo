# Material UI Demo

This application is a demonstration of how to use Material UI in React. We'll cover installation, setup, and use of MUI components, as well as discussing use of MUI with other CSS techniques.

## Installation

Getting started with MUI is pretty straight forward. After you've created your new React App by running `npx create-react-app "my-app-name"`, where "my-app-name" is the name of your new React app, you're going to need to install MUI in your application. You can do this by running `npm install @mui/material @emotion/react @emotion/styled` if you use npm or running `yarn add @mui/material @emotion/react @emotion/styled` if you use yarn. For more on installation options, you can view <a href="https://mui.com/material-ui/getting-started/installation/">MUI's page on installation</a>.

We're also going to install <a href="https://mui.com/material-ui/material-icons/">MUI Icons</a>, which are incredibly useful for giving your webpage a more polished, professional feel. Run `npm install @mui/icons-material` to gain access to all of MUI's Icons.

Once you've run this command, you should see that `@mui/material`, `@emotion/react`, `@emotion/styled`, and `@mui/icons-material` have all been added to your `package.json` as dependencies. You're now ready to start using Material UI!

## Basic Setup

### Importing Roboto
MUI notes on its installation page that it was designed with the Roboto font in mind. So, in order for us to work seamlessly with MUI's library, we're going to want to make sure we include the Roboto font in our application. We can do this by including the link tag provided by MUI on its installation page -  `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>` - in the `head` section of our `index.html` file, which is stored within our `public` folder within our React app. This imports the Roboto font from Google fonts and allows you to use it throughout your application, which will allow MUI components to access it when they need it.

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

You can use MUI to handle all styling aspects of your webpage, but as you build more complex applications or aim for more custom designs, you may not find this to be the best approach. If you're ever in a situation where you feel like you're fighting a CSS Library in order to implement the styles you want, that may be a good indicator that you're relying too heavily on the library, which has an inherently limited scope (or you just need to get better at using the library itself). 

Combining CSS or styled-components with MUI will give you more design flexiblity and control over the structure of your webpage while still allowing you to call upon the full power of MUI's component library. There are a variety of great components that MUI offers that will allow you to set up polished, dynamic functionality without having to go through the arduous process of creating it yourself. My personal approach is to use MUI and other CSS libraries as needed.

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

The first method is preferred, even though the second method is more convenient once you start importing multipel components from MUI into the same React component. The reason the first method is preferred is that it doesn't load the entire MUI library, then select resources from that library - it selects a specific subset of the MUI library (Button) and extracts the resource that specific subset contains. This is much more efficient, and will improve performance.

#### Modals

Read about Modals <a href="https://mui.com/material-ui/react-modal/">Here</a>.

#### Drawer (Collapsable Menu)

Read about Drawers <a href="https://mui.com/material-ui/react-drawer/">Here</a>.

### Advanced Components

#### Datetime



## Resources

List of <a href="https://mui.com/material-ui/material-icons/">MUI Icons</a>
<a href="https://mui.com/material-ui/customization/breakpoints/#default-breakpoints">Mui breakpoints</a> 
