var sum=function(arr)
{
    var total=0;
    for(var i=0;i<arr.length;i++)
    {
        total+=arr[i];
    }
    return total;
}

 var odds=function(arr)
{ 
    var result=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2 !== 0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}

  var find=function(arr,match)
{
    var result;
    for(var i=0;i<arr.length;i++)
    {
        result = match(arr[i]);
        if(result)
        {
            return arr[i];
        }
    }
} 
exports.sum=sum;
exports.odds=odds;
exports.find=find;