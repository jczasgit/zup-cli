import Conf from 'conf';

export const configKey = "zup-cli";

export function configure(args) {
    const config = new Conf();
    let currentConfigObject = config.get(configKey);
    currentConfigObject = currentConfigObject || { };

    let getConfig = args['get-config'] || args.g;
    if(getConfig)
    {
        console.log(currentConfigObject);
        return;
    }

    let clearConfig = args['clear-config'] || args.c;
    if(clearConfig)
    {
        config.clear();
        console.log("Configuration cleared.");
        return;
    }
    
    let endpoint = args.endpoint || args.e;
    if(!endpoint)
    {
        console.log("No endpoint provided.");
        return;
    }
    
    let port = args.port;
    if(!port)
    {
        port = 80;
        console.log("Port not specified. Using defualt port 80.");
    }

    let password = args.password || args.p;
    if(!password)
    {
        console.log("No password provided.");
        return;
    }

    config.set(configKey, { endpoint, password, port });
    console.log("Current configuration: ", config.get(configKey));
    console.log("Configuration completed.");
    return;
}