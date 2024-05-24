import { FilledInput } from '@mui/material';
import { Box, FormControl, FormLabel } from '@mui/material';

export default function ChannelFormList() {
  return (
    <Box className="px-32 py-10">
      <FormControl fullWidth>
        <FormLabel className="text-black">Name</FormLabel>
        <FilledInput size="small" />
      </FormControl>
    </Box>
  );
}
