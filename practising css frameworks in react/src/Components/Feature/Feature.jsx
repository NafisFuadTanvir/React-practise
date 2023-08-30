import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>

          <CheckCircleIcon  className="h-4 w-4 text-sky-300 " />
            <span className="p-3">{feature}</span>
        </div>
    );
};

export default Feature;