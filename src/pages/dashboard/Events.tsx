import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';

import { EventItem } from '../../helpers/types';
import { formatDate } from '../../helpers/functions';

import './Events.scss';
import EventItems from '../../components/dashboard/EventItems';

const groupEventsByDate = (events: EventItem[]) => {
    return events.reduce((acc: Record<string, EventItem[]>, event: EventItem) => {
        (acc[event.date] = acc[event.date] || []).push(event);
        return acc;
    }, {});
};

const filterEvents = (events: EventItem[], type: 'upcoming' | 'past') => {
    const now = new Date();
    return events.filter(event => {
        const eventDateTime = new Date(`${event.date}T${event.time.split(' - ')[0]}`);
        return type === 'upcoming' ? eventDateTime >= now : eventDateTime < now;
    });
};

const filterTodayEvents = (events: EventItem[]) => {
    const today = new Date().toISOString().split('T')[0];
    return events.filter(event => event.date === today);
};

export default function Events() {
    const eventList: EventItem[] = [
        { date: '2024-07-08', time: '10:00 - 10:30', name: 'Brian Gonzalez Novoa', type: 'Event type', description: '30-minute meeting' },
        { date: '2024-07-09', time: '21:00 - 21:30', name: 'Jane Doe', type: 'Event type', description: '15 minute meeting' },
        { date: '2024-07-09', time: '21:00 - 21:30', name: 'Jane Doe', type: 'Event type', description: '15 minute meeting' },
        { date: '2024-07-09', time: '21:00 - 21:30', name: 'Jane Doe', type: 'Event type', description: '15 minute meeting' },
        { date: '2024-07-09', time: '21:00 - 21:30', name: 'Jane Doe', type: 'Event type', description: '15 minute meeting' },
        { date: '2024-07-21', time: '12:00 - 12:30', name: 'John Smith', type: 'Event type', description: '45 minute meeting' },
        { date: '2024-07-21', time: '13:00 - 13:30', name: 'Emily Davis', type: 'Event type', description: '20 minute meeting' },
        { date: '2024-07-21', time: '12:00 - 12:30', name: 'John Smith', type: 'Event type', description: '45 minute meeting' },
        { date: '2024-07-24', time: '13:00 - 13:30', name: 'Emily Davis', type: 'Event type', description: '20 minute meeting' },
        { date: '2024-07-24', time: '13:00 - 13:30', name: 'Emily Davis', type: 'Event type', description: '20 minute meeting' },
        { date: '2024-07-25', time: '13:00 - 13:30', name: 'Emily Davis', type: 'Event type', description: '20 minute meeting' }
    ];

    const upcomingEvents = filterEvents(eventList, 'upcoming');
    const pastEvents = filterEvents(eventList, 'past');
    const todayEvents = filterTodayEvents(eventList);

    const groupedUpcomingEvents = groupEventsByDate(upcomingEvents);
    const groupedPastEvents = groupEventsByDate(pastEvents);

    return (
        <section className='events'>
            <div className="events__actions">
                <Button label="Exportar" icon="pi pi-upload" />
                <Button label="Filtrar" icon="pi pi-filter" />
            </div>
            <div className="events__tabView">
                <TabView>
                    <TabPanel header="Upcoming">
                        <div className="events__list">
                            {Object.keys(groupedUpcomingEvents).map(date => (
                                <div key={date}>
                                    <div className="events__list-date">{formatDate(date)}</div>
                                    <div className="events__list-content">
                                        {groupedUpcomingEvents[date].map((event, index) => (
                                            <EventItems
                                                key={index}
                                                time={event.time}
                                                name={event.name}
                                                type={event.type}
                                                description={event.description}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel header="Today">
                        <div className="events__list">
                            {todayEvents.length > 0 ? (
                                <>
                                    <div className="events__list-date">{formatDate(new Date().toISOString().split('T')[0])}</div>
                                    <div className="events__list-content">
                                        {todayEvents.map((event, index) => (
                                            <EventItems
                                                key={index}
                                                time={event.time}
                                                name={event.name}
                                                type={event.type}
                                                description={event.description}
                                            />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <p>No events for today.</p>
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel header="Past">
                        <div className="events__list">
                            {Object.keys(groupedPastEvents).map(date => (
                                <div key={date}>
                                    <div className="events__list-date">{formatDate(date)}</div>
                                    <div className="events__list-content">
                                        {groupedPastEvents[date].map((event, index) => (
                                            <EventItems
                                                key={index}
                                                time={event.time}
                                                name={event.name}
                                                type={event.type}
                                                description={event.description}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </section>
    );
}
