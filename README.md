# EX.ENV

![Logo](https://github.com/omelniz/exenv/blob/main/logo.png)

Convert env-variable to example string

```
from: api-host.com
  to: xxx-xxxx.xxx
```

## Easy to use
`npx exenv "https://string-to-convert.com"`

## Examples
```
npx exenv "us-east-1" // => "xx-xxxx-x"
npx exenv "http://google.com" // => "http://xxxxxx.xxx"
npx exenv "some-secret-key" // => "xxxx-xxxxxx-xxx"
```
