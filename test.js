    String lorem = {ipsum : 1}
    var output = (function (){
            delete lorem.ipsum;
            return lorem.ipsum;
    });

    console.log(output);