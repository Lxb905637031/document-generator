const {
    readdirSync,
    copyFileSync
} = require('fs')

const {
    outerPath: {
        htmlPath,
        cssPath,
        jsPath
    },
    innerDir: {
        htmlDir,
        cssDir,
        jsDir
    }
} = require('../config')

function initFiles(options) {
    copyFiles('css')
    copyFiles('js')
    copyWelcomePage()
}

function copyFiles(field) {
    let _innerFiles = []
    let _outerFiles = []
    let _dir = ''
    let _path = ''

    if (field === 'css') {
        _dir = cssDir
        _path = cssPath
        _innerFiles = readdirSync(cssDir)
        _outerFiles = readdirSync(cssPath)
    } else if (field === 'js') {
        _dir = jsDir
        _path = jsPath
        _innerFiles = readdirSync(jsDir)
        _outerFiles = readdirSync(jsPath)
    }

    _innerFiles.map(function(innerFile) {
        if (_outerFiles.indexOf(innerFile) === -1) {
            copyFileSync(_dir + '/' + innerFile, _path + '/' + innerFile, 0, function(err) {
                if (err) {
                    throw new Error('File is failed to copy.', err)
                }
            })
        }
    })
}

function copyWelcomePage() {
    const _htmlFiles = readdirSync(htmlPath)
    console.log(_htmlFiles)
    if (!_htmlFiles.length) {
        copyFileSync(htmlDir + '/welcome.html', htmlPath + '/welcome.html', 0, function(err) {
            if (err) {
                throw new Error('File is failed to copy.', err)
            }
        })
    }
}

module.exports = initFiles