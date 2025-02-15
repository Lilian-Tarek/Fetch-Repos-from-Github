// main variables
let input = document.querySelector(".get-repos input");
let getbutton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");
getbutton.onclick = function ()
{
 getRepos();    
    }
// get repos-fn
function getRepos() {
    if (input.value=="")
    {
        // alert("Value Can't Be Empty");
        reposData.innerHTML="<span>Please Write Github Username.</span>";
    } else
    {
        fetch(`https://api.github.com/users/${input.value}/repos`)
            
            .then((response) => { return response.json();})
            
            .then((data) => {
              
                reposData.innerHTML = "";
                // loop on repos
                data.forEach(function (onedata)
                {
                    let maindiv = document.createElement("div");
                    let text=document.createElement("div"); 
                    let reponame = document.createTextNode(onedata.name);
                    text.appendChild(reponame);
                    maindiv.appendChild(text);
// create repo url
let url=document.createElement("a");
                    // create repo url text
                    let urltext = document.createTextNode("Visit");
                    url.appendChild(urltext);
                    // add href
                    url.href = onedata.html_url;
                    url.setAttribute("target", "_blank");
                    // maindiv.appendChild(url);
                    let starsandvisit=document.createElement("div");
                    // stars
                    stars = document.createElement("span");	
                    stars.appendChild(document.createTextNode("Stars: " + onedata.stargazers_count));
                    starsandvisit.appendChild(stars);
                    starsandvisit.appendChild(url);
                     maindiv.appendChild(starsandvisit);
                    // maindiv.appendChild(stars);
// add class to one div(main div)
                    maindiv.className = "repo-box";
                    reposData.appendChild(maindiv);
                
})

          });
        }
}
