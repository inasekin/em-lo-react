import React from 'react';
import { withAreaConsumer } from '../context';
import Loading from './Loading';
import AreasList from '../areas-list'

const AreasContainer = ({ context }) => {
    const { loading, areas } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <AreasList areas={areas} />
        </>
    );
}

export default withAreaConsumer(AreasContainer);