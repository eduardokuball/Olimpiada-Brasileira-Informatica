function decrypt(string){   
    let message = string;
    let result = "";
    for(let i = 0; i < message.length; i++){
        if(message[i] == 'p'){
            if(message[i + 1] == 'p'){
                result += 'p'
            }
        } else {
            result += message[i];
        }
    } 
    return result.replaceAll('pp', 'p');
};

const string = prompt();

console.log(decrypt(string));