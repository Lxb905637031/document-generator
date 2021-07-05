const {
    copyFileSync,
    writeFileSync,
    readdirSync
} = require('fs')

const {
    readFile,
    createMenuItem,
    replaceHtml,
    createIframe
} = require('../libs/utils')

const {
    title,
    outerPath: {
        htmlPath,
        rootPath
    },
    innerDir: {
        htmlDir
    },
    regexp: {
        reg_ulContent,
        reg_titleContent,
        reg_headerTitleContent,
        reg_iframeContent
    }
} = require('../config')

function createIndexHtml(options, outerFilename) {
    const _htmlFiles = readdirSync(htmlPath)

    if (!_htmlFiles.length) {
        copyFileSync(htmlDir + '/index.html', rootPath + '/index.html', 0, function(err) {
            if (err) {
                throw new Error('File is failed to copy.', err)
            }
        })
        return
    }
    // 读取模板index.html内字符串
    const _indexHtmlStr = readFile(htmlDir + '/index.html')

    let menuList = ''
    let newHtml = ''

    let curIdx = outerFilename ? [].indexOf.call(_htmlFiles, outerFilename) : 0

    _htmlFiles.map(function(filename, index) {
        menuList += createMenuItem(filename, options.domain, options.port, index === curIdx ? true : false)
    })

    newHtml = replaceHtml(reg_ulContent, _indexHtmlStr, menuList)
    newHtml = replaceHtml(reg_titleContent, newHtml, options.port || title)
    newHtml = replaceHtml(reg_headerTitleContent, newHtml, options.title || title)
    newHtml = replaceHtml(reg_iframeContent, newHtml, createIframe(_htmlFiles[curIdx], options.domain, options.port))

    writeFileSync(rootPath + '/index.html', newHtml, function(err) {
        if (err) {
            throw new Error('File is failed to write.', err)
        }
    })
}

module.exports = {
    createIndexHtml
}