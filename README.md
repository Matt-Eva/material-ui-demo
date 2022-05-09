# Material UI Demo

This application is a demonstration of how to use Material UI in React. We'll cover installation, setup, and use of MUI components, as well as discussing use of MUI with other CSS techniques.

## Installation

Getting started with MUI is pretty straight forward. After you've created your new React App by running `npx create-react-app "my-app-name"`, where "my-app-name" is the name of your new React app, you're going to need to install MUI in your application. You can do this by running `npm install @mui/material @emotion/react @emotion/styled` if you use npm or running `yarn add @mui/material @emotion/react @emotion/styled` if you use yarn. For more on installation options, you can view <a href="https://mui.com/material-ui/getting-started/installation/">MUI's page on installation</a>.

Once you've run this command, you should see that `@mui/material`, `@emotion/react`, and `@emotion/styled` have all been added to your `package.json` as dependencies. You're now ready to start using Material UI!

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

MUI comes with a set of basic components and a set of more advanced components that require some extra installation. Let's get started with the basic components.

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

### Basic Components.

This is an overview of a few of MUI's basic components. Many more are included on their website. (I suggest you check them out!)

#### Grid

MUI offers its own version of CSS grid via a component called Grid. In order to use Grid, all you need to do is import it into your component.

You can use the Grid component to set a Grid container and a Grid item within that Grid container. To set it as a container, you would write "container" inside of the opening Grid tag: `<Grid container/><Grid>`. To set an item, you write "item" inside the opening Grid tag: `<Grid item></Grid>`. All Grid items should be wrapped within the Grid Container - the elements you want to display should be wrapped inside the Grid item. Like so:

```
<Grid container>
    <Grid item>
        <h2>Header</h2>
    </Grid>
</Grid>
```
This sets our `<h2>` element as a item within our Grid container

MUI's Grid is split up into 12 different columns of equal width. You can set a Grid item to span a certain number of columns in your grid. The number of columns an item spans can vary for different breakpoints - xs, sm, md, lg, and xl. Each of these breakpoints corresponds with the following screen sizes:

```
xs: < 600px,
sm: > 600px, < 900px,
md: > 900px, < 1200px,
lg: > 1200px, < 1536px,
xl: > 1536px
```

This is a quick and simple way to handle layout changes that would be controlled by Media queries in basic CSS.

Once the number of columns spanned by Grid items within a Grid container exceeds 12, a new row is created.

We can also set the spacing between columns within the grid by assigning our Grid container a "spacing" attribute. This is what a basic Grid format might look like:

```
<Grid container spacing={2}>
    <Grid item xs={4}>
        <h2>Header</h2>
    </Grid>
    <Grid item xs={8}>
        <h3>H3 Header</h3>
    </Grid>
    <Grid item xs={6}>
        <h1>Big Header</h1>
    </Grid>
</Grid>
```

On extra-small screens, the `<h2>` and `<h3>` elements will both occupy the first row in the grid - the `<h1>` will start to occupy the second row in the Grid. If you were to use Grid yourself, you'd likely want to set column sizing for each different breakpoint.

Read up more on MUI Grid <a href="https://mui.com/material-ui/react-grid/">here</a>.

I prefer to simply use CSS grid and Flexbox for handling layouts, as I find it provides more flexiblity and agency, but if you like MUI's approach to styling, it's worth checking it out.

#### Modals

Read about Modals <a href="https://mui.com/material-ui/react-modal/">Here</a>.

#### Drawer (Collapsable Menu)

Read about Drawers <a href="https://mui.com/material-ui/react-drawer/">Here</a>.

### Advanced Components

#### Datetime



## Resources

List of <a href="https://mui.com/material-ui/material-icons/">MUI Icons</a>
<a href="https://mui.com/material-ui/customization/breakpoints/#default-breakpoints">Mui breakpoints</a> 
