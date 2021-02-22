export function version() {
    const PACKAGE_JSON = require('../package.json');
    console.log(`zup cli version: ${PACKAGE_JSON.version}`);
}