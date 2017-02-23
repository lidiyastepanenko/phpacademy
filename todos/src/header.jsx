var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  render: function() {
    return <div className="input-group">
    <span className="col-xs-8" >
      <input
        placeholder='New Task'
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text"
        className="form-control" />
      </span> 
      <span className="col-xs-4" > 
      <input 
        value={this.state.date}
        onChange={this.handleDateChange}
        type="date"
        className="form-control" />
      </span> 
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default"
          type="button">
          Add Task
        </button>
      </span>
    </div>
  },
  handleClick: function() {
    if (this.state.text =='') return;
    this.props.itemsStore.push({
      text: this.state.text,
      date: this.state.date,
      done: false,
    });

    this.setState({text: '', date:''});
  },
  handleInputChange: function(event) {
    this.setState({
      text: event.target.value,
    });
  },
  handleDateChange: function(event) {
    this.setState({
      date: event.target.value
    });
  }
});
