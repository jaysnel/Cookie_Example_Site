	//Setting The Value Of The TSI Cookie
    var this_cookies_value = "_j_s_04/25/2019";

    //Checks page on load to see if this_cookies_value already exists
    function checkForOurCookiesValue() {
    var allTheCookies = document.cookie;

    console.log(allTheCookies);

    if(allTheCookies.includes(this_cookies_value)) {
        jQuery(".exampleSection").css("opacity",1);
    } else {
        jQuery(".exampleSection").css("opacity",0);
    };

    }
    checkForOurCookiesValue();


    //If cookie does not exist, this script will run once user agrees
    function createCookie(name,value,days) {

    if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
       }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
    return true;
    }
    //Creating the cookie
    jQuery(".setCookieButton a").on("click", function() {
        createCookie("_my_domain_", this_cookies_value, 1);
        jQuery(".exampleSection").css("opacity",1);
        jQuery(".button1").css("opacity",0);
          console.log("Cookie Set");
    });