var React = require('react');

module.exports = React.createClass({
    render: function() {
      if(this.props.color === 'link') {
        return <button className="btn btn-link" type="button">
          {this.props.title} <span className="badge">{this.props.number}</span></button>
          }
        else if (this.props.color === 'primary') {
          return <button className="btn btn-primary" type="button">
            {this.props.title} <span className="badge">{this.props.number}</span>
            </button>
        }
    }
  });