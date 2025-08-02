import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const StatsPage = () => {
  const data = JSON.parse(localStorage.getItem('shortened') || '{}');
  const clicks = JSON.parse(localStorage.getItem('clicks') || '{}');

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Shortcode</TableCell>
          <TableCell>Original URL</TableCell>
          <TableCell>Clicks</TableCell>
          <TableCell>Expiry</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(data).map(([code, { url, expiry }]) => (
          <TableRow key={code}>
            <TableCell>{code}</TableCell>
            <TableCell>{url}</TableCell>
            <TableCell>{clicks[code]?.length || 0}</TableCell>
            <TableCell>{new Date(expiry).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StatsPage;
