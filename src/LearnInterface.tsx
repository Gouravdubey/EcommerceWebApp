import React, { Component } from "react";

interface UserObj {
  id: number;
  name: string;
  mobileNo: number;
  age: number;
  family:{
    memberName:string
    age:number
    no:number
  }
}
interface Props {}
interface State {
  firstName: string;
  users: Array<UserObj>;
}
export class LearnInterface extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      firstName: "Ayush",
      users: [
        {
          id: 1,
          name: "ayush",
          mobileNo: 123456789,
          age: 22,
          family:{
            memberName:'aman',
            age:24,
            no:123456789
          }
        }
      ],
    };
  }
  
  render() {
    return <div>LearnInterface</div>;
  }
}

export default LearnInterface;
