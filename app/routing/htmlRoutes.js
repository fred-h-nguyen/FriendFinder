//html routes 
function html(app,path) {
    app.get('/', function (req, res) {
        //console.log(path.join(__dirname,'../public/home.html'))
        res.sendFile(path.join(__dirname, '../public/home.html'))
    })

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    })
}

module.exports = html;