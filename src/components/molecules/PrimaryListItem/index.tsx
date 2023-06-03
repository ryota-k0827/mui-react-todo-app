import AssignmentIcon from '@mui/icons-material/Assignment'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import SaveIcon from '@mui/icons-material/Save'
import {
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useState } from 'react'

import { Status } from '~/types/status'

interface PrimaryListItemProps {
  primary: string
  status: Status
  handleClickSave: (primary: string, status: Status) => void
  handleClickDelete: () => void
}

export const PrimaryListItem = ({ primary, status, handleClickSave, handleClickDelete }: PrimaryListItemProps) => {
  const [edit, setEdit] = useState(false)
  const [editPrimary, setEditPrimary] = useState(primary)
  const [editStatus, setEditStatus] = useState(status)

  const onClickSave = () => {
    handleClickSave(editPrimary, editStatus)
    setEdit(false)
  }

  return (
    <List component="div" disablePadding>
      <ListItem sx={{ pl: 4 }}>
        {edit === true ? (
          <>
            <TextField
              id="standard-basic"
              variant="standard"
              size="small"
              value={editPrimary}
              onChange={(e) => setEditPrimary(e.target.value)}
              error={!editPrimary}
              helperText={!editPrimary && 'タスク名を入力してください'}
            />
            <FormControl size="small" sx={{ marginLeft: 'auto' }}>
              <Select
                id="demo-simple-select"
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value as unknown as Status)}
                sx={{ fontSize: '0.8rem' }}
              >
                <MenuItem value="No Status">No Status</MenuItem>
                <MenuItem value="ToDo">ToDo</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </FormControl>
            <IconButton aria-label="save" size="small" onClick={onClickSave} disabled={!editPrimary}>
              <SaveIcon />
            </IconButton>
          </>
        ) : (
          <>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
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
