# CloseNavigator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Close or reload the page

When we close or reload a page we can use a javascript property called beforeunload, with this property we can show a confirmation message to the user before the page is close.

Angular allow us to use this javascript property, and not only pass the message for the confirm alert, we can set functionality too if we want.

Other javascript property that we can use is unload, this is apply when the page is close, whitout a message confirmation.

The unload property works when the page is close, but the beforeunload works when the page is close, but when the page is reload too.

## Implementation
I used two ways for do this.
1. The first way is in the html div tag (<div (window:beforeunload)="doBeforeClose()">), in this case the event is defined into tag, and it can call a function; for this example there is not a confirm dialog message, the code is execute inmediatly when the page is load or close.
2. The second way is using hostlistener, I created a directive and I used two host listener, the first hostlistener is beforeunload and the second is unload; the first function allow to the page show a confirm dialog message, and the second function is execute when the user confirms the message, that is when the page is close.

## NodeJs
There is a nodejs project for test the execution code when the page is load or close; in both cases the application calls a nodejs service, and if we want to se there is a message in the console. We can see that there is only one logout message when the page is load, but when the page is close there are two logout message, this is because when the page is load the application only execute the beforeunload event and when the page is close, the application execute both events (beforeunload and unload).

You can execute the nodejs project with npm start (port 3000), remember go to node_project/after-close-nav path

