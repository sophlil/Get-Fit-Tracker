import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

export const EditExercisePage = ({ exerciseToEdit }) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, reps, weight, unit, date }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            Swal.fire(
                'Success!', 
                'Exercise Edited.',
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
            <h1>Edit Exercise</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
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
                value={date}
                onChange={e => setDate(e.target.value)} />

            <button
                onClick={editExercise}
            >Save</button>
        </div>
    );
}

export default EditExercisePage;