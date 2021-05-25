!(function($) {
    "use strict";

    // Preloader
    $(window).on("load", function() {
        if ($("#preloader").length) {
            $("#preloader")
                .delay(100)
                .fadeOut("slow", function() {
                    $(this).remove();
                });
        }
    });

    // Hero typed
    if ($(".typed").length) {
        var typed_strings = $(".typed").data("typed-items");
        typed_strings = typed_strings.split(",");
        new Typed(".typed", {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        });
    }

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on("click", ".nav-menu a, .scrollto", function(e) {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top;

                $("html, body").animate({
                        scrollTop: scrollto,
                    },
                    1500,
                    "easeInOutExpo"
                );

                if ($(this).parents(".nav-menu, .mobile-nav").length) {
                    $(".nav-menu .active, .mobile-nav .active").removeClass("active");
                    $(this).closest("li").addClass("active");
                }

                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $(".mobile-nav-toggle i").toggleClass(
                        "icofont-navigation-menu icofont-close"
                    );
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top;
                $("html, body").animate({
                        scrollTop: scrollto,
                    },
                    1500,
                    "easeInOutExpo"
                );
            }
        }
    });

    $(document).on("click", ".mobile-nav-toggle", function(e) {
        $("body").toggleClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
        );
    });

    $(document).click(function(e) {
        var container = $(".mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($("body").hasClass("mobile-nav-active")) {
                $("body").removeClass("mobile-nav-active");
                $(".mobile-nav-toggle i").toggleClass(
                    "icofont-navigation-menu icofont-close"
                );
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $("section");
    var main_nav = $(".nav-menu, #mobile-nav");

    $(window).on("scroll", function() {
        var cur_pos = $(this).scrollTop() + 300;

        nav_sections.each(function() {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find("li").removeClass("active");
                }
                main_nav
                    .find('a[href="#' + $(this).attr("id") + '"]')
                    .parent("li")
                    .addClass("active");
            }
            if (cur_pos < 200) {
                $(".nav-menu ul:first li:first").addClass("active");
            }
        });
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function() {
        $("html, body").animate({
                scrollTop: 0,
            },
            1500,
            "easeInOutExpo"
        );
        return false;
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000,
    });

    // Skills section
    $(".skills-content").waypoint(
        function() {
            $(".progress .progress-bar").each(function() {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
        }, {
            offset: "80%",
        }
    );

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }

    // Porfolio isotope and filter
    $(window).on("load", function() {
        var portfolioIsotope = $(".portfolio-container").isotope({
            itemSelector: ".portfolio-item",
        });

        $("#portfolio-flters li").on("click", function() {
            $("#portfolio-flters li").removeClass("filter-active");
            $(this).addClass("filter-active");

            portfolioIsotope.isotope({
                filter: $(this).data("filter"),
            });
            aos_init();
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(".venobox").venobox({
            share: false,
        });

        // Initiate aos_init() function
        aos_init();
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1,
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1,
    });
})(jQuery);

jQuery(document).ready(function($) {
    /*
      PARTICLES
      -------------------*/
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#FF7F50",
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 3,
                    color: "#FF7F50",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#FF7F50",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });

    /*
      OWL CAROUSEL
      -------------------*/
    $("#owl-events").owlCarousel({
        margin: 0,
        dots: false,
        nav: true,
        navText: [],
        loop: true,
        // autoPlay: false,
        // autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});

function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou >= 12) {
        pe = "PM";
    }
    if (hou == 0) {
        hou = 12;
    }
    if (hou > 12) {
        hou = hou - 12;
    }

    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    };

    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var ids = ["dayname", "month", "daynum", "hour", "minutes", "period"];
    var values = [
        week[dname],
        months[mo],
        dnum.pad(2),
        hou.pad(2),
        min.pad(2),
        pe,
    ];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

$(document).ready(function() {
    $("#resumeDownloadButton").click(function(e) {
        e.preventDefault();
        window.location.href = "assets/resume/Shohag_Resume.pdf";
    });
});

$("#crmPrevBtn").click(function() {
    $("#exampleModalLongTitle").text("CRM Software - Node.JS(MVC)");
    $("#modalPic-1").attr("src", "../assets/img/projects/crm-nodejs/1.JPG");
    $("#modalPic-2").attr("src", "../assets/img/projects/crm-nodejs/2.JPG");
    $("#modalPic-3").attr("src", "../assets/img/projects/crm-nodejs/3.JPG");
    $("#modalPic-4").attr("src", "../assets/img/projects/crm-nodejs/4.JPG");
    $("#modalPic-5").attr("src", "../assets/img/projects/crm-nodejs/5.JPG");
    $("#modalPic-6").attr("src", "../assets/img/projects/crm-nodejs/6.JPG");
    $("#modalPic-7").attr("src", "../assets/img/projects/crm-nodejs/7.JPG");
    $("#modalPic-8").attr("src", "../assets/img/projects/crm-nodejs/8.JPG");
    $("#modalPic-9").attr("src", "../assets/img/projects/crm-nodejs/9.JPG");
    $("#modalPic-10").attr("src", "../assets/img/projects/crm-nodejs/10.JPG");
    $("#modalPic-11").attr("src", "../assets/img/projects/crm-nodejs/11.JPG");
    $("#modalPic-12").attr("src", "../assets/img/projects/crm-nodejs/12.JPG");
    $("#modalPic-13").attr("src", "../assets/img/projects/crm-nodejs/13.JPG");
    $("#modalPic-14").attr("src", "../assets/img/projects/crm-nodejs/14.JPG");
    $("#modalPic-15").attr("src", "../assets/img/projects/crm-nodejs/15.JPG");
    $("#modalPic-16").attr("src", "../assets/img/projects/crm-nodejs/16.JPG");
    $("#modalPic-17").attr("src", "../assets/img/projects/crm-nodejs/17.JPG");
    for (var i = 18; i < 26; i++) {
        $("#modalPic-" + i).attr("src", "");
    }
    $("#introParagraph").text(
        "This is a web based application that offers small companies and business organizations to manage the cusomer relationship using this software that acts as a SaaS(Software as a Service) application.There are 4 types of users for this system  .1.Company Managers .2.Clients .3.System Admin .4.Marketing Agents.Basically the system is subscription based.Managers from different companies or small business organizations can subscribe to the application to store their client details, schedules, proposals, calls, appointments, deals, chat as well.Again, the clients can be added to system by the managers themselves to login to the system for checking various offers form the company, deals, proposals and chat with the company managers.So the system acts as a common platform to manage the clients for the managers and the clients to interact with the managers.Again, A system admin can get all the report of the current situation of the system including number of organizations subscriptions, how many of them are active and inactive, transaction history.A report of both pdf and excel formt could be downloaded by the admin.Admin also holds the power to suspend any of the organizations for not paying subscription fees.There is a marketing agent in the system that works for the e - marketing.They can get all the clients details and email addresses for sending promotional offers, deals and proposals through social media(email).They get hired by the system admin and get paid after a certain period.Thus the application acts as a E - Marketing appliaction."
    );
    $("#learnedParagraph").text(
        "This project helped me get myself introduced to web frameworks like Node.Js, Express JS mainly. I got to learn about new technologies to rapid develop a web application. Some key points that I learned : "
    );
    $("#learnedItems").html("");
    $("#learnedItems").html(
        "<li>Learned Node.Js, Express JS</li><li>Learned to use NPM package manager.</li><li>Used MVC software architecture.</li><li>Rapid development of lightweight application that gets the Asynchronous benefit of the Node.Js to serve multiple users faster in parallel requests.</li> <li>Serving SaaS (Software as a Service) application.</li> <li>Used more Ajax and JSON for the project requirement.</li><li>Rapid application development using front end framework including Bootstrap 4, library like jQuery as well as backend framework like Node.Js and Express Js.</li><li>Report generation using server data to present them visually on the dashboard.</li>"
    );
    $("#toolsParagraph").text(
        "Technologies that I used to develop the application : "
    );
    $("#techItems").html("");
    $("#techItems").html(
        "<li>Node.Js</li><li>Express Js</li><li>MySQL</li><li>JavaScript ES6</li><li>Ajax</li><li>jQuery</li><li>Bootstrap</li><li>HTML</li><li>CSS</li>"
    );
});
$("#crmLaravelPrevBtn").click(function() {
    $("#exampleModalLongTitle").text("CRM Software - Laravel(MVC)");
    $("#modalPic-1").attr("src", "../assets/img/projects/crm-laravel/1.JPG");
    $("#modalPic-2").attr("src", "../assets/img/projects/crm-laravel/2.JPG");
    $("#modalPic-3").attr("src", "../assets/img/projects/crm-laravel/3.JPG");
    $("#modalPic-4").attr("src", "../assets/img/projects/crm-laravel/4.JPG");
    $("#modalPic-5").attr("src", "../assets/img/projects/crm-laravel/5.JPG");
    $("#modalPic-6").attr("src", "../assets/img/projects/crm-laravel/6.JPG");
    $("#modalPic-7").attr("src", "../assets/img/projects/crm-laravel/7.JPG");
    $("#modalPic-8").attr("src", "../assets/img/projects/crm-laravel/8.JPG");
    $("#modalPic-9").attr("src", "../assets/img/projects/crm-laravel/9.JPG");
    $("#modalPic-10").attr("src", "../assets/img/projects/crm-laravel/10.JPG");
    $("#modalPic-11").attr("src", "../assets/img/projects/crm-laravel/11.JPG");
    $("#modalPic-12").attr("src", "../assets/img/projects/crm-laravel/12.JPG");
    $("#modalPic-13").attr("src", "../assets/img/projects/crm-laravel/13.JPG");
    $("#modalPic-14").attr("src", "../assets/img/projects/crm-laravel/14.JPG");
    $("#modalPic-15").attr("src", "../assets/img/projects/crm-laravel/15.JPG");
    $("#modalPic-16").attr("src", "../assets/img/projects/crm-laravel/16.JPG");
    $("#modalPic-17").attr("src", "../assets/img/projects/crm-laravel/17.JPG");
    $("#modalPic-18").attr("src", "../assets/img/projects/crm-laravel/18.JPG");
    $("#modalPic-19").attr("src", "../assets/img/projects/crm-laravel/19.JPG");
    $("#modalPic-20").attr("src", "../assets/img/projects/crm-laravel/20.JPG");
    $("#modalPic-21").attr("src", "../assets/img/projects/crm-laravel/21.JPG");
    $("#modalPic-22").attr("src", "../assets/img/projects/crm-laravel/22.JPG");
    $("#modalPic-23").attr("src", "../assets/img/projects/crm-laravel/23.JPG");
    $("#modalPic-24").attr("src", "../assets/img/projects/crm-laravel/24.JPG");
    $("#modalPic-25").attr("src", "../assets/img/projects/crm-laravel/25.JPG");
    $("#introParagraph").text(
        "This is the extensive version of the CRM Software that I built using Node.JS. This is based on Laravel with the same project requirements. In this project keeping all the requirements same I just used Laravel web framework to build it. Not only that I also integrated this Laravel application as cient application with the Node.Js application as server side application throught API.This is a web based application that offers small companies and business organizations to manage the cusomer relationship using this software that acts as a SaaS(Software as a Service) application.There are 4 types of users for this system  .1.Company Managers .2.Clients .3.System Admin .4.Marketing Agents.Basically the system is subscription based.Managers from different companies or small business organizations can subscribe to the application to store their client details, schedules, proposals, calls, appointments, deals, chat as well.Again, the clients can be added to system by the managers themselves to login to the system for checking various offers form the company, deals, proposals and chat with the company managers.So the system acts as a common platform to manage the clients for the managers and the clients to interact with the managers.Again, A system admin can get all the report of the current situation of the system including number of organizations subscriptions, how many of them are active and inactive, transaction history.A report of both pdf and excel formt could be downloaded by the admin.Admin also holds the power to suspend any of the organizations for not paying subscription fees.There is a marketing agent in the system that works for the e - marketing.They can get all the clients details and email addresses for sending promotional offers, deals and proposals through social media(email).They get hired by the system admin and get paid after a certain period.Thus the application acts as a E - Marketing appliaction."
    );
    $("#learnedParagraph").text(
        "This project helped me get myself introduced to web framework Laravel and using it in Object Oriented approach. I got to learn about new technologies to rapid develop a web application using Laravel. I also got to use API to exchange data between Laravel application as client application with the Node.Js application as server application.Some key points that I learned : "
    );
    $("#learnedItems").html("");
    $("#learnedItems").html(
        "<li>Learned Laravel Web Framework</li><li>Used MVC software architecture.</li><li>Rapid development of web application using Laravel using the Object Oriented approach.</li><li>Email Service using SMTP protocol.</li><li>Chatting feature using Ajax and JSON.</li><li>Use of Microservices and API to fetch data.</li><li>Use of third party libraries for faster work.</li> <li>Serving SaaS (Software as a Service) application.</li> <li>Used more Ajax and JSON for the project requirement.</li><li>Rapid application development using front end framework including Bootstrap 4, library like jQuery as well as backend framework like Laravel, Node.Js and Express Js.</li><li>Report generation using server data from Node.Js application using API to present them visually on the dashboard using Google Chart API.</li>"
    );
    $("#toolsParagraph").text(
        "Technologies that I used to develop the application : "
    );
    $("#techItems").html("");
    $("#techItems").html(
        "<li>Laravel</li><li>Node.Js</li><li>Express Js</li><li>MySQL</li><li>PHP</li><li>JavaScript ES6</li><li>Ajax</li><li>jQuery</li><li>Bootstrap</li><li>HTML</li><li>CSS</li><li>Microservices</li><li>Google Chart API</li><li>APIs</li>"
    );
});
$("#cinePrevBtn").click(function() {
    $("#exampleModalLongTitle").text(
        "Online Theatre Booking System - Cine Carnival"
    );
    $("#modalPic-1").attr("src", "../assets/img/projects/cinecarnival/1.JPG");
    $("#modalPic-2").attr("src", "../assets/img/projects/cinecarnival/2.JPG");
    $("#modalPic-3").attr("src", "../assets/img/projects/cinecarnival/3.JPG");
    $("#modalPic-4").attr("src", "../assets/img/projects/cinecarnival/4.JPG");
    $("#modalPic-5").attr("src", "../assets/img/projects/cinecarnival/5.JPG");
    $("#modalPic-6").attr("src", "../assets/img/projects/cinecarnival/6.JPG");
    $("#modalPic-7").attr("src", "../assets/img/projects/cinecarnival/7.JPG");
    $("#modalPic-8").attr("src", "../assets/img/projects/cinecarnival/8.JPG");
    $("#modalPic-9").attr("src", "../assets/img/projects/cinecarnival/9.JPG");
    $("#modalPic-10").attr("src", "../assets/img/projects/cinecarnival/10.JPG");
    $("#modalPic-11").attr("src", "../assets/img/projects/cinecarnival/11.JPG");
    $("#modalPic-12").attr("src", "../assets/img/projects/cinecarnival/12.JPG");
    $("#modalPic-13").attr("src", "../assets/img/projects/cinecarnival/13.JPG");
    $("#modalPic-14").attr("src", "../assets/img/projects/cinecarnival/14.JPG");
    $("#modalPic-15").attr("src", "../assets/img/projects/cinecarnival/15.JPG");
    $("#modalPic-16").attr("src", "../assets/img/projects/cinecarnival/16.JPG");
    $("#modalPic-17").attr("src", "../assets/img/projects/cinecarnival/17.JPG");
    $("#modalPic-18").attr("src", "../assets/img/projects/cinecarnival/18.JPG");
    $("#modalPic-19").attr("src", "../assets/img/projects/cinecarnival/19.JPG");
    for (var i = 20; i < 26; i++) {
        $("#modalPic-" + i).attr("src", "");
    }
    $("#introParagraph").text(
        "This is the first web application that I built to learn web development using PHP as the backend language. This application is a cinema theatre ticket booking application that shows users now showing, upcoming, exclusive movies. It also allow users to buy tickets based on availability of the tickets and the maximum ticket purchase count for a day. The maximum ticket purchase count for a day of a particular user is 5 tickets. There are also prices of tickets that vary according to the Hall types including VIP, Premimum, Regular halls. There is also searching and soring options for all the movies so the users can get to know or find any movie in a easier way. A rating system is also given to each movies that counts the rating of each movies from subscribed of unsubscribed users. Trailers are also included with each movies in the movie details page. Again, a poll is given to count votes for exclusive movies that people are excited to watch. Poll system is also given for different situations. To purchase movie tickets a user needs to have subscription. They need to sign up. Upon forgetting password they can verify their email and get verification code on their email address to reset password. Users also get to review their ticket purchase history and get discount based on previous purchases and print their tickets on purchase."
    );
    $("#learnedParagraph").text(
        "As this is the first web application that I developed to get myself started in web development I learned basics that needed for web developemt. Here are some key points that I learned : "
    );
    $("#learnedItems").html("");
    $("#learnedItems").html(
        "<li>Learned front end basics with HTML, CSS to mark up the web pages, align, style the components.</li><li>Learned Bootstrap framework for faster alignment and styling the pages and use its built in components.</li><li>Used Vanilla JavaScript for DOM manipulation, event handling, effects, form validation, data exchange in front end.</li><li>Used PHP as the server side language to form validate, manage user data, record into database, fetch database data, logical funcitons.</li><li>Got myself introduced to jQuery for DOM manipulation and front end event handling as well as for implementing Ajax.</li><li>Implemented Ajax search using jQuery for the first time to get server data without page reload.</li><li>Used an email API for sending password reset codes to the user email address.</li>"
    );
    $("#toolsParagraph").text(
        "Technologies that I used to develop the application : "
    );
    $("#techItems").html("");
    $("#techItems").html(
        "<li>PHP</li><li>JavaScript</li><li>HTML</li><li>CSS</li><li>Bootstrap</li><li>jQuery</li><li>Ajax</li><li>MySQL</li>"
    );
});
$("#comShopPrevBtn").click(function() {
    $("#exampleModalLongTitle").text("Online Tech Shop");
    $("#modalPic-1").attr("src", "../assets/img/projects/online-tech-shop/1.JPG");
    $("#modalPic-2").attr("src", "../assets/img/projects/online-tech-shop/2.JPG");
    $("#modalPic-3").attr("src", "../assets/img/projects/online-tech-shop/3.JPG");
    $("#modalPic-4").attr("src", "../assets/img/projects/online-tech-shop/4.JPG");
    $("#modalPic-5").attr("src", "../assets/img/projects/online-tech-shop/5.JPG");
    $("#modalPic-6").attr("src", "../assets/img/projects/online-tech-shop/6.JPG");
    $("#modalPic-7").attr("src", "../assets/img/projects/online-tech-shop/7.JPG");
    $("#modalPic-8").attr("src", "../assets/img/projects/online-tech-shop/8.JPG");
    $("#modalPic-9").attr("src", "../assets/img/projects/online-tech-shop/9.JPG");
    $("#modalPic-10").attr("src", "../assets/img/projects/online-tech-shop/10.JPG");
    $("#modalPic-11").attr("src", "../assets/img/projects/online-tech-shop/11.JPG");
    $("#modalPic-12").attr("src", "../assets/img/projects/online-tech-shop/12.JPG");
    $("#modalPic-13").attr("src", "../assets/img/projects/online-tech-shop/13.JPG");
    $("#modalPic-14").attr("src", "../assets/img/projects/online-tech-shop/14.JPG");
    $("#modalPic-15").attr("src", "../assets/img/projects/online-tech-shop/15.JPG");
    $("#modalPic-16").attr("src", "../assets/img/projects/online-tech-shop/16.JPG");
    $("#modalPic-17").attr("src", "../assets/img/projects/online-tech-shop/17.JPG");
    $("#modalPic-18").attr("src", "../assets/img/projects/online-tech-shop/18.JPG");
    for (var i = 15; i < 26; i++) {
        $("#modalPic-" + i).attr("src", "");
    }
    $("#introParagraph").text(
        "A small web application that I built which is inspired from the online computer shops that shows laptops, computer components like SSD, RAM, GPU, CPU etc along with their prices. Each product is listed in the system with navigation and sub navigation to locate to that product. All the details including individual prices, availability, rating, customer reviews are there in the product page. A subscriber can post review for any product. An Admin holds the power to delete the review. There is a search option for all the products. Again a featured product list is also shown at the index page which are newly added to the vendor. Basic sign up and login function is also provided to the system. As the system is incomplete so the product ordering through shopping cart is not implemented."
    );
    $("#learnedParagraph").text("Here are some key points that I learned : ");
    $("#learnedItems").html("");
    $("#learnedItems").html(
        "<li>Prdouct navigation and sub navigation implementation for better user experience and product locating.</li><li>Complex SQL queries to provide better and exact products that the customer wants.</li><li>Managing vendor products in different categories in database.</li><li>Using REST API for user request handling.</li>"
    );
    $("#toolsParagraph").text(
        "Technologies that I used to develop the application : "
    );
    $("#techItems").html("");
    $("#techItems").html(
        "<li>ASP.NET</li><li>Entity Framework</li><li>REST API</li><li>MVC 5</li><li>C#</li><li>Bootstrap</li><li>jQuery</li><li>Ajax</li><li>MSSQL Server</li>"
    );
});
$("#pixBookPrevBtn").click(function() {
    $("#exampleModalLongTitle").text(
        "Photo Sharing and Photographers Booking Application"
    );
    $("#modalPic-1").attr("src", "../assets/img/projects/pixbook/1.JPG");
    $("#modalPic-2").attr("src", "../assets/img/projects/pixbook/2.JPG");
    $("#modalPic-3").attr("src", "../assets/img/projects/pixbook/3.JPG");
    $("#modalPic-4").attr("src", "../assets/img/projects/pixbook/4.JPG");
    $("#modalPic-5").attr("src", "../assets/img/projects/pixbook/5.JPG");
    $("#modalPic-6").attr("src", "../assets/img/projects/pixbook/6.JPG");
    $("#modalPic-7").attr("src", "../assets/img/projects/pixbook/7.JPG");
    $("#modalPic-8").attr("src", "../assets/img/projects/pixbook/8.JPG");
    $("#modalPic-9").attr("src", "../assets/img/projects/pixbook/9.JPG");
    $("#modalPic-10").attr("src", "../assets/img/projects/pixbook/10.JPG");
    $("#modalPic-11").attr("src", "../assets/img/projects/pixbook/11.JPG");
    $("#modalPic-12").attr("src", "../assets/img/projects/pixbook/12.JPG");
    $("#modalPic-13").attr("src", "../assets/img/projects/pixbook/13.JPG");
    $("#modalPic-13").attr("src", "../assets/img/projects/pixbook/14.JPG");
    $("#modalPic-13").attr("src", "../assets/img/projects/pixbook/15.JPG");
    for (var i = 14; i < 26; i++) {
        $("#modalPic-" + i).attr("src", "");
    }
    $("#introParagraph").text(
        "This is a desktop application project is developed using C# and .NET Framework. It is a photographers booking application where users can check photographers portfolio to hire them. An admin manages all the users including photographers.The roles: 1. Users *Sign Up *Sign In *Check Photographers Portfolios *Hire Photographers if Available *Cancel Hire Request if Pending *Get Forgotten Password *Change Password 2. Photogaphers *SIgn Up *Sgn In *Get Forgotten Password *Change Password *Upload Photos to Portfolio *Remove Photos From Portfolio * Update Portfolio * Accept or Reject Hire Request * Check All Requests 3. Admin * Insert, Update and Delete Users and Photographers Information * Change User Status * Manage Hire Requests"
    );
    $("#learnedParagraph").text("Here are some key points that I learned : ");
    $("#learnedItems").html("");
    $("#learnedItems").html(
        "<li>GUI based desktop application development using .NET Framework.</li><li>Working with MSSQL and SQL Server.</li><li>Event Handling with .Net Framework components and form validation.</li><li>Subscription based application and managing individual profiles with their data.</li><li>Managing packages in Visual Studio IDE.</li>"
    );
    $("#toolsParagraph").text(
        "Technologies that I used to develop the application : "
    );
    $("#techItems").html("");
    $("#techItems").html("<li>.C#</li><li>.NET Framework</li><li>MS SQL</li>");
});

$("#perfPrevBtn").click(function() {
    $("#exampleModalLongTitle").text(
        "University Student Performance Management System"
    );
    $("#modalPic-1").attr("src", "../assets/img/projects/performance-mgt/1.JPG");
    $("#modalPic-2").attr("src", "../assets/img/projects/performance-mgt/2.JPG");
    $("#modalPic-3").attr("src", "../assets/img/projects/performance-mgt/3.JPG");
    $("#modalPic-4").attr("src", "../assets/img/projects/performance-mgt/4.JPG");
    $("#modalPic-5").attr("src", "../assets/img/projects/performance-mgt/5.JPG");
    $("#modalPic-6").attr("src", "../assets/img/projects/performance-mgt/6.JPG");
    for (var i = 7; i < 26; i++) {
        $("#modalPic-" + i).attr("src", "");
    }
    $("#introParagraph").text(
        "A desktop application that records per semester term marks to calculate gpa and cgpa of a sutdent for each seemster this application was developed using Java. A univeristy student needs to just insert their subject wise marks for each term of a semester in the system. It will automatically grade the course for that semexter according to the grading poclicy of AIUB. It will also record overall cgpa and show all the genreated report to that student with all the previous performance data. The student can also track on which courses he performed best and worst. The system will also tell the counts of grades the student receieved.It will also show the student how much marks he needs to achieve in a term or semester to earn a particular amount of overall cgpa."
    );
    $("#learnedParagraph").text("Here are some key points that I learned : ");
    $("#learnedItems").html("");
    $("#learnedItems").html(
        "<li>GUI based desktop application development using Java and Swing.</li><li>Working with MySQL.</li><li>Event Handling with Swing components.</li><li>Calculation of grades using Java and inlude them as packages.</li><li>Managing packages in Raw Java codes without any IDE.</li>"
    );
    $("#toolsParagraph").text(
        "Technologies that I used to develop the application : "
    );
    $("#techItems").html("");
    $("#techItems").html(
        "<li>Java</li><li>Swing</li><li>MySQL</li><li>Sublime Text</li>"
    );
});
$('.carousel').carousel({
    interval: 1000 * 3
});