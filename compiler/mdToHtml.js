const {
    writeFileSync
} = require('fs')

const markdown = require('marked')
const highlight = require('highlight.js')

const {
    readFile
} = require('../libs/utils')

const {
    regexp: {
        reg_mdStr
    },
    outerPath: {
        mdPath,
        htmlPath,
    },
    innerDir: {
        htmlDir
    }
} = require('../config')

// markdown插件配置
markdown.setOptions({
    // 配置highlight插件
    highlight: function(code) {
        return highlight.highlightAuto(code).value
    }
})

function mdToHtml(filename) {
    const _mdStr = readFile(mdPath + '/' + filename)
    let _htmlStr = readFile(htmlDir + '/md.html')
    const newStr = markdown(_mdStr)
    _htmlStr = _htmlStr.replace(reg_mdStr, newStr)

    writeFileSync(htmlPath + '/' + filename.replace('.md', '.html'), _htmlStr, function(err) {
        if (err) {
            throw new Error('File is failed to write.', err)
        }
    })
}

module.exports = mdToHtml