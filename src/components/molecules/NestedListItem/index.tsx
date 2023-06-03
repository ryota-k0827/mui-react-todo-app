import { ExpandLess, ExpandMore } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import { Badge, Collapse, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { ReactNode, useState } from 'react'

interface NestedListItemProps {
  primary: string
  icon: ReactNode
  count: number
  handleClickAdd: () => void
  children: ReactNode
}

export const NestedListItem = ({ primary, icon, count, handleClickAdd, children }: NestedListItemProps) => {
  const [open, setOpen] = useState(false)

  const onClickCollapse = () => {
    setOpen(!open)
  }

  const onClickAdd = () => {
    handleClickAdd()
    setOpen(true)
  }

  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Badge badgeContent={count} color="primary">
            {icon}
          </Badge>
        </ListItemIcon>
        <ListItemText primary={primary} />
        <IconButton onClick={onClickAdd} aria-label="add">
          <AddIcon sx={{ color: 'green' }} />
        </IconButton>
        <IconButton onClick={onClickCollapse} aria-label="expand">
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  )
}
