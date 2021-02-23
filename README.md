# ZUP CLI
  CLI to handle apk uploads to [backend-zeep](https://github.com/jczasgit/backend-zeep) for [zeep](https://github.com/jczasgit/zeep).
  ```
  zup upload --apk-source {some/path/to/apk} --api-endpoint {http://endpoint} --password {password} --port {api-port}
  or
  zup u -s {some/path/to/apk} -e {http://endpoint} -p {password} --port {api-port}
  ```
  
  ## Installation
  This CLI is meant to be used as a global.
  ```
  npm i -g zup-cli
  or
  sudo npm i -g zup-cli
  ```
