const _0x5eaa = ['npm\x20run\x20test', 'Submit\x20OK\x0a', '02-JS-I', 'pop', 'password', 'split', 'Prep\x20-\x20', 'log', 'statusText', 'Parámetro\x20inválido\x20revise\x20que\x20sea\x20un\x20número\x20de\x20homework\x20válido', '.\x20\x0a', '@github.com/', 'trim', 'numTotalTests', 'post', 'includes', 'exit', 'text', 'Estas\x20seguro\x20que\x20deseas\x20submitear\x20este\x20resultado?\x20(S/n)', '\x20a\x20las\x20', 'then', 'Ejecutando\x20tests...\x0a', 'child_process', 'message', 'node-fetch', '05-JS-IV', 'git\x20push\x20https://', 'Password:', 'argv', 'https://proxy.soyhenry.com:3000/m0/submit', '03-JS-II', 'prompts', 'slice', 'parse', 'El\x20archivo\x20result.json\x20no\x20existe\x20por\x20lo\x20que\x20se\x20creará\x20uno\x20nuevo', 'git\x20commit\x20-m\x20\x22CP\x20commiteado\x20por\x20', 'username', 'application/json', 'readFileSync', '09-CSS-Positioning', 'numPassedTests', '\x20master', 'error', '01-Git', 'status', 'now', 'stringify', 'error:\x20', 'usuario\x20de\x20github:', 'toLowerCase', 'RESULTADO:\x20', 'Homework\x20sin\x20tests\x20\x0a', 'catch', 'git\x20add\x20.', 'Falló\x20el\x20submit\x0a', '08-HTML', '06-JS-V'];
(function(_0x5f2252, _0x2e4dc9) {
    const _0x5eaaf2 = function(_0x31c96c) {
        while (--_0x31c96c) {
            _0x5f2252['push'](_0x5f2252['shift']());
        }
    };
    _0x5eaaf2(++_0x2e4dc9);
}(_0x5eaa, 0x174));
const _0x31c9 = function(_0x5f2252, _0x2e4dc9) {
    _0x5f2252 = _0x5f2252 - 0x88;
    let _0x5eaaf2 = _0x5eaa[_0x5f2252];
    return _0x5eaaf2;
};
const _0x4a26ce = _0x31c9,
    {
        exec
    } = require(_0x4a26ce(0xb9)),
    fetch = require(_0x4a26ce(0xbb)),
    prompts = require(_0x4a26ce(0x89)),
    fs = require('fs');

function ejecutar(_0x19cbb9) {
    return new Promise((_0x3912ec, _0x576521) => {
        exec(_0x19cbb9, (_0x8d673b, _0x147be4, _0x2d90be) => {
            const _0x2684c6 = _0x31c9;
            if (_0x8d673b) return _0x576521(_0x2684c6(0x99) + _0x8d673b[_0x2684c6(0xba)]);
            if (_0x2d90be) return _0x3912ec('stderr:\x20' + _0x2d90be);
            _0x3912ec(_0x147be4);
        });
    });
}
async function submit(_0x437038, _0x7255fd) {
    const _0x5cb490 = _0x4a26ce;
    console[_0x5cb490(0xaa)](_0x5cb490(0x9c) + _0x437038 + '\x20de\x20' + _0x7255fd + _0x5cb490(0xad));
    const {
        seguir: _0x32c418
    } = await prompts({
        'type': _0x5cb490(0xb4),
        'name': 'seguir',
        'message': _0x5cb490(0xb5)
    });
    if (_0x32c418[_0x5cb490(0x9b)]() !== 's') return process[_0x5cb490(0xb3)](0x0);
    const {
        username: _0x47d1ef,
        password: _0x3c81a9
    } = await prompts([{
        'type': 'text',
        'name': _0x5cb490(0x8e),
        'message': _0x5cb490(0x9a)
    }, {
        'type': _0x5cb490(0xa7),
        'name': _0x5cb490(0xa7),
        'message': _0x5cb490(0xbe)
    }]);
    let _0x42d04d;
    try {
        const _0x4ae714 = await ejecutar('git\x20config\x20--get\x20remote.origin.url');
        _0x42d04d = _0x4ae714[_0x5cb490(0xaf)]()[_0x5cb490(0xa8)]('/')[_0x5cb490(0xa6)](), await ejecutar(_0x5cb490(0x9f)), await ejecutar(_0x5cb490(0x8d) + _0x47d1ef + _0x5cb490(0xb6) + Date[_0x5cb490(0x97)]() + '\x22'), await ejecutar(_0x5cb490(0xbd) + _0x47d1ef['toLowerCase']() + ':' + _0x3c81a9 + _0x5cb490(0xae) + _0x47d1ef[_0x5cb490(0x9b)]() + '/' + _0x42d04d + _0x5cb490(0x93));
    } catch (_0x507d20) {
        return console[_0x5cb490(0x94)](_0x507d20), process[_0x5cb490(0xb3)](0x0);
    }
    fetch(_0x5cb490(0xc0), {
        'method': _0x5cb490(0xb1),
        'headers': {
            'Content-Type': _0x5cb490(0x8f)
        },
        'body': JSON[_0x5cb490(0x98)]({
            'github': _0x47d1ef,
            'passed': _0x437038,
            'total': _0x7255fd,
            'repo': _0x5cb490(0xa9) + hwPaths[hwNumber - 0x1]
        })
    })[_0x5cb490(0xb7)](function(_0x589e3a) {
        console.log(_0x589e3a);
        console.log(_0x589e3a.json())
        console.log(_0x589e3a.data())
        const _0x11dabe = _0x5cb490;
        if (_0x589e3a[_0x11dabe(0x96)] !== 0xc8) throw new Error(_0x589e3a[_0x11dabe(0xab)]);
        return console[_0x11dabe(0xaa)](_0x11dabe(0xa4)), process[_0x11dabe(0xb3)](0x0);
    })[_0x5cb490(0x9e)](function(_0x41fd1c) {
        const _0x2879f6 = _0x5cb490;
        return console[_0x2879f6(0x94)](_0x41fd1c), console[_0x2879f6(0xaa)](_0x2879f6(0xa0)), process['exit'](0x1);
    });
}
var args = process[_0x4a26ce(0xbf)][_0x4a26ce(0x8a)](0x2);
if (args['length'] != 0x1 || !['2', '3', '4', '5', '6', '7', '8', '9'][_0x4a26ce(0xb2)](args[0x0])) return console['log'](_0x4a26ce(0xac)), process[_0x4a26ce(0xb3)](0x0);
var hwNumber = args[0x0];
const hwPaths = [_0x4a26ce(0x95), _0x4a26ce(0xa5), _0x4a26ce(0x88), '04-JS-III', _0x4a26ce(0xbc), _0x4a26ce(0xa2), '07-JS-VI', _0x4a26ce(0xa1), _0x4a26ce(0x91)],
    resultFile = __dirname + '/' + hwPaths[hwNumber - 0x1] + '/homework/tests/result.json';
try {
    fs['unlinkSync'](resultFile);
} catch (_0x587305) {
    console[_0x4a26ce(0xaa)](_0x4a26ce(0x8c));
}
hwNumber === '8' || hwNumber === '9' ? (console[_0x4a26ce(0xaa)](_0x4a26ce(0x9d)), submit(0x0, 0x0)) : (console[_0x4a26ce(0xaa)](_0x4a26ce(0xb8)), exec(_0x4a26ce(0xa3) + hwNumber, async (_0x36692c, _0x882b3b, _0x22339a) => {
    const _0xc5d8ad = _0x4a26ce;
    let _0x177a2a = fs[_0xc5d8ad(0x90)](resultFile),
        _0xe63590 = JSON[_0xc5d8ad(0x8b)](_0x177a2a);
    const _0x1a4b66 = _0xe63590[_0xc5d8ad(0x92)],
        _0x3dad7b = _0xe63590[_0xc5d8ad(0xb0)];
    submit(_0x1a4b66, _0x3dad7b);
}));