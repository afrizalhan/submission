document.addEventListener("DOMContentLoaded", function() {
    //activate sidebar nav
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();
    var page = window.location.hash.substr(1);
    if (page == "") page = "home";
    loadPage(page);

    function loadNav() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4) {
                if (this.status !=200) return;

                //muat daftar tautan menu
                document.querySelectorAll(".topnav, .sidenav").forEach(function (elm) {
                    elm.innerHTML = xhttp.responseText;
                });
                //daftarkan event listener untuk setiap link menu
                document.querySelectorAll(".sidenav a, .topnav a").forEach(function (elm) {
                    elm.addEventListener("click", function(event) {
                        //tutup sidenav
                        var sidenav = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sidenav).close();

                        //muat konten halaman yang dipanggil
                        page = event.target.getAttribute("href").substr(1);
                       
                        loadPage(page);
                    });
                });
            }
        };
        xhttp.open("GET", "nav.html", true);
        xhttp.send();
    }

    function loadPage(page) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                var content = document.querySelector("#body-content");
                if (page === "klasemen") {
                    loadApi();
                } else if (page === "tops") {
                    loadApis();
                } else if(page === "saved"){
                    loadTeams();
                    loadUpcomeSchedule();
                    loadPastSchedule();
                }
                if (this.status == 200) {
                    content.innerHTML = xhttp.responseText;
                    if(page === "saved"){
                        function pos() {
                            var col = document.querySelectorAll('.collapsible');
                            var instances = M.Collapsible.init(col, {accordion : true});
                        }
                        pos();
                    }
                } else if(this.status == 404){
                    content.innerHTML = "<p>Halaman Tidak Ditemukan</p>";
                } else {
                    content.innerHTML = "<p>Halaman Tidak dapat diakses.</p>"
                }
            }
        };
        xhttp.open("GET", "pages/" + page + ".html", true);
        xhttp.send();
    };
});