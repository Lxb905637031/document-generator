const {
    watch,
    existsSync,
    unlinkSync
} = require('fs')

const {
    outerPath: {
        htmlPath,
        mdPath
    }
} = require('../config')

const {
    createIndexHtml,
    mdToHtml
} = require('../compiler')

function initWathcers(options) {
    watchHtml(options)
    watchMarkdown()
}

// 监听html文件夹及文件变化
function watchHtml(options) {
    watch(htmlPath, function(event, filename) {
        if (filename) {
            createIndexHtml(options, event === 'change' && filename)
        }
    })
}

function watchMarkdown() {
    watch(mdPath, function(event, filename) {
        if (filename) {
            if (!existsSync(mdPath + '/' + filename)) {
                const removingFile = htmlPath + '/' + filename.replace('.md', '.html')
                existsSync(removingFile) && unlinkSync(removingFile)
                return
            }

            mdToHtml(filename)
        }
    })
}

module.exports = initWathcers