


 function fun(event){
    event.preventDefault();
    document.getElementById("answer").value = "";
    let passlength = document.getElementById("lengtInput").value;

const includeUpperCase = document.getElementById("upper").checked;
const includeLowerCase = document.getElementById("lower").checked;
const includeSymbol = document.getElementById("symbol").checked;
const includeNumbers = document.getElementById("number").checked;

    const pass =  generatePass(passlength ,includeUpperCase ,includeLowerCase ,
                            includeSymbol ,includeNumbers);

    
    const ans = document.getElementById("answer");
    
    if (pass === undefined) {
        if (passlength < 5) {
            ans.textContent = `Attention: Length of pass should be at least 5.`;
        } else {
            ans.textContent = `Attention: Select at least 1 Attribute.`;
        }
    } else {
        ans.textContent = `Generated Password is: ${pass}`;
    }

     
}




function generatePass(length ,includeUpperCase ,includeLowerCase ,includeSymbol ,includeNumbers){
            const lowercase = "abcdefghijklmnopqrstuvwxyz";
            const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
            const numbers = "0123456789";

            let pass = "";
            let allowedchars = "";

            allowedchars += includeLowerCase ? lowercase : "";
            allowedchars += includeUpperCase ? uppercase : "";
            allowedchars += includeSymbol ? symbol : "";
            allowedchars += includeNumbers ? numbers : "";

            if(length < 5){
                
               return;
            }
            if(allowedchars.length === 0){
                return;
            }

            for(let i = 0; i < length; i++){
                const index = Math.floor(Math.random() * allowedchars.length);
                pass += allowedchars[index];
            }
            return pass;

    }


    




