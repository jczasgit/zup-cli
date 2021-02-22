import chalk from 'chalk';

const menu = {
    main: `
    ${chalk.greenBright('zup')} ${chalk.blueBright("[command]")} ${chalk.greenBright("<options>")}
  ${chalk.blueBright('upload')} ................ Upload apk to server. 
  ${chalk.red("Usage:")} zup [upload | u] <[--apk-source | -s] apk-source [--api-endpoint | -e] api-endpoint [--port] port [--password | -p] password>
                                [--apk-source | -s]: Absolute/revalive path to apk. ${chalk.red("Must provide.")}
                                [--api-endpoint | -e]: Url location where the apk is uploaded to. 
                                                    ${chalk.yellow("Hint: If not provided, will use endpoint in configuration.")}
                                                    ${chalk.yellow("Hint: If endpoint not in configuration, will not upload apk.")}
                                [--port]: Api endpoint port. Default 80;
                                [--password | p]: Password to access api endpoint.
                                                ${chalk.yellow("Hint: If not provided, will use password in configuration.")}
                                                ${chalk.yellow("Hint: If password not in configuration, will not upload apk.")}
  ${chalk.blueBright('configure')} ................ Configure cli settings, such as 
                                                    api endpoints & api keys/passwords.
  ${chalk.red("Usage:")} zup [configure | c] [<[--get-config | -g]> | <[--clear-config | -c]>] <[--endpoint | -e] endpoint [--port] port [--password | -p] password>
                                   [--get-config | -g]: Shows current configuration. 
                                                        ${chalk.red("Follow up options will not execute if this option is set.")}
                                   [--clear-config | -c]: Clear current configuration.
                                                          ${chalk.red("Follow up options will not execute if this option is set.")}
                                   [--endpoint | -e]: HTTP/HTTPS url.
                                   [--port]: Endpoint port. Defualt 80.
                                   [--password | -p]: Password to access api endpint. 
                                                      ${chalk.red("Password not encrypted. Be careful when executing -g in front of others.")}
  ${chalk.blueBright('version')} ............ Show package version.
  ${chalk.red("Usage:")} zup [version | v]
  ${chalk.blueBright('help')} ............... Show help menu for a command.
  ${chalk.red("Usage:")} zup [help | h] <command>
  `,
    upload: `
    ${chalk.whiteBright("Command")}
            zup [upload | u] <[--apk-source | -s] apk-source [--api-endpont | -e] api-endpoint [--port] port [--password | -p] password>
        ${chalk.whiteBright("Description")}
            Upload apk to server.
            [--apk-source | -s]: Absolute/revalive path to apk. ${chalk.red("Must provide.")}
            [--api-endpoint | -e]: Url location where the apk is uploaded to. 
                                   ${chalk.yellow("Hint: If not provided, will use endpoint in configuration.")}
                                   ${chalk.yellow("Hint: If endpoint not in configuration, will not upload apk.")}
            [--port]: Api endpoint port. Default 80.
            [--password | p]: Password to access api endpoint.
                              ${chalk.yellow("Hint: If not provided, will use password in configuration.")}
                              ${chalk.yellow("Hint: If password not in configuration, will not upload apk.")}
    `,  
    u: `
    ${chalk.whiteBright("Command")}
            zup [upload | u] <[--apk-source | -s] apk-source [--api-endpont | -e] api-endpoint [--port] port [--password | -p] password>
        ${chalk.whiteBright("Description")}
            Upload apk to server.
            [--apk-source | -s]: Absolute/revalive path to apk. ${chalk.red("Must provide.")}
            [--api-endpoint | -e]: Url location where the apk is uploaded to. 
                                   ${chalk.yellow("Hint: If not provided, will use endpoint in configuration.")}
                                   ${chalk.yellow("Hint: If endpoint not in configuration, will not upload apk.")}
            [--port]: Api endpoint port. Default 80.
            [--password | p]: Password to access api endpoint.
                              ${chalk.yellow("Hint: If not provided, will use password in configuration.")}
                              ${chalk.yellow("Hint: If password not in configuration, will not upload apk.")}
    `,
    version: `
    ${chalk.whiteBright("Command")}
            zup [version | v]
        ${chalk.whiteBright("Description")}
            Show the version of the cli.
    `,
    v: `
    ${chalk.whiteBright("Command")}
            zup [version | v]
        ${chalk.whiteBright("Description")}
            Show the version of the cli.
    `,
    help: `
    ${chalk.whiteBright("Command")}
            zup [help | h] <command>
        ${chalk.whiteBright("Description")}
            Show help menu for a command.
    `,
    h: `
    ${chalk.whiteBright("Command")}
            zup [help | h] <command>
        ${chalk.whiteBright("Description")}
            Show help menu for a command.
    `,
    configure: `
    ${chalk.whiteBright("Command")}
            zup [configure | c] <[--get-config | -g]> <[--endpoint | -e] endpoint [--password | -p] password>
        ${chalk.whiteBright("Description")}
            Configure cli settings, such as 
            api endpoints & api keys/passwords.
            [--get-config | -g]: Shows current configuration. 
                                 ${chalk.red("Follow up options will not execute if this option is set.")}
            [--endpoint | -e]: HTTP/HTTPS url.
            [--password | -p]: Password to access api endpint. 
                               ${chalk.red("Password not encrypted. Becareful when executing -g in front of others.")}
    `,
    c: `
    ${chalk.whiteBright("Command")}
            zup [configure | c] <[--get-config | -g]> <[--endpoint | -e] endpoint [--port] port [--password | -p] password>
        ${chalk.whiteBright("Description")}
            Configure cli settings, such as 
            api endpoints & api keys/passwords.
            [--get-config | -g]: Shows current configuration. 
                                 ${chalk.red("Follow up options will not execute if this option is set.")}
            [--endpoint | -e]: HTTP/HTTPS url.
            [--port]: Endpoint port. Default 80.
            [--password | -p]: Password to access api endpint. 
                               ${chalk.red("Password not encrypted. Becareful when executing -g in front of others.")}
    `
}

export function help(args) {
    const subCmd = args._[1];
    if (subCmd)
    {
        if (subCmd in menu)
        {
            console.log(menu[subCmd]);
        }
        else
        {
            console.log(`Command: ${subCmd} is not a valid command option.`);
        }
    }
    else
    {
        console.log(menu.main);
    }
}