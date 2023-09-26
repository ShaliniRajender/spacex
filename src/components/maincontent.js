import React from 'react'
import Table from './table';
import { Button } from '@mui/material';

const maincontent = () => {

    const onredirectlink = () => {
        window.location.href = 'https://www.spacex.com/human-spaceflight'
    }

    return (
        <div className="container mx-auto p-6 flex justify-center">
            <div style={{ display: 'flex', justifyContent: 'space-around' }}> <Button onClick={onredirectlink} component="label" variant="contained" >
                Click to check on website

            </Button></div>

            <h1 className="text-2xl font-semibold mb-4">Spacex</h1>
            <Table />
        </div>
    )
}

export default maincontent