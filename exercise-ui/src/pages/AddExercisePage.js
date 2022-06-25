import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name: name, reps: reps, weight: weight, unit: unit, date: date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            Swal.fire(
                'Success!', 
                'Exercise Added.',
                'success'
            );
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Try again.'
            });
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Add Exercise</h1>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />

            <select
                value={unit} 
                onChange={e => setUnit(e.target.value)} name="unit" id="unit">
                <option selected>Select Unit</option>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
                </select>
            <input
                type="string"
                placeholder="MM-DD-YY"
                value={date}
                onChange={e => setDate(e.target.value)} />


            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;