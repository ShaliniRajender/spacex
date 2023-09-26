import * as React from 'react';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { sortArray } from '../actions';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { connect } from 'react-redux';
import { listship, listdragon } from './query';

const DataTable = () => {
    const dispatch = useDispatch()

    const [rows, setrows] = useState([]);
    const [spacex, setspacex] = useState([]);
    const client = new ApolloClient({
        uri: 'https://spacex-production.up.railway.app/',
        cache: new InMemoryCache(),
    });
    useEffect(() => {
        initialidatafetch()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const initialidatafetch = () => {
        client
            .query({
                query: listship,
            })
            .then((result) =>

                setrows(result.data.ships)

            );
        ;

        client
            .query({
                query: listdragon,
            })
            .then((result) => {
                setspacex(result.data.dragons)
            }
            );
        ;

    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 200, },
        { field: 'type', headerName: 'Type', width: 200, },
        { field: 'home_port', headerName: 'Home port', width: 200, },
        {
            field: 'roles', headerName: 'Roles', width: 200,
            renderCell: (record) => {
                return (
                    <>
                        <Stack direction="row" spacing={1}>
                            {record.row.roles.map((item) => <Chip key={item} label={item} size="small" />
                            )
                            }</Stack></>
                )
            },
        },
        {
            field: 'year_built',
            headerName: 'Year build',
            type: 'number',
            width: 150,
        },
        {
            field: 'image',
            headerName: 'Image',
            sortable: false,
            width: 200,
            renderCell: (record) => {
                return (
                    <>
                        <Avatar alt={record.name} src={record.row.image} />
                    </>
                )
            }
        },
    ];

    const handleSort = async () => {
        console.log(sortArray, 'vjhvjhbkj')
        const mypayload = {
            'row': array,
        };
        const sorted = dispatch({ type: 'SORT_ARRAY', payload: mypayload });
        setsortedarr(sorted.payload.row)

    };
    const array = (['mango', 'apple', 'grapes'])
    const [sortedarr, setsortedarr] = useState()
    return (
        <div style={{ height: 400, width: '100%' }}>
            {spacex.map((card, index) => (
                <Card key={index} sx={{ maxWidth: '100%' }}>
                    <CardHeader title={card.name} />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {card.first_flight}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.diameter.meters}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}           <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
            <Button onClick={handleSort} variant="contained">Sorting</Button>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around' }}>
                <div> {array.map((card, index) => (
                    <Card key={index} sx={{ maxWidth: '100%' }}>
                        <CardHeader style={{ display: 'flex', justifyContent: 'space-around' }} title={card} />
                    </Card>
                ))}</div>
                <div>
                    {sortedarr && sortedarr.map((card, index) => (
                        <Card key={index} sx={{ maxWidth: '100%' }}>
                            <CardHeader title={card} />
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
}
const mapStateToProps = (state) => ({

    array: state.array,

});
export default connect(mapStateToProps, { sortArray })(DataTable)