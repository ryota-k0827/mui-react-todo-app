import AssignmentIcon from '@mui/icons-material/Assignment'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import SaveIcon from '@mui/icons-material/Save'
import { IconButton, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material'
import { useState } from 'react'

interface PrimaryListItemProps {
  primary: string
  handleClickSave: (primary: string) => void
  handleClickDelete: () => void
}

export const PrimaryListItem = ({ primary, handleClickSave, handleClickDelete }: PrimaryListItemProps) => {
  const [edit, setEdit] = useState(false)
  const [editPrimary, setEditPrimary] = useState(primary)

  const onClickSave = () => {
    handleClickSave(editPrimary)
    setEdit(false)
  }

  return (
    <List component="div" disablePadding>
      <ListItem sx={{ pl: 4 }}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        {edit === true ? (
          <>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              size="small"
              value={editPrimary}
              onChange={(e) => setEditPrimary(e.target.value)}
            />
            <IconButton aria-label="save" size="small" onClick={onClickSave} sx={{ marginLeft: 'auto' }}>
              <SaveIcon />
            </IconButton>
          </>
        ) : (
          <>
            <ListItemText primary={primary} />
            <IconButton aria-label="edit" size="small" onClick={() => setEdit(true)}>
              <ModeEditIcon />
            </IconButton>
          </>
        )}
        <IconButton aria-label="delete" size="small" onClick={handleClickDelete}>
          <DeleteForeverIcon sx={{ color: 'red' }} />
        </IconButton>
      </ListItem>
    </List>
  )
}
