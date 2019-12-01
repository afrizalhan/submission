// fetch("https://api.football-data.org/v2/competitions/20/standings", {
//     headers:{
//         'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
//     }
// }, res => {
//     return res;
// }).then(res => {
//     console.log(res.json());
// });

var base_url = "https://api.football-data.org/v2/competitions/";

function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        //method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.text));
    } else {
        //mengubah sesuatu menjadi objek agar bisa "di-then-kan"
        return Promise.resolve(response);
    }
}

//blok untuk parsing json menjadi array js
function json(response) {
    return response.json();
}

//blok untuk handle kesalahan di blok catch
function error(error) {
    //parameter error berasal dari Promise.reject()
    console.log("Error : " + error);
}
function loadApi() {
    if ('caches' in window) {
        caches.match(base_url + "2014/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }}).then(function (response) {
            if (response) {
                console.log('Data Loaded From cache');
                    response.json().then(function (data) {
                    console.log(data);
                    var idx = data.standings[0];
                    var table = "";
                    idx.table.forEach(function (team) {
                        table += `<tr>
                                    <td>${team.position}</td>
                                    <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                                    <td>${team.points}</td>
                                    <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                                  </tr>`;
                    });
                    document.getElementById("klas1").innerHTML = table;
                    document.getElementById("nama1").innerHTML = data.competition.name;
                })
                .catch(error);
            }
        })
        .catch(error);
        caches.match("https://api.football-data.org/v2/competitions/2002/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }}).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    var idx = data.standings[0];
                    var table = "";
                    idx.table.forEach(function (team) {
                        table += `<tr>
                                    <td>${team.position}</td>
                                    <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                                    <td>${team.points}</td>
                                    <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                                  </tr>`;
                    });
                    document.getElementById("klas2").innerHTML = table;
                    document.getElementById("nama2").innerHTML = data.competition.name;
                })
                .catch(error);
            }
        })
        .catch(error);
        caches.match("https://api.football-data.org/v2/competitions/2003/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }}).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    var idx = data.standings[0];
                    var table = "";
                    idx.table.forEach(function (team) {
                        table += `<tr>
                                    <td>${team.position}</td>
                                    <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                                    <td>${team.points}</td>
                                    <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                                  </tr>`;
                    });
                    document.getElementById("klas3").innerHTML = table;
                    document.getElementById("nama3").innerHTML = data.competition.name;
                })
                .catch(error);
            }
        })
        .catch(error);
        caches.match("https://api.football-data.org/v2/competitions/2015/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }}).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    var idx = data.standings[0];
                    var table = "";
                    idx.table.forEach(function (team) {
                        table += `<tr>
                                    <td>${team.position}</td>
                                    <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                                    <td>${team.points}</td>
                                    <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                                  </tr>`;
                    });
                    document.getElementById("klas4").innerHTML = table;
                    document.getElementById("nama4").innerHTML = data.competition.name;
                })
                .catch(error);
            }
        })
        .catch(error);
        caches.match("https://api.football-data.org/v2/competitions/2021/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }}).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    var idx = data.standings[0];
                    var table = "";
                    idx.table.forEach(function (team) {
                        table += `<tr>
                                    <td>${team.position}</td>
                                    <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                                    <td>${team.points}</td>
                                    <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                                  </tr>`;
                    });
                    document.getElementById("klas5").innerHTML = table;
                    document.getElementById("nama5").innerHTML = data.competition.name;
                })
                .catch(error);
            }
        })
        .catch(error);
    } 
        fetch("https://api.football-data.org/v2/competitions/2014/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }})
    .then(status)
    .then(json)
    .then(function (data) {
            console.log(data);
            var idx = data.standings[0];
            var table = "";
            idx.table.forEach(function (team) {
                table += `<tr>
                            <td>${team.position}</td>
                            <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                            <td>${team.points}</td>
                            <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                          </tr>`;
            });
            document.getElementById("klas1").innerHTML = table;
            document.getElementById("nama1").innerHTML = data.competition.name;
        }).catch(error);
    
        fetch("https://api.football-data.org/v2/competitions/2002/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }})
    .then(status)
    .then(json)
    .then(function (data) {
            console.log(data);
            var idx = data.standings[0];
            var table = "";
            idx.table.forEach(function (team) {
                table += `<tr>
                            <td>${team.position}</td>
                            <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                            <td>${team.points}</td>
                            <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                            </tr>`;
            });
            document.getElementById("klas2").innerHTML = table;
            document.getElementById("nama2").innerHTML = data.competition.name;
        }).catch(error);
    
        fetch("https://api.football-data.org/v2/competitions/2003/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }})
    .then(status)
    .then(json)
    .then(function (data) {
            console.log(data);
            var idx = data.standings[0];
            var table = "";
            idx.table.forEach(function (team) {
                table += `<tr>
                            <td>${team.position}</td>
                            <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                            <td>${team.points}</td>
                            <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                            </tr>`;
            });
            document.getElementById("klas3").innerHTML = table;
            document.getElementById("nama3").innerHTML = data.competition.name;
        }).catch(error);
    
        fetch("https://api.football-data.org/v2/competitions/2015/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }})
    .then(status)
    .then(json)
    .then(function (data) {
            console.log(data);
            var idx = data.standings[0];
            var table = "";
            idx.table.forEach(function (team) {
                table += `<tr>
                            <td>${team.position}</td>
                            <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                            <td>${team.points}</td>
                            <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                            </tr>`;
            });
            document.getElementById("klas4").innerHTML = table;
            document.getElementById("nama4").innerHTML = data.competition.name;
        }).catch(error);
    
        fetch("https://api.football-data.org/v2/competitions/2021/standings",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }})
    .then(status)
    .then(json)
    .then(function (data) {
            console.log(data);
            var idx = data.standings[0];
            var table = "";
            idx.table.forEach(function (team) {
                table += `<tr>
                            <td>${team.position}</td>
                            <td><img src="${team.team.crestUrl}" style="width:20px; height:auto;">&nbsp;${team.team.name}</td>
                            <td>${team.points}</td>
                            <td><a class="waves-effect waves-light btn-small" id="save" onClick="saveID(${team.team.id})">+ Add to Fav</a></td>
                            </tr>`;
            });
            document.getElementById("klas5").innerHTML = table;
            document.getElementById("nama5").innerHTML = data.competition.name;
        }).catch(error);    
    }

function loadApis() {
    if ('caches' in window) {
        caches.match("https://api.football-data.org/v2/competitions/2021/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }, mode : "cors"}).then(function (response) {
            if (response) {
                console.log('Data Loaded From Cache ');
                response.json().then(function (data) {
                    console.log(data);
                    var table = "";
                    data.scorers.forEach(function (player) {
                        table += `<tr>
                                    <td>${player.player.name}</td>
                                    <td>${player.team.name}</td>
                                    <td>${player.numberOfGoals}</td>
                                    </tr>`;
                    });
                    document.getElementById("klass5").innerHTML = table;
                    document.getElementById("namas5").innerHTML = data.competition.name;
                })
            }
        });
        caches.match("https://api.football-data.org/v2/competitions/2015/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }, mode : "cors"}).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    var table = "";
                    data.scorers.forEach(function (player) {
                        table += `<tr>
                                    <td>${player.player.name}</td>
                                    <td>${player.team.name}</td>
                                    <td>${player.numberOfGoals}</td>
                                    </tr>`;
                    });
                    document.getElementById("klass4").innerHTML = table;
                    document.getElementById("namas4").innerHTML = data.competition.name;
                })
            }
        });
        caches.match("https://api.football-data.org/v2/competitions/2003/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }, mode : "cors"}).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    var table = "";
                    data.scorers.forEach(function (player) {
                        table += `<tr>
                                    <td>${player.player.name}</td>
                                    <td>${player.team.name}</td>
                                    <td>${player.numberOfGoals}</td>
                                    </tr>`;
                    });
                    document.getElementById("klass3").innerHTML = table;
                    document.getElementById("namas3").innerHTML = data.competition.name;
                })
            }
        });
        caches.match("https://api.football-data.org/v2/competitions/2002/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }, mode : "cors"}).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    var table = "";
                    data.scorers.forEach(function (player) {
                        table += `<tr>
                                    <td>${player.player.name}</td>
                                    <td>${player.team.name}</td>
                                    <td>${player.numberOfGoals}</td>
                                    </tr>`;
                    });
                    document.getElementById("klass2").innerHTML = table;
                    document.getElementById("namas2").innerHTML = data.competition.name;
                })
            }
        });
        caches.match("https://api.football-data.org/v2/competitions/2014/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }, mode : "cors"}).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    var table = "";
                    data.scorers.forEach(function (player) {
                        table += `<tr>
                                    <td>${player.player.name}</td>
                                    <td>${player.team.name}</td>
                                    <td>${player.numberOfGoals}</td>
                                    </tr>`;
                    });
                    document.getElementById("klass1").innerHTML = table;
                    document.getElementById("namas1").innerHTML = data.competition.name;
                })
            }
        });
    } 
        fetch("https://api.football-data.org/v2/competitions/2021/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }, mode : "cors"})
        .then(status)
        .then(json)
        .then(function (data)  {
            console.log(data);
                var table = "";
                data.scorers.forEach(function (player) {
                    table += `<tr>
                                <td>${player.player.name}</td>
                                <td>${player.team.name}</td>
                                <td>${player.numberOfGoals}</td>
                                </tr>`;
                });
                document.getElementById("klass5").innerHTML = table;
                document.getElementById("namas5").innerHTML = data.competition.name;
            }).catch(error);
        fetch("https://api.football-data.org/v2/competitions/2015/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }})
        .then(status)
        .then(json)
        .then(function (data)  {
            console.log(data);
                var table = "";
                data.scorers.forEach(function (player) {
                    table += `<tr>
                                <td>${player.player.name}</td>
                                <td>${player.team.name}</td>
                                <td>${player.numberOfGoals}</td>
                                </tr>`;
                });
                document.getElementById("klass4").innerHTML = table;
                document.getElementById("namas4").innerHTML = data.competition.name;
            }).catch(error);
        fetch("https://api.football-data.org/v2/competitions/2003/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }})
            .then(status)
            .then(json)
            .then(function (data)  {
            console.log(data);
            var table = "";
            data.scorers.forEach(function (player) {
                table += `<tr>
                            <td>${player.player.name}</td>
                            <td>${player.team.name}</td>
                            <td>${player.numberOfGoals}</td>
                            </tr>`;
            });
            document.getElementById("klass3").innerHTML = table;
            document.getElementById("namas3").innerHTML = data.competition.name;
            }).catch(error);
        
        fetch("https://api.football-data.org/v2/competitions/2002/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }})
        .then(status)
        .then(json)
        .then(function (data)  {
            console.log(data);
                var table = "";
                data.scorers.forEach(function (player) {
                    table += `<tr>
                                <td>${player.player.name}</td>
                                <td>${player.team.name}</td>
                                <td>${player.numberOfGoals}</td>
                                </tr>`;
                });
                document.getElementById("klass2").innerHTML = table;
                document.getElementById("namas2").innerHTML = data.competition.name;
            }).catch(error);
        
        fetch("https://api.football-data.org/v2/competitions/2014/scorers",{ headers : {
            'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
        }})
        .then(status)
        .then(json)
        .then(function (data)  {
            console.log(data);
                var table = "";
                data.scorers.forEach(function (player) {
                    table += `<tr>
                                <td>${player.player.name}</td>
                                <td>${player.team.name}</td>
                                <td>${player.numberOfGoals}</td>
                                </tr>`;
                });
                document.getElementById("klass1").innerHTML = table;
                document.getElementById("namas1").innerHTML = data.competition.name;
            }).catch(error);
    }

function loadTeams() {
    dbPromise.then(function(db) {
        var tx = db.transaction('team', 'readonly');
        var store = tx.objectStore('team');
        return store.getAll();
        }).then(function(items) {
        console.log('Data yang diambil: ');
        console.log(items);
        items.slice(0,1).forEach(function (team) {
            id = team.team_id;
            if ('caches' in window) {
                caches.match("https://api.football-data.org/v2/teams/" + id + "/",{ headers : {
                    'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
                }}).then(function (response) {
                    if (response) {
                        response.json().then(function (data) {
                            console.log(data);
                            var crest = `<img src="${data.crestUrl}" style="width:100%; height: 300px;">`;
                            document.getElementById("clubCrest").innerHTML = crest;
                            document.getElementById("clubname").innerHTML = data.name;
                            document.getElementById("clubregion").innerHTML =   data.venue +" ("+ data.area.name + ")" ;
                            document.getElementById("founded").innerHTML = data.founded;
                            
                            var squad = "";
                            data.squad.forEach(function (player) {
                                squad +=`
                                <li>
                                    <div class="collapsible-header"><b>${player.shirtNumber}</b>&nbsp;${player.name}</div>
                                    <div class="collapsible-body">
                                        <table>
                                            <tr>
                                                <td><b>Name </b></td> <td>:</td> <td> ${player.name}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Nationality</b></td> <td>:</td> <td> ${player.countryOfBirth}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Position</b></td> <td>:</td> <td> ${player.position}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Role</b></td> <td>:</td> <td> ${player.role}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                                `;
                            });
                            document.getElementById("squad").innerHTML = squad;
                            var active = "";
                            data.activeCompetitions.forEach(function (comp) {
                                active += `
                                    <li class="collection-item">${comp.name}</li>
                                `;
                            });
                            var del = `<a class="btn red waves-effect waves-blue" onClick="deleteID(${data.id})" style="width: 100%;">Delete From Favourite</a>`;
                            document.getElementById("delete").innerHTML = del;
                            document.getElementById("activecomp").innerHTML = active;
                            document.getElementById("email").innerHTML = data.email;
                            document.getElementById("web").innerHTML = data.website;
                            document.getElementById("phone").innerHTML = data.phone;
                        })
                    }
                })
            }
            fetch("https://api.football-data.org/v2/teams/" + id + "/",{ headers : {
                    'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
                }})
                    .then(status)
                    .then(json)
                    .then(function (data)  {
                        console.log(data);
                        var crest = `<img src="${data.crestUrl}" style="width:100%; height: 300px;">`;
                        document.getElementById("clubCrest").innerHTML = crest;
                        document.getElementById("clubname").innerHTML = data.name;
                        document.getElementById("clubregion").innerHTML =   data.venue +" ("+ data.area.name + ")" ;
                        document.getElementById("founded").innerHTML = data.founded;
                        
                        var squad = "";
                        data.squad.forEach(function (player) {
                            squad +=`
                            <li>
                                <div class="collapsible-header"><b>${player.shirtNumber}</b>&nbsp;${player.name}</div>
                                <div class="collapsible-body">
                                    <table>
                                        <tr>
                                            <td><b>Name </b></td> <td>:</td> <td> ${player.name}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Nationality</b></td> <td>:</td> <td> ${player.countryOfBirth}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Position</b></td> <td>:</td> <td> ${player.position}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Role</b></td> <td>:</td> <td> ${player.role}</td>
                                        </tr>
                                    </table>
                                </div>
                            </li>
                            `;
                        });
                        document.getElementById("squad").innerHTML = squad;
                        var active = "";
                        data.activeCompetitions.forEach(function (comp) {
                            active += `
                                <li class="collection-item">${comp.name}</li>
                            `;
                        });
                        var del = `<a class="btn red waves-effect waves-blue" onClick="deleteID(${data.id})" style="width: 100%;">Delete From Favourite</a>`;
                        document.getElementById("delete").innerHTML = del;
                        document.getElementById("activecomp").innerHTML = active;
                        document.getElementById("email").innerHTML = data.email;
                        document.getElementById("web").innerHTML = data.website;
                        document.getElementById("phone").innerHTML = data.phone;
                    });
        })
    });
}
function loadUpcomeSchedule() {
    dbPromise.then(function(db) {
        var tx = db.transaction('team', 'readonly');
        var store = tx.objectStore('team');
        return store.getAll();
        }).then(function(items) {
        console.log('Data yang diambil: ');
        console.log(items);
        items.slice(0,1).forEach(function (team) {
            id = team.team_id;
            if ('caches' in window) {
                caches.match("https://api.football-data.org/v2/teams/" + id + "/matches?status=SCHEDULED",{ headers : {
                    'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
                }}).then(function (response) {
                    if (response) {
                        response.json().then(function (data) {
                            console.log(data);
                            var upcome = "";
                            m = data.matches.slice(0,5);
                            console.log(m);
                            m.forEach(function (match) { 
                                upcome += `
                                    <tr>
                                        <td>${match.homeTeam.name} vs ${match.awayTeam.name}</td>
                                        <td>${match.competition.name}</td>
                                    </tr>
                                `;
                            });
                            document.getElementById("upmatch").innerHTML = upcome;
                        })
                    }
                })
            }
            fetch("https://api.football-data.org/v2/teams/" + id + "/matches?status=SCHEDULED",{ headers : {
                    'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
                }})
                    .then(status)
                    .then(json)
                    .then(function (data)  {
                    console.log(data);
                    var upcome = "";
                    m = data.matches.slice(0,5);
                    console.log(m);
                    m.forEach(function (match) { 
                        upcome += `
                            <tr>
                                <td>${match.homeTeam.name} vs ${match.awayTeam.name}</td>
                                <td>${match.competition.name}</td>
                            </tr>
                        `;
                    });
                    document.getElementById("upmatch").innerHTML = upcome;
                    });
        })
    });
}

// function getAllID() {
//     return new Promise(function (resolve, reject) {
//         dbPromise.then(function(db) {
//             var tx = db.transaction('team', 'readonly');
//             var store = tx.objectStore('team');
//             return store.getAll();
//             }).then(function(items) {
//             console.log('Data yang diambil: ');
//             console.log(items);
//             resolve(items);
//         });
//     })
// }
function loadPastSchedule() {
    dbPromise.then(function(db) {
        var tx = db.transaction('team', 'readonly');
        var store = tx.objectStore('team');
        return store.getAll();
        }).then(function(items) {
        console.log('Data yang diambil: ');
        console.log(items);
        items.slice(0,1).forEach(function (team) {
            id = team.team_id;
            if ('caches' in window) {
                caches.match("https://api.football-data.org/v2/teams/"+ id + "/matches?status=FINISHED",{ headers : {
                    'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
                }}).then(function (response) {
                    if (response) {
                        response.json().then(function (data) {
                            console.log(data);
                            var past = "";
                            m = data.matches.slice(-5);
                            console.log(m);
                            m.reverse().forEach(function (match) { 
                                past += `
                                    <tr>
                                        <td>${match.homeTeam.name} vs ${match.awayTeam.name}</td>
                                        <td>${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</td>
                                        <td>${match.competition.name}</td>
                                    </tr>
                                `;
                            });
                            document.getElementById("past5").innerHTML = past;
                        })
                    }
                })
            }
            fetch("https://api.football-data.org/v2/teams/"+ id + "/matches?status=FINISHED",{ headers : {
                    'X-Auth-Token': 'f235978ae9594669b653c534bd62ebdc'
                }})
                .then(status)
                .then(json)
                .then(function (data)  {
                console.log(data);
                var past = "";
                m = data.matches.slice(-5);
                console.log(m);
                m.reverse().forEach(function (match) { 
                    past += `
                        <tr>
                            <td>${match.homeTeam.name} vs ${match.awayTeam.name}</td>
                            <td>${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</td>
                            <td>${match.competition.name}</td>
                        </tr>
                    `;
                });
                document.getElementById("past5").innerHTML = past;
                });
        });
    });
}