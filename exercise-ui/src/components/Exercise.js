import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';

function Exercise({ exercise, onDelete, onEdit }) {

    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0,10)}</td>
            <td><GrEdit onClick={() => onEdit(exercise)} /></td>
            <td><RiDeleteBin2Line onClick={() => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;