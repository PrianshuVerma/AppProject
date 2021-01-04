import {db} from './config'

    var dataArray = [];

    db.ref('/Users').once('value', function(snapshot) {

        var temparr = [];
    
        snapshot.forEach(function(snap) {
            var item
            item = snap.val()
            item.key = snap.key
            temparr.push(item)
          });
          dataArray = temparr
    });

export {dataArray};