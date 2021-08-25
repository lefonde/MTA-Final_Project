import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './Home.css';

const Home = () => {
    return (
        <li>
            <Card className='home'>
                <div>
                    <h1>WELCOME TO ALGROS</h1>
                </div>
                <div>
                    <Button>
                        Create account
                    </Button>
                </div>
            </Card>
        </li>
    )
};

export default Home