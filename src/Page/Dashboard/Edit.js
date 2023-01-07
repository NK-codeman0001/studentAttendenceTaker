import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedStudent, setStudents, setIsEditing }) {

    const id = selectedStudent.id;

    const [firstName, setFirstName] = useState(selectedStudent.firstName);
    const [lastName, setLastName] = useState(selectedStudent.lastName);
    const [roll, setRoll] = useState(selectedStudent.roll);
    const [checkIn, setCheckIn] = useState(selectedStudent.checkIn);
    const [checkOut, setCheckOut] = useState(selectedStudent.checkOut);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !roll || !checkIn || !checkOut) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const student = {
            id,
            firstName,
            lastName,
            roll,
            checkIn,
            checkOut
        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, student);
                break;
            }
        }

        setStudents(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${student.firstName} ${student.lastName}'s data has been Updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Student</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="roll">Roll No.</label>
                <input
                    id="roll"
                    type="number"
                    name="roll"
                    value={roll}
                    onChange={e => setRoll(e.target.value)}
                />
                <label htmlFor="checkIn">Check-in Time</label>
                <input
                    id="checkIn"
                    type="time"
                    name="checkIn"
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                />
                <label htmlFor="checkOut">Check-out Time</label>
                <input
                    id="checkOut"
                    type="time"
                    name="checkOut"
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit