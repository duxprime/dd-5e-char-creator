import { DndCharClassEntry } from '@dnd/schema/class';
import { ClassService } from '../../domain/class';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router';

const service = new ClassService();

export function ClassList() {
    const [classes, setClasses] = useState([] as DndCharClassEntry[]);
    const [selectedClass, setSelectedClass] = useState<DndCharClassEntry>();

    useEffect(() => {
        service.getClassList().then(setClasses);
    }, []);

    const options = classes.map((c) => (
        <option value={c.id} key={c.id}>
            {c.name}
        </option>
    ));

    return (
        <>
            <h1>
                <label htmlFor="class-select">Pick a Class:</label>
            </h1>
            <select id="class-select" onChange={handleChange}>
                {options}
            </select>
            <br />
            {renderCreationButton(selectedClass)}
        </>
    );

    function handleChange(
        ...[e]: Parameters<ChangeEventHandler<HTMLSelectElement>>
    ) {
        const id = e.target.value;
        const selected = classes.find((c) => c.id === id);
        setSelectedClass(selected);
    }
}

function renderCreationButton(selected?: DndCharClassEntry) {
    if (!selected) {
        return null;
    }

    const { name } = selected;
    const path = `/class/${name.toLowerCase()}`;

    return (
        <Link to={path}>
            <button>Create {name}</button>
        </Link>
    );
}
