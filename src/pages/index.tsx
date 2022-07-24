import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../layout';
import { getBillList } from '../sevices/bill';
import { MUIDataTable } from 'mui-datatables';
import { toast } from 'react-toastify';

const Home: NextPage = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const { data } = await getBillList();
      setList(data.data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  const columns = [
    {
      name: '_id',
      label: 'Id',
    },
    {
      name: 'billDate',
      label: 'Bill date',
    },
    {
      name: 'payedDate',
      label: 'payedDate',
    },
    {
      name: 'unitConsumed',
      label: 'Unit Consumed',
    },
    {
      name: 'amount',
      label: 'Amount',
    },
  ];
  return (
    <Layout>
      <MUIDataTable title="Bill list" data={list} columns={columns} />
    </Layout>
  );
};

export default Home;
