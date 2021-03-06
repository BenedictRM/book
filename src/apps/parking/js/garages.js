$(document).ready(function() { 

  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

  // create a firebase reference to the root
  var ref = new Firebase('https://publicdata-parking.firebaseio.com');

  var data

  // read data from the location san_francisco/garages, only once
  ref.child('san_francisco/garages').once('value', function(snapshot){
    data = snapshot.val()
    // console.log('data is loaded', data)

    // filter the data
    var garages = _.filter(data, function(d){
      // keep only those values (d) that has "open_spaces" as a field
      return _.has(d, 'open_spaces')
    })

    // console.log('garages is processed', garages);

    displayGarages(garages)
  })
});

function createSubListItem(str){
  var item = '<div class="collapsible-body" style="display: none; padding-top: 7px; margin-top: 0px; padding-bottom: 5px; padding-left: 20px; margin-bottom: 0px;">'
  //var item = '<div class="collapsible-body style="background:white">'
  item += str;
  item += '<br></div>';
  return item;
}

function displayGarages(garages){
  $('#garages').empty();

  // lodash _.forEach https://lodash.com/docs#forEach
  _.forEach(garages, function(val, key){
    $('#garages').append(generateListItem(val))
  })
}

function generateListItem(val){

  var listItem = '<li>'
  listItem += '<div class="collapsible-header"><i class="material-icons" >place</i>'

  //Add header Here
  listItem += val['friendlyName'];

  listItem += '</div>'

  listItem += createSubListItem("Open Spaces: " + val['open_spaces'])

  listItem += createSubListItem("Total Spaces: " + val['total_spaces'])

  listItem += createSubListItem("Percentage Open: " + Math.floor(100*val['open_spaces'] / val['total_spaces']) + "%")

  var hours = val['hours']

  listItem += getHours(hours)

  listItem += getCosts(val['rates'])
  return listItem
}

//function createSubListItem(str){
  //var item = '<div class="collapsible-body"><p>'
  //item += str;
  //item += '</p></div>';
  //return item;
//}

function getHours(hours){
  var listItem = "";

  var time = ((hours) ? hours['time'] : false)

  if( hours.constructor == Array){
      listItem += '<div class="collapsible-body" style="display: none; padding-top: 7px; margin-top: 0px; padding-bottom: 5px; padding-left: 20px; margin-bottom: 0px;">Hours of Operation:<br> '

      hours.forEach(function(entry){
        listItem += ''+entry['BEG'] + " to " + entry['END']+ " " + entry['FROM'] ;

        if( entry['TO']){
          listItem += " thru " + entry['TO']
        }

        listItem += "<br>"
      })


      listItem += '</div>';
  }
  else{
    listItem += createSubListItem("Hours of Operation: " + hours['BEG'] + " " + hours['FROM'])
  }
  return listItem
}


function getCosts(costs){
  var listItem = "";

  // console.log("costs: ", costs)
  //var time = ((hours) ? costs['time'] : false)
  console.log(costs);
  if( costs.constructor == Array){
      listItem += '<div class="collapsible-body" style="display: none; padding-top: 7px; margin-top: 0px; padding-bottom: 5px; padding-left: 20px; margin-bottom: 0px;">Costs:<br>'
      costs.forEach(function(entry){
        if (entry['BEG'] !== undefined) {
          listItem += ''+entry['BEG'] + " to " + entry['END'] + "&nbsp&nbsp&nbspCost: <b>$" + entry['RATE'] + "</b> " + entry['RQ'];
          listItem += "<br>"
        }
      })


      listItem += '</div>';
  } else{
    if (costs['BEG'] === undefined){
    return listItem
    }

    listItem += createSubListItem("Costs: " + costs['BEG'] + " " + costs['FROM'])
  }
  return listItem
}
