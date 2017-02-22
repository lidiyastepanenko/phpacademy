var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
    render: function() {
      return <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.imageUrl} alt="..."></img>
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p> 
              <Badge color="primary" title={this.props.title} number={this.props.number} />
              <Badge color="primary" title={this.props.header} number={this.props.title} />
            </p>
          </div>
        </div>
      </div>
    }
  });