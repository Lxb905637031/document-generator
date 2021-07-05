const { resolve } = require('path')

// 默认端口号
const port = process.env.npm_config_port
    // 默认域名
const domain = 'http://localhost'
    // 默认标题
const title = 'This is my first Document by Vite-Doc-Creator'

const outerPath = {
    rootPath: resolve(__dirname, '../../../'),
    srcPath: resolve(__dirname, '../../../src'),
    htmlPath: resolve(__dirname, '../../../src/html/'),
    jsPath: resolve(__dirname, '../../../src/js'),
    cssPath: resolve(__dirname, '../../../src/css/'),
    mdPath: resolve(__dirname, '../../../workspace')
}

const innerDir = {
    rootDir: resolve(__dirname, '../temp_files'),
    htmlDir: resolve(__dirname, '../temp_files/html/'),
    cssDir: resolve(__dirname, '../temp_files/css/'),
    jsDir: resolve(__dirname, '../temp_files/js/')
}

const regexp = {
    reg_ulContent: /<ul class=\"menu-list\">([\S\s]*?)<\/ul>/,
    reg_titleContent: /<title>([\s\S]*?)<\/title>/,
    reg_headerTitleContent: /<h1 class=\"header-title\">([\s\S]*?)<\/h1>/,
    reg_iframeContent: /<div class=\"iframe-page">([\s\S]*?)<\/div>/,
    reg_mdStr: /\{\{(.+?)\}\}/
}

module.exports = {
    port,
    domain,
    title,
    outerPath,
    innerDir,
    regexp
}