const multer = require('multer')

module.exports = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname.replace(/ /g, '_'))
    }
})
