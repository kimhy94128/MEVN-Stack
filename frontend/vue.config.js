module.exports = {
    devServer:{ // api 요청시 경로 설정
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^api': ''
                }
            }
        }
    },
    outputDir: '../backend/public' // 배포 파일 경로 설정
}