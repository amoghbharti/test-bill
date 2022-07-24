import { ChangeEvent, SyntheticEvent, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../layout';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import { editBill } from '../../sevices/bill';

const defaultFormData = {
  billDate: '',
  payedDate: '',
  unitConsumed: '',
  amount: '',
};

const EditBill: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push({ pathname: '/bill/[id]', query: { id } });
  };

  const handleSave = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const { data } = await editBill(id, formData);
      toast.success(data.message);
      router.push({ pathname: '/bill/[id]', query: { id } });
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Layout>
      <Typography variant="h3">Edit Bill details</Typography>
      <TextField
        name="billDate"
        value={formData.billDate}
        onChange={handleChange}
        label="Bill date"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        name="payedDate"
        value={formData.payedDate}
        onChange={handleChange}
        label="Payed date"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        name="unitConsumed"
        value={formData.unitConsumed}
        onChange={handleChange}
        label="Unit Consumed"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        label="Amount"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="outlined" title="Cancel" sx={{ mr: 2 }} onClick={handleCancel}>
        Cancel
      </Button>
      <Button variant="contained" title="Save" onClick={handleSave}>
        Save
      </Button>
    </Layout>
  );
};

export default EditBill;
