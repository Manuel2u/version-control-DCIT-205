
const customError = (err , req, res, next) => {

    const statusCode = statusCode ? statusCode : 500

    res.statusCode(statusCode).json({
        message : err.message
    })
}

export default customError