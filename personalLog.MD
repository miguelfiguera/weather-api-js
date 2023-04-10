# weather api js

Explanation pending
___
## Bugs and Problems:
This time the first bug that I encounter was that a promise does not returns and object.

It returns a promise-object, so if you have an async function somewhere, you have to concatenate the one that fetch the data with another one that process that data.

This is coded on const buttonEventListener as it took me a while to understand what I had to do  before my app was able to retrieve a specific set of data and return it as an object (simple object not promise object).

