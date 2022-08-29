import { Card, CardContent, CardHeader, Grid, List, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { Layout } from '../components/layouts'
import { EntryList, NewEntry } from '../components/ui'
import { EntriesContext } from '../context/entries'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Pendientes" />
              <NewEntry />
              <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="En Progreso" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas" />
            <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home
