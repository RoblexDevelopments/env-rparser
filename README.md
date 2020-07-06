# roblex-env
The .env file parser that Roblex uses.

## Usage

Example:

.env
```
SECRET="one two buckle my shoe"
SOMETHING=string
```

index.js:
```js
require("renv")() // param: debug: boolean = false

console.log(process.env.SECRET, process.env.SOMETHING);
// one two buckle my shoe string
```
