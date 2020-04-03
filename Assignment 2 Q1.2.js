Sorting = (arr) => {
    var n = arr.length - 1;
    var x = arr;
const swaping = arr.reduce(function(item){
        for(var i=0;i<n;i++)
        {
            if(x[i] < x[i+1])
            {
                var temp = x[i]
                x[i] = x[i+1]
                x[i+1] = temp
            }
        }
        n--;
    return x;
    })
    console.log(swaping)
}

Sorting([10,8,9,5,90])