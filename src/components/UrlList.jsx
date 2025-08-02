import { Card, Typography } from '@mui/material';

const UrlList = ({ urls }) => (
  <>
    {urls.map(({ url, finalCode, expiry }, idx) => (
      <Card key={idx} sx={{ margin: 2, padding: 2 }}>
        <Typography>Original: {url}</Typography>
        <Typography>Shortened: http://localhost:3000/{finalCode}</Typography>
        <Typography>Expires: {new Date(expiry).toLocaleString()}</Typography>
      </Card>
    ))}
  </>
);

export default UrlList;
