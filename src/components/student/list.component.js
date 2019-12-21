import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from "./table-row.component";

export default class ListStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/students/')
            .then(res => {
                this.setState({
                    students: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.students.map((res, i) => {
            return <StudentTableRow item={res} key={i} index={i} />;
        });
    }


  render() {
    return (<div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roll No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>
        </div>);
    }
}