import React from 'react';
import { CountCard } from '../components/CountCard/CountCard';
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TodayIcon from '@mui/icons-material/Today';

import './Dashboard.css';

function Icons({ name }) {
  if (name === 'people') {
    return <PeopleIcon fontSize='large' />;
  }
  if (name === 'orders') {
    return <ListAltIcon fontSize='large' />;
  }
  if (name === 'totalSales') {
    return <SummarizeIcon fontSize='large' />;
  }
  if (name === 'todaySales') {
    return <TodayIcon fontSize='large' />;
  }
}

function Dashboard() {
  const items = [
    {
      title: 'Customers',
      count: '278',
      background: '#007bff',
      icon: 'people',
    },
    {
      title: 'New Orders',
      count: '1000',
      background: '#ef5350',
      icon: 'orders',
    },
    {
      title: 'Total Sales',
      count: '₹ 12,000',
      background: '#66bb6a',
      icon: 'totalSales',
    },
    {
      title: 'Today Sales',
      count: '₹ 3000',
      background: '#26c6da',
      icon: 'todaySales',
    },
  ];
  return (
    <div className='pcoded-content'>
      <h5>Dashboard</h5>
      <div className='pcoded-inner-content'>
        {/* Main-body start */}
        <div className='main-body'>
          <div className='page-wrapper'>
            {/* Page-body start */}

            <div className='page-body'>
              <div className='card'>
                <div className='dashboard-container'>
                  {items.map((e) => {
                    return (
                      <CountCard
                        title={e.title}
                        count={e.count}
                        background={e.background}
                        icon={<Icons name={e.icon} />}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
