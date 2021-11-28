//common display rules

//body
const body = document.querySelector("body");
body.style.cssText = 
"font-family: 'Georama', sans-serif; background: #2E2E2E;";

//main-wrapper and general content style
const mWrapper = document.querySelector("div.container-fluid");
mWrapper.style.cssText = 
"overflow: hidden; margin: 0; padding: 15px;";

    //header style
    const header = document.querySelector("header");
    header.style.cssText = 
    "border-bottom: solid #E78B06; margin-bottom: 35px; padding-bottom: 0px";

        //logo icon size and margins
        const logoIcon = document.getElementById("nav__logo-icon");
        logoIcon.style.cssText =
        "width: 43px; height: 40px; margin-bottom: 10px";

        const logoLink = document.getElementById("nav__logo-link");
        logoLink.style.cssText =
        "color: #8F5BFE; font-weight: bold";

        const navLinks = document.getElementsByClassName("nav-link");
            for(i of navLinks){
                i.style.color="#E78B06";
            };
        
        const cartBadge = document.getElementById("numProdsInCart");
        cartBadge.style.cssText = "font-size: xx-small";

    //intro style
    const jumbotron = document.getElementById("intro__jumbotron");
    jumbotron.style.cssText =
    "max-width: 550px; padding: 25px 15px 25px 15px; background: linear-gradient(-199deg, rgba(231,139,6,0.9) -20%, rgba(143,91,254,0.8) 100%); font-size: 1.2rem; color: #ffffff";
        
        const heading1 = document.getElementsByTagName("h1");
            for(i of heading1){
                i.style.cssText=
                "font-size: 2rem; font-weight: bold; margin-top: 10px;"
            };

    
    //footer style
    const footer = document.querySelector("footer");
    footer.style.cssText = 
    "border-top: solid #8F5BFE; margin-top: 15px; padding-top: 20px; margin-bottom: 0px";
        
            const footerLinks = footer.querySelectorAll('a');
                for(let i=0;i<footerLinks.length;i++){
                    footerLinks[i].style.color="#fff";
                };

//end of common display rules
