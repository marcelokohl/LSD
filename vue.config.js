// const path = require('path')
// module.exports = {
//   chainWebpack: (config) => {
//     config
//       .module
//       .rule('scss')
//       .use('sass-resources-loader')
//       .loader('sass-resources-loader')
//       .options({
//         resources: [
//           path.resolve('./src/assets/_variables.scss'),
//         ]
//       })
//   }
// }

// module.exports = {
//     devServer: {
//       proxy: {
//         '/api': {
//           target: 'https://lsd-game.herokuapp.com/api',
//           ws: true,
//           changeOrigin: true
//         },
//         '/external': {
//           target: 'https://lsd-game.herokuapp.com',
//           changeOrigin: true
//         }
//       }
//     }
//   }

