import { FilledInput, MenuItem, Select } from '@mui/material';
import { Box, FormControl, FormLabel } from '@mui/material';

export default function ProgramFormList() {
  return (
    <Box className="grid grid-cols-2 gap-x-10 gap-y-4 p-5">
      <FormControl>
        <FormLabel className="text-black">Video URL</FormLabel>
        <FilledInput size="small" />
      </FormControl>
      {/*  */}
      <FormControl>
        <FormLabel className="text-black">Duration</FormLabel>
        <FilledInput size="small" />
      </FormControl>
      {/*  */}
      <FormControl>
        <FormLabel className="text-black">Title</FormLabel>
        <FilledInput size="small" />
      </FormControl>
      {/*  */}
      <FormControl variant="filled" size="small">
        <FormLabel className="text-black">Channel</FormLabel>
        <Select defaultValue="hey">
          {[
            { value: 'hey', label: 'Hey' },
            { value: 'here', label: 'Here' },
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/*  */}
      <FormControl variant="filled" size="small">
        <FormLabel className="text-black">Category</FormLabel>
        <Select defaultValue="hey">
          {[
            { value: 'hey', label: 'Hey' },
            { value: 'here', label: 'Here' },
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/*  */}
      <FormControl variant="filled" size="small">
        <FormLabel className="text-black">Type</FormLabel>
        <Select defaultValue="hey">
          {[
            { value: 'hey', label: 'Hey' },
            { value: 'here', label: 'Here' },
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
