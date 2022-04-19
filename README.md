# Material UI Demo

This application is a demonstration of how to use Material UI in React. We'll cover installation, setup, and use of MUI components, as well as discussing use of MUI with other CSS techniques.

## Installation

Getting started with MUI is pretty straight forward. After you've created your new React App by running `npx create-react-app "my-app-name"`, where "my-app-name" is the name of your new React app, you're going to need to install MUI in your application. You can do this by running `npm install @mui/material @emotion/react @emotion/styled` if you use npm or running `yarn add @mui/material @emotion/react @emotion/styled` if you use yarn. For more on installation options, you can view <a href="https://mui.com/material-ui/getting-started/installation/">MUI's page on installation</a>.

Once you've run this command, you should see that `@mui/material`, `@emotion/react`, and `@emotion/styled` have all been added to your `package.json` as dependencies. You're now ready to start using Material UI!

## Basic Setup

### Importing Roboto
MUI notes on its installation page that it was designed with the Roboto font in mind. So, in order for us to work seamlessly with MUI's library, we're going to want to make sure we include the Roboto font in our application. We can do this by including the link tag provided by MUI on its installation page -  `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>` - in the `head` section of our `index.html` file, which is stored within our `public` folder within our React app. This imports the Roboto font from Google fonts and allows you to use it throughout your application, which will allow MUI components to access it when they need it.

### Setting Default Styles

You should follow these steps when setting up any new React app, whether or not you work with MUI.

We're also going to want to clear away all of the CSS in `App.css` and `index.css` that were created when we ran `create-react-app`. Then, we're going to want to set some default styles in or index.js that will apply to every JSX element in our application. We can do this by using the universal selector `*`. Here are the following styles we'll want to set:

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
}
```

(Note: setting the font-family to Roboto is specific to using MUI only, not to setting up any React app. If you have a different default font you want to use, make sure to import it into your app and set its font family here.)

Setting these global default styles will remove default margin and padding from any JSX element, which will make styling easier and more straightforward. It also sets the `box-sizing` attribute to `border-box`, as opposed to the default `content-box`. Let's discuss the difference between the two.

### Border-box vs Content-box

If you give an element with a `box-sizing` style of `border-box` a set width and height, it will not grow larger than that width and/or height, even if you give it padding and a border. This is a big difference than and element with a `box-sizing` attribute of `content-box` (which is the default - if you've never used the `box-sizing` style attribute before, it means you've been working with a `content-box` style). The width and height of a `content-box` element will be the width that's been set, plus the padding, plus the border width. 

Setting all elements as `border-box` by default makes styling a lot easier - once we give any element a width and height, it will never expand beyond that width or height, even as we add padding and borders. We only have to keep track of one value, instead of three values.
 

Here's an example of the difference between using `border-box` and `content-box`. The yellow square is being selected by the class name `basic-template`, the green square is being selected by the class name `border-box`, and the blue square is being selected by the class name `content-box`.

```
.basic-template{
    width: 100px;
    height: 100px;
    background-color: hsl(60, 90%, 80%)
}

.border-box {
    box-sizing: border-box;
    height: 100px;
    width: 100px;
    padding: 10px;
    border: solid;
    border-width: 4px;
    background-color: green;
}

.content-box {
    /* content-box is default for box-sizing attribute */
    box-sizing: content-box;
    height: 100px;
    width: 100px;
    padding: 10px;
    border: solid;
    border-width: 4px;
    background-color: hsl(210, 90%, 50%)
}
```
<img width="144" alt="Screen Shot 2022-04-17 at 3 56 25 PM" src="https://user-images.githubusercontent.com/89106805/163735391-53a71d5f-9d98-420f-a1de-a774edf63b61.png">


As you can see, the element with `border-box` never grows beyond 100px, even though we've given it the same padding and border as our element styled with `content-box`.

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

On extra-small screens, the `<h2>` and `<h3>` elements will both occupy the first row in the grid - the `<h1>` will start to occupy the second row in the Grid. If you were to use Grid yourself, you'd likely want to set column sizing for each different breakpoint

#### Modals



#### Drawer (Collapsable Menu)

### Advanced Components

#### Datetime

## Resources

List of <a href="https://mui.com/material-ui/material-icons/">MUI Icons</a>
<a href="https://mui.com/material-ui/customization/breakpoints/#default-breakpoints">Mui breakpoints</a> 