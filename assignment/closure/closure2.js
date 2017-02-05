var saveForLater=function()
{
    return function()
    {
        return "MyName";
    }
}

var executeLater=function(execute)
{
    return execute;
}

exports.saveForLater=saveForLater;
exports.executeLater=executeLater;