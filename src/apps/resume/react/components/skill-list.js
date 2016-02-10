MyComponents.Skill = React.createClass({

  render: function() {
	var skillType = this.props.skill.key;  
	var skillList = this.props.skill.value;  
    return (
      <div className="card">
        <div className="card-content">
		<p><b><font size="6"> {skillType}</font></b></p>
  <p><b><font size="4" color = "Orange"> {skillList}</font></b></p>
        </div>
      </div>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">

        {skillElements}

        </div>
      </div>
    );
  }
});
