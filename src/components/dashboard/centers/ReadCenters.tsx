import { Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableData } from '../';
import { ColumnTable } from '../../../interfaces';
import { useFetch } from '../../../services';
import { CustomBtn } from '../../layouts';


const ReadCenters: FC = () => {

    let navigate = useNavigate();

    function redirect(): void {
        // navigate("/", { replace: true });
    }

    const columns: ColumnTable[] = [
        { id: 'area', label: 'Area' },
        { id: 'city', label: 'City' },
        { id: 'name', label: 'Name' },
        { id: 'actions', label: 'Actions' }
    ]

    const { data } = useFetch(`${process.env.REACT_APP_BASE_URL}api/manager/getAllCenters`);

    return <div>
        <div className="mb-6 w-min" onClick={() => redirect()}>

            <CustomBtn name="Create" />
        </div>
        <Typography variant="h4" gutterBottom component="div">
            Centers
        </Typography>

        <div className="mt-6">

            {data && <TableData data={data} columns={columns} />}
        </div>
    </div>;
};

export { ReadCenters };
