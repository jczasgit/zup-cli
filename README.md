# ZUP CLI
  CLI to handle apk uploads to [backend-zeep](https://github.com/jczasgit/backend-zeep) for [zeep](https://github.com/jczasgit/zeep).
  ```
  zup upload --apk-source {some/path/to/apk} --api-endpoint {http://endpoint} --password {password} --port {api-port}
  or
  zup u -s {some/path/to/apk} -e {http://endpoint} -p {password} --port {api-port}
  ```
  
  ## Installation
  This CLI is meant to be used as a global.
  There is no need to initialize a `package.json`.
  ```
  npm i -g zup-cli
  or
  sudo npm i -g zup-cli
  ```

  ## Using CLI by Downloading Zip
  1) Unzip the zip folder in your desired location.
  2) Open a console/terminal and `cd` into the unzip folder.
  3) Install dependencies using command [npm install](https://docs.npmjs.com/cli/v7/commands/npm-install).
  4) Link package to use globally `npm link`.
