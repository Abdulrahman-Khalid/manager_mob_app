import React, { Component } from "react";
import { CustomCard, CardSection, Button, Confirm } from "./common";
import { connect } from "react-redux";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import EmployeeForm from "./EmployeeForm";
import _ from "lodash";
import Communications from "react-native-communications";

class EmployeeEdit extends Component {
  //showModal doesn't concern anything in the application except this component
  // so it is better to be a component level state not application level state
  state = {
    showModal: false
  };

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      //prop is the key
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcomming shift is on ${shift}`);
  }

  onAcceptConfirm() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDeclineConfirm() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <CustomCard>
        {/* pass this.props to employee form props */}
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onDecline={this.onDeclineConfirm.bind(this)}
          onAccept={this.onAcceptConfirm.bind(this)}
        >
          Are you sure you want to fire this employee?
        </Confirm>
      </CustomCard>
    );
  }
}

const mapStateTopProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateTopProps,
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
