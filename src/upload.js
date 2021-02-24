import * as fs from 'fs';
import Conf from 'conf';
import { configKey } from './configure';
import chalk from 'chalk';
import axios from 'axios';
const FormData = require('form-data');

function requestTempKey(password, endpoint, port) {
    return new Promise((resolve, reject) => {
        console.log(chalk.greenBright("Requesting key..."));
        axios.post(`${endpoint}:${port}/update-handle/temp-key`, { password: password.toString() })
            .then((res) => {
                if (res.status === 200)
                {
                    resolve(res.data);
                }
                else
                {
                    reject(res.data);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function uploadApk(key, endpoint, port, apkPath) {
    return new Promise((resolve, reject) => {
        console.log(chalk.blueBright("Uploading..."));
        const form = new FormData();
        form.append('file', fs.createReadStream(apkPath));

        axios.post(`${endpoint}:${port}/update-handle/upload-update/${key}`, form, { 
            headers: form.getHeaders(),
            maxBodyLength: Infinity,
            maxContentLength: Infinity
            })
            .then((res) => {
                console.log(chalk.black("End of upload..."));
                resolve(res);
            })
            .catch((error) => {
                reject({ error: error.toString() });
            });
    });
}

export async function upload(args) {
    const config = new Conf();
    const { endpoint, password, port } = config.get(configKey);
    let apkSource = args["apk-source"] || args.s;// * apk path: string
    let useApi = args["api-endpoint"] || args.e || endpoint; // * api endpoint: string
    let usePassword = args.password || args.p || password; // * api password: string
    let usePort = args.port || port || 80; // * api port: string
    if(!apkSource)
    {
        // apk source path not provided.
        console.log("Apk source not provided.");
        return;
    }

    if(!fs.existsSync(apkSource))
    {
        // apk source invalid
        console.log(`Could not find apk in ${apkSource}`);
        return;
    }

    if(!useApi)
    {
        // no api endpoint
        console.log(`
        No usable api endpoint.
        Please provide an api by using --api-endpoint | -e <api-endpoint>
        Or configure an api endpoint by using command:
                zup configure --endpoint <api-endpoint> --password <password>
        For more information use help command:
                zup help
        `);
        return;
    }

    if(!usePassword)
    {
        // no api password
        console.log(`
        No usable api password.
        Please provide a password by using --password | -p <password>
        Or configure a password by using command:
                zup configure --endpoint <api-endpoint> --password <password>
        For more information use help command:
                zup help
        `);
        return;
    }

    try {
        // * data = { key: [ 8 integers ] }
        const reportString = `
        ${chalk.whiteBright("Using this configuration to process upload:")}
        ${chalk.yellow(`Api: ${useApi}`)}
        ${chalk.yellow(`Port: ${usePort}`)}
        ${chalk.yellow(`Apk-source: ${apkSource}`)}
        ${chalk.yellow(`Password: ********`)}
        `
        console.log(reportString);

        const { key } = await requestTempKey(usePassword, useApi, usePort);
        const res = await uploadApk(key, useApi, usePort, apkSource);
        if (res.status === 200 && res.data.success)
        {
            console.log(chalk.bgGreen("Upload Successful."));
        }
        else
        {
            console.log(chalk.bgRed("Upload unsuccessful."));
        }
    } catch (error) {
        console.error(error);
    }
}