import fs from 'fs';
import path from 'path';

export default function rootDir() {
    return process.mainModule.paths[0].split('server')[0].slice(0, -1)
}

/*
	Not yet working
*/

function getRootDir(pt = __dirname, sf = false) {
    const p = path.resolve(pt);
    let packageFound = false;
    let selfInstanceFound = sf;

    const fps = fs.readdirSync(p);
    for (let i = 0; i < fps.length; i++) {
        const fp = fps[i];
        if (!selfInstanceFound && fp === 'package.json') {
            packageFound = true;
            break;
        } else {
            packageFound = false;
        }
    }

    if (!selfInstanceFound && !packageFound) {
        const pp = path.resolve(p, '..');
        getRootDir(path.resolve(p, '..'), selfInstanceFound);
    } else if (!selfInstanceFound && packageFound) {
        selfInstanceFound = true;
        const pp = path.resolve(p, '..');
        getRootDir(pp, selfInstanceFound);
    } else if (selfInstanceFound && packageFound) {
        return p;
    }
}