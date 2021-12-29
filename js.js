var identity = [];
var lang = "Poland";
PreGenerate();


function PreGenerate()
{
    let url = "https://api.secureleadsnow.com/language/" + lang
    fetch(url).then(
        function(response) {
        return response.json();
      })
      .then(function(data) {
        Show(data);
      })
      .catch(function() {
        
      });


}
function Generate()
{
    check();
    let url = "https://api.secureleadsnow.com/language/" + lang
    fetch(url).then(
        function(response) {
        return response.json();
      })
      .then(function(data) {
        Show(data);
      })
      .catch(function() {
        
      });
}



function Show(data)
{
    console.log(data);
    identity = data;
    let random = Random();
    var image = document.getElementById("imge");
    var Name = document.getElementById("Name");
    var Surname = document.getElementById("Surname");
    let person = {
        img: identity[random].photo,
        name:identity[random].name,
        surname:identity[random].surname,
        email:identity[random].email,
        password:identity[random].password
    }
    image.src = person.img;
    Name.innerHTML = "Name: " + person.name + "<br> Surname: " + person.surname + "<br> Email: " + person.email.replace("example.com", "gmail.com") + "<br> Password:" + person.password;
    console.log(lang)

}


function Random()
{
    return Math.floor(Math.random() * 100);
}

function ChangeLanguage(country)
{
lang = country.toString();
}

function check()
{
  
    var sb = document.querySelector('#framework')
  
        ChangeLanguage(sb.value);
        
    };

