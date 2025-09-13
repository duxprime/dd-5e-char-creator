import { createBrowserRouter } from 'react-router';
import { App } from './App';
import { ClassList } from './views/class-list';
import { ClassBlock } from './views/class';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: 'class',
        Component: ClassList,
    },
    {
        path: 'class/:id',
        Component: ClassBlock,
    },
]);
