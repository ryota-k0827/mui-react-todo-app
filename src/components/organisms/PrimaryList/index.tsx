import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import SplitscreenIcon from '@mui/icons-material/Splitscreen'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import { useState } from 'react'

import { NestedListItem } from '~/components/molecules/NestedListItem'
import { PrimaryListItem } from '~/components/molecules/PrimaryListItem'
import { Status } from '~/types/status'

export const PrimaryList = () => {
  const [listItems, setListItems] = useState([
    { id: 1, title: '未定義のタスク1', status: 'No Status' },
    { id: 2, title: '未定義のタスク2', status: 'No Status' },
    { id: 3, title: '未定義のタスク3', status: 'No Status' },
    { id: 4, title: 'API定義書を作成する', status: 'ToDo' },
    { id: 5, title: 'API定義書をレビューする', status: 'ToDo' },
    { id: 6, title: 'API定義書を承認する', status: 'ToDo' },
  ] as unknown as { id: number; title: string; status: Status }[])

  const handleClickAdd = (status: Status) => {
    const newId = listItems.length + 1
    const newListItem = { id: newId, title: `未定義のタスク${newId}`, status }
    setListItems([...listItems, newListItem])
  }

  const handleClickSave = (primary: string, status: Status, id: number) => {
    const newListItem = listItems.map((listItem) => {
      if (listItem.id === id) {
        return { ...listItem, title: primary, status }
      }
      return listItem
    })
    setListItems(newListItem)
  }

  const handleClickDelete = (id: number) => {
    const newListItem = listItems.filter((listItem) => listItem.id !== id)
    setListItems(newListItem)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper', margin: '0 auto' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          MUI + React ToDo App
        </ListSubheader>
      }
    >
      <NestedListItem
        primary="No Status"
        icon={<SplitscreenIcon />}
        handleClickAdd={() => handleClickAdd('No Status' as unknown as Status)}
        count={listItems.filter((listItem) => listItem.status === ('No Status' as unknown as Status)).length}
      >
        {listItems.map(
          (listItem) =>
            listItem.status === ('No Status' as unknown as Status) && (
              <PrimaryListItem
                key={listItem.id}
                primary={listItem.title}
                status={listItem.status}
                handleClickSave={(primary, status) => handleClickSave(primary, status, listItem.id)}
                handleClickDelete={() => handleClickDelete(listItem.id)}
              />
            )
        )}
      </NestedListItem>
      <NestedListItem
        primary="ToDo"
        icon={<FormatListBulletedIcon />}
        handleClickAdd={() => handleClickAdd('ToDo' as unknown as Status)}
        count={listItems.filter((listItem) => listItem.status === ('ToDo' as unknown as Status)).length}
      >
        {listItems.map(
          (listItem) =>
            listItem.status === ('ToDo' as unknown as Status) && (
              <PrimaryListItem
                key={listItem.id}
                primary={listItem.title}
                status={listItem.status}
                handleClickSave={(primary, status) => handleClickSave(primary, status, listItem.id)}
                handleClickDelete={() => handleClickDelete(listItem.id)}
              />
            )
        )}
      </NestedListItem>
      <NestedListItem
        primary="In Progress"
        icon={<AssignmentIndIcon />}
        handleClickAdd={() => handleClickAdd('In Progress' as unknown as Status)}
        count={listItems.filter((listItem) => listItem.status === ('In Progress' as unknown as Status)).length}
      >
        {listItems.map(
          (listItem) =>
            listItem.status === ('In Progress' as unknown as Status) && (
              <PrimaryListItem
                key={listItem.id}
                primary={listItem.title}
                status={listItem.status}
                handleClickSave={(primary, status) => handleClickSave(primary, status, listItem.id)}
                handleClickDelete={() => handleClickDelete(listItem.id)}
              />
            )
        )}
      </NestedListItem>
      <NestedListItem
        primary="Done"
        icon={<PlaylistAddCheckIcon />}
        handleClickAdd={() => handleClickAdd('Done' as unknown as Status)}
        count={listItems.filter((listItem) => listItem.status === ('Done' as unknown as Status)).length}
      >
        {listItems.map(
          (listItem) =>
            listItem.status === ('Done' as unknown as Status) && (
              <PrimaryListItem
                key={listItem.id}
                primary={listItem.title}
                status={listItem.status}
                handleClickSave={(primary, status) => handleClickSave(primary, status, listItem.id)}
                handleClickDelete={() => handleClickDelete(listItem.id)}
              />
            )
        )}
      </NestedListItem>
    </List>
  )
}
