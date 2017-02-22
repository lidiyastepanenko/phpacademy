var React = require('react');

var Badge = require('./badge');

module.exports = React.createClass({
     render: function() {
      var navlist = this.props.nav.map(function(item){
       
        return <a className="btn-link" href={"/${item}"}>{item}</a>
      });
      return <div >
       <img src="this.props.logo" alt="" />
       {navlist}
      </div>
    }
  });