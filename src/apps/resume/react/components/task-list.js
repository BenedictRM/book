MyComponents.Task = React.createClass({

  render: function() {
	var assigned = this.props.task.value.Assigned;
	var deadline = this.props.task.value.Deadline;
	var completed = this.props.task.value.Complete;
	var priority = this.props.task.key;
	var taskType = this.props.task.value.Title;
    return (
      <div className="card">
        <div className="card-content">
		    <p><b><font size="6" color = "Orange"> {(taskType)}</font></b></p>
		    <p><b><font size="4" color = "red"> Assigned: </font></b> <font size="3">{JSON.stringify(assigned)}</font></p>
			<p><b><font size="4" color = "red"> Deadline: </font></b> <font size="3">{JSON.stringify(deadline)}</font></p>
			<p><b><font size="4" color = "blue"> Priority: </font></b> <font size="3">{JSON.stringify(priority)}</font></p>
			<p><b><font size="4" color = "red"> Completed: </font></b> <font size="3">{JSON.stringify(completed)}</font></p>	
        </div>
      </div>
    );
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })
    
    return (
      <div className="card">
        <div className="card-content">
		{/*
		//Comment out the full array return--calls all tasks
        TODO: This is a component to display a list of tasks
        assigned to me. Raw props data is {JSON.stringify(this.props.tasks)}
        */}
		
        {taskElements}

        </div>
      </div>
    );
  }
});
