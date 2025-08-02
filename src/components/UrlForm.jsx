import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { isValidUrl, isValidShortcode, isValidMinutes } from '../utils/validators';
import { generateShortcode } from '../utils/shortcodeGenerator';
import { logAction } from '../utils/loggerMiddleware';

const UrlForm = ({ onShorten }) => {
  const [inputs, setInputs] = useState([{ url: '', minutes: '', code: '' }]);

  const handleChange = (index, field, value) => {
    const updated = [...inputs];
    updated[index][field] = value;
    setInputs(updated);
  };

  const handleSubmit = () => {
    const results = inputs.map((input) => {
      const { url, minutes, code } = input;
      if (!isValidUrl(url)) return { error: 'Invalid URL' };
      const validity = isValidMinutes(parseInt(minutes)) ? parseInt(minutes) : 30;
      const finalCode = code && isValidShortcode(code) ? code : generateShortcode();
      const expiry = Date.now() + validity * 60000;

      logAction('shorten_url', { url, finalCode, expiry });

      return { url, finalCode, expiry };
    });
    onShorten(results);
  };

  return (
    <Grid container spacing={2}>
      {inputs.map((input, idx) => (
        <Grid item xs={12} key={idx}>
          <TextField label="Long URL" fullWidth onChange={(e) => handleChange(idx, 'url', e.target.value)} />
          <TextField label="Validity (minutes)" type="number" onChange={(e) => handleChange(idx, 'minutes', e.target.value)} />
          <TextField label="Custom Shortcode (optional)" onChange={(e) => handleChange(idx, 'code', e.target.value)} />
        </Grid>
      ))}
      <Button variant="contained" onClick={handleSubmit}>Shorten URLs</Button>
    </Grid>
  );
};

export default UrlForm;
