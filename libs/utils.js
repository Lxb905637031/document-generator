const { readFileSync } = require('fs')
const {
    domain,
    port
} = require('../config')

// 文件读取
function readFile(path) {
    return readFileSync(path, 'utf-8')
}

// 创建菜单项模板
function createMenuItem(filename, userDomain, userPort, isActive) {
    return `
        <li class="menu-item${ isActive ? ' active' : ''}">
            <a href="${_formatBaseUrl(userDomain, userPort)}/src/html/${filename}" target="myFrame">${filename.replace('.html', '')}</a>
        </li>
    `
}

// 创建iframe
function createIframe(filename, userDomain, userPort) {
    return `
        <iframe src="${_formatBaseUrl(userDomain, userPort)}/src/html/${filename}" name="myFrame"/>
    `
}

// 组合baseURL
function _formatBaseUrl(userDomain, userPort) {
    userPort = Number(userPort)

    if (userDomain && userPort) {
        return `${userDomain}:${userPort}`
    } else if (userDomain && !userPort) {
        return `${userDomain}`
    } else if (!userDomain && userPort) {
        return `${domain}:${userPort}`
    } else if (!userDomain && !userPort) {
        return `${domain}:${port}`
    } else {
        return `${domain}:${port}`
    }
}

function replaceHtml(regexp, html, content) {
    return html.replace(html.match(regexp)[1], content)
}

module.exports = {
    readFile,
    createIframe,
    replaceHtml,
    createMenuItem
}