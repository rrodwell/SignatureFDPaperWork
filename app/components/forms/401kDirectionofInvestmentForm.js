var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    this.props.updateCurrentForm("401kDirectionofInvestmentForm");
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/401kDirectionofInvestmentForm_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/401kDirectionofInvestmentForm_2.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/401kDirectionofInvestmentForm_3.jpeg" alt="" />
        </div>

      </div>
    );
  }
});

module.exports = Handbook;