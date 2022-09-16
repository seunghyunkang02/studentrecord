import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Student Name</th>
                <th>StudentID</th>
                <th>Major</th>
                <th>Year</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) =>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.sid}</td>
                <td>{row.major}</td>
                <td>{row.year}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
        //when button is clicked, the clicked index will be removed
    })

    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const { characterData, removeCharacter } = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
    //displaying the character data and also the remove character data set
    //table에서 가져온거를 tablebody로 내리고 옴
}
export default Table