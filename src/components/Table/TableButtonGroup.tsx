import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { MAPPED_DATES } from '../../util/DateUtil';
import DownloadIcon from '@mui/icons-material/Download';
import { axiosPrivate } from '../../api/axios';

type TableButtonGroupProps = {
  queryMonth: number;
  handleQueryMonthChange: (event: SelectChangeEvent<number>) => void;
  downloadPdf?: boolean;
};

const TableButtonGroup = ({
  handleQueryMonthChange,
  queryMonth,
  downloadPdf,
}: TableButtonGroupProps) => {
  const buildMonthList = () => {
    const currentMonth = new Date().getMonth();
    const monthsUpToNow = MAPPED_DATES.slice(0, currentMonth + 1);
    return monthsUpToNow.map((month, index) => (
      <MenuItem value={index}>{month}</MenuItem>
    ));
  };

  const downloadPdfRequest = async () => {
    try {
      const queryMonthValue = queryMonth + 1;
      const month =
        queryMonthValue < 10 ? `0${queryMonthValue}` : queryMonthValue;
      const pdfQuery = `?startDate=2024-${month}-01&endDate=2024-${month}-31`;
      const response = await axiosPrivate.post(
        `/resident/parsePDF${pdfQuery}`,
        undefined,
        {
          responseType: 'blob',
        },
      );

      const file = new Blob([response.data], { type: 'application/pdf' });
      //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
      const pdfWindow = window.open();
      if (pdfWindow) pdfWindow.location.href = fileURL;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="query-month-picker">Mês</InputLabel>
        <Select
          labelId="query-month-picker"
          id="month-picker"
          value={queryMonth}
          label="month"
          onChange={handleQueryMonthChange}
        >
          {buildMonthList()}
        </Select>
      </FormControl>
      {downloadPdf && (
        <Button
          size="small"
          title="download pdf"
          aria-label="download-pdf"
          variant="outlined"
          onClick={downloadPdfRequest}
          sx={{ height: '2.5rem', minWidth: '2.5rem' }}
        >
          <DownloadIcon />
        </Button>
      )}
    </Box>
  );
};

export default TableButtonGroup;
