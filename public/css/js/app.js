fetch("http:URL",(response)=>{
    response.json().then((data)=>{
        if( data.error)
        {
            console.log(data.error);
        }
        else
        {
            console.log(data);
        }
    })
})