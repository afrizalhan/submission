var dbPromise = idb.open("footy", 1, function(upgradeDb) {
    var teamObjectStore = upgradeDb.createObjectStore("team", {
      keyPath : "team_id",
    });
    teamObjectStore.createIndex("team_id", "team_id",{
      unique : false
    });
  });

//   dbPromise.then(function(db) {
//     var tx = db.transaction('team', 'readwrite');
//     var store = tx.objectStore('team');
//     var item = {
//       team_id : 81,
//       date : Date.now()
//     };
//     store.add(item); //menambahkan key "buku"
//     return tx.complete;
// }).then(function() {
//     console.log('Team berhasil disimpan.');
// }).catch(function() {
//     console.log('Team gagal disimpan.')
// });

dbPromise.then(function(db) {
  var tx = db.transaction('team', 'readonly');
  var store = tx.objectStore('team');
  return store.getAll();
}).then(function(items) {
  console.log('Data yang diambil: ');
  console.log(items);
  if (items == 0) {
    console.log('Tidak ada data');
  }
});

function saveID(Id) {
    dbPromise.then(function(db) {
      var tx = db.transaction('team', 'readonly');
      var store = tx.objectStore('team');
      return store.getAll();
    }).then(function(items) {
      console.log('Data yang diambil: ');
      console.log(items);
      if (items == 0) {
        dbPromise.then(function (db) {
          var tx = db.transaction('team', 'readwrite');
          var store = tx.objectStore('team');
          var newID = Number(Id);
          console.log(newID);
          var item = {
            team_id : newID,
            date : Date.now()
          }
          store.put(item);
          return tx.complete;
        })
        .then(function() {
          M.toast({html: 'Berhasil simpan ke favorit'});
        });
      } else {
        M.toast({html: 'Anda sudah memiliki tim favorit, hapus terlebih dahulu untuk menambahkan yang baru'});
      }
    });   
}

function deleteID(Id) {
    dbPromise.then(function(db) {
      var tx = db.transaction('team', 'readwrite');
      var store = tx.objectStore('team');
      store.delete(Id);
      return tx.complete;
    }).then(function() {
      M.toast({html: 'Tim berhasil dihapus dari favorit'});
    });
}


  