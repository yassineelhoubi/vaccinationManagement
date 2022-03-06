import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

// ! GET TOKEN FROM STORE
const useFetch = (url: string) => {

  let token = useSelector((state: RootState) => state.manager.token);

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {

    axios.get(url, config)
      .then((res) => {
        setData(res.data.message)
        setIsPending(false)
      })
      .catch((err) => {
        setError(err)
      })

  }, [url])

  return { error, isPending, data, setData }

};

export { useFetch };
