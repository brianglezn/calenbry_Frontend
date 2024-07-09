import { Button } from 'primereact/button';
import './EventItems.scss';

interface EventItemsProps {
    time: string;
    name: string;
    type: string;
    description: string;
}

export default function EventItems({ time, name, type, description }: EventItemsProps) {
    return (
        <div className="events__item">
            <div className="events__item-time">
                <span>{time}</span>
                <span>{name}</span>
            </div>
            <div className="events__item-description">
                <span>{type}</span>
                <span>{description}</span>
            </div>
            <div className="events__item-actions">
                <Button label="Detalles" text />
            </div>
        </div>
    )
}
