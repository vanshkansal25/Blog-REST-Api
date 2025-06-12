class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something Went Wrong",
        errors = [], // array of errors
        stack = "" //this represents error stack if any 
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors


    }
}

export {ApiError}