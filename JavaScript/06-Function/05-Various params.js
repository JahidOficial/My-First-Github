// for a given string tell me whether it has even number of characters or not

function evenSizeString(str){
    const size = str.length;
    // console.log(str, size);

    if(size % 2 === 0){
        console.log(`${str} -> Even size string`);
    }else{
        console.log(`${str} -> Odd size string`);
    }
    
}

evenSizeString("hello world");
evenSizeString("jahid");



