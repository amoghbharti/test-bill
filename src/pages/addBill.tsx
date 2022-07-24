import { ChangeEvent, SyntheticEvent, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Layout from '../layout';
import { addBill } from '../sevices/bill';
import { toast } from 'react-toastify';

const defaultFormData = {
  billDate: '',
  payedDate: '',
  unitConsumed: '',
  amount: '',
};

const AddBill: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push({ pathname: '/' });
  };

  const handleSave = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const { data } = await addBill(formData);
      toast.success(data.message);
      router.push({ pathname: '/' });
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Layout>
      <Typography variant="h3">Add Bill</Typography>
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

export default AddBill;
