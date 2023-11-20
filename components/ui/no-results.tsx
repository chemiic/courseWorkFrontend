import {type FC} from 'react';

const NoResults: FC = () => {
    return (
        <div className="flex items-center justify-center h-full w-full text-neutral-500">
            Товары не найдены.
        </div>
    );
};

export default NoResults;
