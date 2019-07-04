import React, { Component } from 'react'

class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        'Alven',
        'Bayu',
        'Budi',
      ],
      studentName: '',
      editStudentIndex: null,
    }
  }

  onInputChange = event => {
    this.setState({ studentName: event.target.value })
  };

  addStudentToList = () => {
    const newStudentList = this.state.students;
    newStudentList.push(this.state.studentName);

    this.setState({
      students: newStudentList,
      studentName: '',
    });
  };

  deleteStudent = index => {
    const newStudentList = [...this.state.students]
    // const newStudentList = JSON.parse(JSON.stringify(this.state.students))
    newStudentList.splice(index, 1);
    this.setState({ students: newStudentList });
  };

  setEditIndex = index => {
    this.setState({ editStudentIndex: index })
  }

  editStudentName = (e, index) => {
    const newStudents = [...this.state.students];
    newStudents[index] = e.target.value;
    this.setState({ students: newStudents });
  }

  listenToEnterKey = e => {
    if (e.key === 'Enter') {
      this.setEditIndex(null);
    }
  }

  render() {
    return (
      <div>
        <h2>Student List</h2>
        <ul>
          {this.state.students.map((value, index) => {
            return (
              <li key={index}>
                {index === this.state.editStudentIndex ? (
                    // true
                    <React.Fragment>
                      <input 
                        type="text" 
                        value={this.state.students[index]}
                        onChange={e => { this.editStudentName(e, index) }}
                        onKeyPress={this.listenToEnterKey}
                        autoFocus
                      />
                      <button onClick={() => { this.setEditIndex(null) }}>Selesai Edit</button>
                    </React.Fragment>
                  ) : (
                    // false
                    <span onClick={() => { this.setEditIndex(index) }}>{value}</span>
                )}
                <button onClick={() => { this.deleteStudent(index) }}>(-) Hapus saya</button>
              </li>
            )
          })}
        </ul>
        <input type="text" value={this.state.studentName} onChange={this.onInputChange} />
        <button className="btn btn-primary" onClick={this.addStudentToList} disabled={this.state.studentName === ''}>Submit</button>
      </div>
    );
  }
}

export default StudentList;
