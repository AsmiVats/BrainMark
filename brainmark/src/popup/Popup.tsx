
import { Box, Button, TextField, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material'
import { Folder, Delete, Edit, Bookmark } from '@mui/icons-material'

const Popup = () => {
  return (
    <Box sx={{ width: 300, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Bookmark Organizer
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          size="small"
          fullWidth
          placeholder="New folder name"
        />
        <Button variant="contained" >
          Add
        </Button>
      </Box>
      
      <List>
        <ul>"hi</ul>
      </List>
    </Box>
  )
}
