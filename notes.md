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