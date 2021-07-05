const {
    initFolders,
    initFiles,
    initWathcers
} = require('./init')

class ViteDocCreator {
    constructor(options) {
        this.options = {
            // 页面标题
            title: undefined,
            // 端口号
            port: 0,
            // 域名配置
            domain: undefined
        }

        if (options) {
            Object.assign(this.options, options)
        }
        // 执行工具初始化函数
        this.initialize()
    }


    initialize() {
        // 初始化项目文件夹
        initFolders(this.options)
            // 初始化项目文件
        initFiles(this.options)
            // 初始化监听html与md文件及文件夹变化
        initWathcers(this.options)
    }
}

module.exports = ViteDocCreator