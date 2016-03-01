MyComponents.CityCards = React.createClass({

  render: function() {
    // inspect this.props.city to make sure we load the data correctly
	console.log('city', this.props.city)
	  
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={'img/'+this.props.city.key+'.jpg'}></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{this.props.city.key}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{this.props.city.key}<i className="material-icons right">close</i></span>
              <li><a className="white"><b>Weather Summary:  </b>{this.props.city.value.summary}</a></li>
			  <li><a className="white"><b>Humidity:  </b>{this.props.city.value.humidity}</a></li>
			  <li><a className="white"><b>Temperature:  </b>{this.props.city.value.temperature}</a></li>
			  <li><a className="white"><b>Wind Speed:  </b>{this.props.city.value.windSpeed} mph</a></li>
			  <li><a className="white"><b>Nearest Storm:  </b>{this.props.city.value.nearestStormDistance} miles</a></li>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.CityCards city={c} key={i}/>
    })
    
	// inspect this.props.cities to make sure we load the data correctly
	console.log('cities', this.props.cities)
	
    return (
      <div className="card">
        <div className="card-content">
        
        {cityElements}

        </div>
      </div>
    );
  }
});
