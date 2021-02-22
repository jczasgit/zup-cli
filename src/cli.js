import minimist from 'minimist';

// helper functions
import { help } from './help';
import { version } from './version';
import { configure } from './configure';
import { upload } from './upload';

export async function cli(argsArray) {
    const argsObj = minimist(argsArray.slice(2));

    let cmd = argsObj._[0] || "help";

    if (cmd === "version" || cmd === "v")
    {
        // log version
        version();
    }
    else if (cmd === "help" || cmd === "h")
    {
        // log help menu
        help(argsObj);
    }
    else if (cmd === "upload" || cmd === "u")
    {
        // upload apk
        upload(argsObj);
    }
    else if (cmd === "configure" || cmd === "c")
    {
        // configure cli
        configure(argsObj);
    }
    else
    {
        // default log help menu
        console.log(`Command '${cmd}' not found.`);
        console.log('Run: zup help');
    }
}