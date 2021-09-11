import React from 'react'
const Table=(props)=> {
    const {fullName,addressLine,city,state,postcode,country,email,phoneNumber}=props.user;
    console.log(props);
        return (
            <>
                    {/* <th scope="row">*</th> */}
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>{addressLine}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{postcode}</td>
                    <td>{country}</td>

            </>

        );
}

export default Table;