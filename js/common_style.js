//common display rules

//body
document.querySelector("body").style.background = "#2E2E2E";

//main-wrapper and general content style
document.querySelector("div.container-fluid").style.cssText = 
"overflow: hidden; margin: 0; padding: 15px; font-family: 'Georama', sans-serif";

    //header style
    document.querySelector("header").style.cssText = 
    "border-bottom: solid #E78B06; margin-bottom: 35px; padding-bottom: 0px";

        //logo icon size and margins
        document.getElementById("nav__logo-icon").style.cssText =
        "width: 1.5 rem; height: 1.5rem; margin-bottom: 10px"

        document.getElementById("nav__logo-link").style.cssText =
        "color: #8F5BFE; font-weight: bold";

        let navLinks = document.getElementsByClassName("nav-link");
            for(i of navLinks){
                i.style.color="#E78B06";
            };

    //intro style
    document.getElementById("intro__jumbotron").style.cssText =
    "max-width: 550px; padding: 25px 15px 25px 15px; background: linear-gradient(180deg, rgba(231,139,6,0.9) 14%, rgba(143,91,254,0.8) 100%); font-size: 0.9rem; color: #ffffff";
        
        let heading1 = document.getElementsByTagName("h1");
            for(i of heading1){
                i.style.cssText="font-size: 1.2rem; font-weight: bold; margin-top: 10px;"
            };

    //footer style
    document.querySelector("footer").style.cssText = 
    "border-top: solid #8F5BFE; margin-top: 15px; padding-top: 20px; margin-bottom: 0px";
        
        let footer = document.querySelector('footer');
            let footerLinks = footer.querySelectorAll('a');
                for(let i=0;i<footerLinks.length;i++){
                    footerLinks[i].style.color="#fff";
                };

//end of common display rules
