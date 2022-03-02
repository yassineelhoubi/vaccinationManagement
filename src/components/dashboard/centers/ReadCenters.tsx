import { Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableData } from '../';
import { ColumnTable } from '../../../interfaces';
import { CustomBtn } from '../../layouts';


const ReadCenters: FC = () => {

    let navigate = useNavigate();

    //   const { data, error, isPending, setData: refetch } = useFetch("http://localhost:3000/api/admin/getAllManagers");

    function redirect(): void {
        // navigate("/", { replace: true });
    }

    const columns: ColumnTable[] = [
        { id: 'area', label: 'Area' },
        { id: 'city', label: 'City' },
        { id: 'name', label: 'Name' },
        { id: 'actions', label: 'Actions' }
    ]

    const data = [
        {
            _id: "1",
            area: "test",
            city: "test",
            name: "test"

        }
    ]
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
