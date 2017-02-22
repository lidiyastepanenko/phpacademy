// We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks on a button

var React = require('react');
var Badge = require('./badge');
var Header = require('./header');
var Footer = require('./footer');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
    render: function() {
      var list = this.props.thumbnailData.map(function(item,key){
        return <Thumbnail key={key} {...item} />
      });
      var footer = this.props.footerData.map(function(item,key){
        return <Footer key={key} {...item} />
      });
      return <div>
        <Header nav={this.props.headerData.nav} logo={this.props.headerData.logo} /> 
        {list}
        {footer}
      </div>
    }
  });