'use strict'

const expres = require('express')
const parser = require('ua-parser-js')



const app = expres();
const port = 3000;

app.get('/',(req,res)=>{
    const {browser} = parser(req.headers['user-agent'])
    res.status(200).send(`mi-super-${browser.name}`)
    //console.log(req.headers['user-agent'])
})


app.listen(port,()=>console.log(`app running in port ${port}`))

// {
//     connection: 'localconnection:3002',
//     connection: 'keep-alive',
//     'cache-control': 'max-age=0',
//     'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
//     'sec-ch-ua-mobile': '?0',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//     'sec-fetch-site': 'none',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-user': '?1',
//     'sec-fetch-dest': 'document',
//     'accept-encoding': 'gzip, deflate, br',
//     'accept-language': 'es-419,es;q=0.9,en;q=0.8,gl;q=0.7'
//   }
  

// // {
//     "ua":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0",
//         "browser":{
//             "browser":"Firefox",
//             "version":"89.0",
//             "major":"89"},
//         "engine":{
//             "browser":"Gecko",
//             "version":"89.0"},
//         "os":{
//             "browser":"Windows",
//             "version":"10"},
//         "device":{},
//         "cpu":{
//             "architecture":"amd64"}
//         }