import {db} from './config'

    var dataArray = [];

    db.ref('/Computers').once('value', function(snapshot) {

        var temparr = [];
    
        snapshot.forEach(function(snap) {
            var item
            item = snap.val()
            //alert(JSON.stringify(snap));
            temparr.push(item)
        
          });
    
          dataArray = temparr
          
    });

export {dataArray};
