Sorting = (arr) => {
    var swapp;
    var n = arr.length - 1;
    var x = arr;
    do{
        swapp = false;
        for(var i=0;i<n;i++)
        {
            if(x[i] < x[i+1])
            {
                var temp = x[i]
                x[i] = x[i+1]
                x[i+1] = temp
                swapp = true
            }
        }
        n--;
    } while (swapp);
    return x;

}

console.log(Sorting([1,4,3,2]))