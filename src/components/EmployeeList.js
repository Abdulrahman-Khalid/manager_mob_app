import React, { Component } from "react";
import { CustomCard, CardSection, Input, Button } from "./common";

class EmployeeList extends Component {
  render() {
    return (
      <CustomCard>
        <CardSection>
          <Input label="Name" placeholder="Jane" />
        </CardSection>

        <CardSection>
          <Input label="Phone" placeholder="555-555-5555" />
        </CardSection>

        <CardSection>
          <Button>Save</Button>
        </CardSection>
      </CustomCard>
    );
  }
}

export default EmployeeList;
