import React from 'react';
import { useQuery } from 'react-query'
import StandingsComponent from '../../components/Standings/StandingsComponent';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { fetchStandingsData } from '../../utils/fetchData';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Container } from 'react-bootstrap';

function Standings(props) {
    var standingsQuery = useQuery('StandingsData', fetchStandingsData)
    var standingsData = null

    if (standingsQuery.isError) { console.log(standingsQuery.error); return <ErrorPage /> }
    if (standingsQuery.isLoading) { return <LoadingSpinner /> }
    standingsData = standingsQuery.data
    standingsData = props.limit ? standingsData.slice(0, props.limit) : standingsData

    return (
        <Container>
            <StandingsComponent data={standingsData} />
        </Container>
    )
}

export default Standings
