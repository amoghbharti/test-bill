import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../layout';
import { getBillDetail } from '../../sevices/bill';

const BillDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const getDetail = async () => {
    try {
      const { data } = await getBillDetail(id);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Layout>
      <></>
    </Layout>
  );
};

export default BillDetail;
