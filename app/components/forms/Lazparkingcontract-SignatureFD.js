var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    this.props.updateCurrentForm("Lazparkingcontract-SignatureFD");
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/Lazparkingcontract-SignatureFD_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/Lazparkingcontract-SignatureFD_2.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;