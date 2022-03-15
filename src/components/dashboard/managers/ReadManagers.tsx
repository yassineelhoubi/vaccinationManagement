import { Typography } from '@mui/material';
import { TableData } from '../';
import { useNavigate } from 'react-router-dom';
import { ColumnTable } from '../../../interfaces';
import { useFetch } from '../../../services';
import { CustomBtn } from '../../layouts';

const ReadManagers: React.FC = () => {

    let navigate = useNavigate();
    function redirect(): void {
        // navigate("/", { replace: true });
    }

    const columns: ColumnTable[] = [
        { id: 'fName', label: 'First Name' },
        { id: 'lName', label: 'Last Name' },
        { id: 'email', label: 'Email' },
        { id: 'area', label: 'Area' },
        { id: 'actions', label: 'Actions' }
    ]

    const { data } = useFetch(`${process.env.REACT_APP_BASE_URL}api/admin/getAllManagers`);

    return <div>
        <div className="mb-6 w-min" onClick={() => redirect()}>

            <CustomBtn name="Create" />
        </div>
        <Typography variant="h4" gutterBottom component="div">
            Managers
        </Typography>

        <div className="mt-6">

            {data && <TableData data={data} columns={columns} />}
        </div>
    </div>;
}

export { ReadManagers }