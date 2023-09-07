# Asynchronous Javascript

This repository has all my codes I wrote when I was learning more about Asynchronous JavaScript.

Below are some Basic terms and concepts we usually use in Asynchronous JavaScript.

## What is Asynchronous JavaScript?

Asynchronous JavaScript is a form of JavaScript programming that allows a program to do more than one thing at a time. This is important in JavaScript because it is a single-threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next.

so, how does JavaScript handle asynchronous code? JavaScript uses something called the event loop. The event loop is a constantly running process that checks if the call stack is empty. If the call stack is empty, it looks at the callback queue. If the callback queue has something in it, the event loop takes the first thing on the queue and pushes it onto the call stack where it is executed.

## What is the Call Stack?

The call stack is a data structure that uses the last in, first out (LIFO) principle to temporarily store and manage function invocation (call). we think of it as a record of where we are in the program. When a function is invoked, it is placed on the top of the call stack, and when JavaScript sees the return keyword or when the function ends, the compiler will remove (or pop) it from the call stack.

## what is a callback function?

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

## why do we need a callback function in asynchronuos programming?

In asynchronous programming, we need to wait for an event to happen before we can move on with our code. A callback function allows us to do this. We pass a function into a method and that function gets executed once the action has completed but all the other code continues to run.

## Why do we need Asynchronous JavaScript?

JavaScript is a single-threaded, non-blocking, asynchronous, concurrent language. It has a call stack, an event loop, a callback queue, and some other APIs. ... JS is single-threaded meaning that it has only one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next.
so, the reason why we need asynchronous JavaScript is that we need to wait for an event to happen before we can move on with our code. A callback function allows us to do this. so asynchronous JavaScript helps us to do more than one thing at a time and we don't need to pause what we were doing before.

## Blocking Vs Non-Blocking code

Blocking code is synchronous and executes line by line. It means that it will block the execution of the next line of code till the current line has finished executing.

Non-Blocking code is asynchronous and executes line by line as well. But it doesn't wait for the current line to finish executing. It moves to the next line while the current one is still executing.