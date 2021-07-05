const { mkdirSync, existsSync } = require('fs')

const {
    outerPath: {
        srcPath,
        jsPath,
        cssPath,
        htmlPath,
        mdPath
    }
} = require('../config')

function initFolders() {
    if (!existsSync(srcPath)) {
        createFolder(srcPath)
    }

    if (!existsSync(htmlPath)) {
        createFolder(htmlPath)
    }

    if (!existsSync(cssPath)) {
        createFolder(cssPath)
    }

    if (!existsSync(jsPath)) {
        createFolder(jsPath)
    }

    if (!existsSync(mdPath)) {
        createFolder(mdPath)
    }
}


function createFolder(path) {
    /**
     * params path 文件夹路径
     * params callback 创建失败，错误信息抛出
     */
    mkdirSync(path, (err) => {
        if (err) throw new Error('Folder is failed to create.', err)
    })
}

module.exports = initFolders