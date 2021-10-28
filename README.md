![Logo](https://github.com/omelniz/exenv/blob/main/logo.png)

# EX.ENV
Convert env-variable to example string

```
from: api-host.com
  to: xxx-xxxx.xxx
```

## Easy to use
`npx env-to-example "https://string-to-convert.com"`

## Examples
```
npx env-to-example "us-east-1" // => "xx-xxxx-x"
npx env-to-example "http://google.com" // => "http://xxxxxx.xxx"
npx env-to-example "some-secret-key" // => "xxxx-xxxxxx-xxx"
```
