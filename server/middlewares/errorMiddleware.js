const errorMiddlleWare = (err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    const extraDetails = err.extraDetails || "Error on server";

    return res.status(status).json({message: message});
}

module.exports = errorMiddlleWare;