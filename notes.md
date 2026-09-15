component = a piece of the  ex. button ,box,
{ChatInput()} ==<ChatInput></ChatInput>
fragments , remove extra div,<></>
props=  properties, props make pur component reuseuble
const message=props.message ==const {message}=props // destructuring

guard operator(&&)
const result=value1 && value2
- if value1 is true . the result will be value2
- this works just like an if-statement
-key
- event handler
- state - data that is connected to the HTML
        when we update thus data, it will update the HTML

- React.useState=> returns an array , this array has two values, 
arr[0]=> ist value => the current value od chatMessages(the current data)
arr[1]=>dunction that updates the data;=> this fuction lets us update the data  , in react we should not update the data directly , id we update the data directly react will not update the HTML  => also known as the Updater Function
-setChatMessages(new value of chat messages) => gonna replace wntire chat message array with the new array

- onChange = runs a function when we change the text inside an inpute
- event.target= gives us the element that we;re typing in
- lifting the state up 
- lifting state of chatMessages(chatMessage and setChatMessagess) as we have to use them in chatInput

- controlled inputs


-----------------------------------------------
- Css
-button-
- padding= space inside the button 
- margin = space outside an element
- border-radius -- to make round radius
- cursor:pointer --- pointer icon

- chat-box-
- padding = space inside an element
- border-width ==> to change the thickness 
- flexbox-- create a flexible layout
- layout - how the elements are positioned
 - to use flexbox:
 1. create container around elements
 2. add display:flex; to container
 3. use flexbox features

- max- width

- centralise the app on the website
- one way is to use margin
-        margin-left:auto;
         margin-right:auto;

- layout for chatMessages
create className 
use flexBox
justify-content = controls how the elements are displayed horizontally
justify-content:end; // display content on the right

- style text in the chatMessages

when a block element (like <div>) is inside a flexbox
- ot no lonher takes up the entire line
- it only takes up as much space as it needs to

align-items=> prevents stretching of elements
==> it controls how the elements are displayed vertically , 
by default , align-items:stretch