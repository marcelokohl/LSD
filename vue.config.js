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

// const express = require('express');
//
// module.exports = {
//   devServer: {
//     proxy: null, // string | Object
//     before: app => {
//       // the app is the instance of the express app
//       // app.use((req, res, next) => {
//       //   res.setHeader('X-Frame-Options', 'allow-from http://localhost')
//       //   next()
//       // })
//       app.use((req, res, next) => {
//         res.append('X-Frame-Options', 'allow-from http://localhost')
//
//         // Or it's also aliased as
//         // res.header('X-Frame-Options', 'ALLOW-FROM https://www.messenger.com/')
//         // res.header('X-Frame-Options', 'ALLOW-FROM https://www.facebook.com/')
//
//         // Or using append if you already have headers set
//         // res.append('X-Frame-Options', 'ALLOW-FROM https://www.messenger.com/')
//         // res.append('X-Frame-Options', 'ALLOW-FROM https://www.facebook.com/')
//
//         next()
//       })
//     },
//   },
// };


// app.use((req, res, next) => {
//   res.setHeader('X-Frame-Options', 'ALLOW-FROM http://localhost')
//
//   next()
// })
