var saveForLater=function(name)
{
    return function()
    {
        return name;
    }
}

var executeLater=function(execute)
{
    return execute;
}

exports.saveForLater=saveForLater;
exports.executeLater=executeLater;