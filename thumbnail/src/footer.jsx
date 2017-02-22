var React = require('react');

var Badge = require('./badge');

module.exports = React.createClass({
     render: function() {
      return <div >
            <a href="this.props.url">
          <Badge color="primary" title={this.props.title} /></a>
      </div>
    }
  });