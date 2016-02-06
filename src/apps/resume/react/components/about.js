MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
		    <img src={'img/profilePic.jpg'} alt="I failed to load" className="img-responsive"/>
			<p><b><font size="6">Name: </font></b> <font size="5">Russell Mehring</font></p>
			<p><b><font size="6">Major: </font></b> <font size="5">MS Computer Science</font></p>
			<p><b><font size="6">Birthplace: </font></b><font size="5"> Boulder, CO </font></p>
			<p><b><font size="6">Cell: </font></b><font size="5"> 303-204-2852 </font></p>
			<p><b><font size="6">Github: </font></b> <a href="https://github.com/BenedictRM"><u><font size="5">BenedictRM</font></u></a></p>
        </div>
      </div>
    );
  }

});
