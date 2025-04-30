function reqListener(){
    console.log(this.responseText)
}

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener)
req.open("GET", "https://api.artic.edu/api/v1/artworks?limit=1")
req.onreadystatechange = function ()
{
    if (req.readyState == 4){
        const req = new XMLHttpRequest();
        req.addEventListener("load", reqListener)
        req.open("GET", "https://date.nager.at/api/v3/publicholidays/2025/RU")
        req.onreadystatechange = function ()
        {
            if (req.readyState == 4){
                const req = new XMLHttpRequest();
                req.addEventListener("load", reqListener)
                req.open("GET", "https://api.chucknorris.io/jokes/random")
                req.onreadystatechange = function ()
                {
                    if (req.readyState == 4){
                        const req = new XMLHttpRequest();
                        req.addEventListener("load", reqListener)
                        req.open("GET", "https://techy-api.vercel.app/api/json")
                        req.send()
                    }
                }
                req.send()
            }
        }
        req.send()
    }
}
req.send()

function request(url, method, callback){
    const req = XMLHttpRequest();
    req.addEventListener("load", callback);
    req.open(method, url);
    req.send()
}
function reqChainListener(url, method, callback){
    console.log(this.responseText)
    if (this.readyState == 4){
        request(url, method, callback)
    }
}

//request(
//    "https://api.artic.edu/api/v1/artworks?limit=1",
//    "GET",
//    () => request(
//        "GET",
//        "https://date.nager.at/api/v3/publicholidays/2025/RU",
//        () => request(
//            "GET",
//            "https://api.chucknorris.io/jokes/random",
//            () => request(
//                "GET",
//                "https://techy-api.vercel.app/api/json",
//                reqListener
//            )
//        )
//    )
//)