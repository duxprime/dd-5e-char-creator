import { ClassService } from '../../domain/class';
import { useEffect, useState } from 'react';
import { DndCharClassDto } from '@dnd/schema/class';
import { useParams } from 'react-router';

const service = new ClassService();
/**
 * Represents a read-only view of a D&D character class.
 */
export function ClassBlock() {
    const { id } = useParams<{ id: string }>();
    const [classData, setClassData] = useState<DndCharClassDto>();

    if (!id) {
        throw new Error('Could not load class. ID param not provided.');
    }

    useEffect(() => {
        service.getClass(id).then(setClassData);
    }, []);

    if (!classData) {
        // TODO: make this a loader
        return null;
    }

    const { name } = classData;
    const description = renderDescription(classData);
    return (
        <>
            <h1>{name}</h1>
            {description}
        </>
    );
}

function renderDescription(classData: DndCharClassDto) {
    return classData.description.split('\n').map((p) => <p>{p}</p>);
}
